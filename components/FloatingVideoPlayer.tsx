"use client";

import { useEffect, useRef, useState } from "react";
import { GripIcon, MinusIcon, PlayIcon, XIcon } from "./icons";

const STORAGE_KEY = "ww-video-widget-closed";
const HEIGHT_HEADER = 30;
const MARGIN = 12;

export default function FloatingVideoPlayer() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const dragInfo = useRef<{
    dragging: boolean;
    moved: boolean;
    startX: number;
    startY: number;
    originLeft: number;
    originTop: number;
  } | null>(null);

  const [closed, setClosed] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [positioned, setPositioned] = useState(false);
  const [pos, setPos] = useState({ left: 0, top: 0 });

  useEffect(() => {
    try {
      // One-time read of browser APIs unavailable during SSR — there is no
      // external-store subscription to hook into, so this can't be modeled
      // any other way than a mount-time effect.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (sessionStorage.getItem(STORAGE_KEY) === "1") setClosed(true);
    } catch {
      // sessionStorage unavailable — ignore, widget just stays visible
    }
  }, []);

  function beginDrag(clientX: number, clientY: number) {
    const el = widgetRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    dragInfo.current = {
      dragging: true,
      moved: false,
      startX: clientX,
      startY: clientY,
      originLeft: rect.left,
      originTop: rect.top,
    };
    if (!positioned) {
      setPositioned(true);
      setPos({ left: rect.left, top: rect.top });
    }
  }

  function updateDrag(clientX: number, clientY: number) {
    const info = dragInfo.current;
    const el = widgetRef.current;
    if (!info?.dragging || !el) return;

    const deltaX = clientX - info.startX;
    const deltaY = clientY - info.startY;
    if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) info.moved = true;

    const width = el.offsetWidth;
    const height = el.offsetHeight;
    const maxLeft = window.innerWidth - width - MARGIN;
    const maxTop = window.innerHeight - height - MARGIN;

    const left = Math.min(Math.max(MARGIN, info.originLeft + deltaX), Math.max(MARGIN, maxLeft));
    const top = Math.min(Math.max(MARGIN, info.originTop + deltaY), Math.max(MARGIN, maxTop));

    setPos({ left, top });
  }

  function endDrag() {
    if (dragInfo.current) dragInfo.current.dragging = false;
  }

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.currentTarget.setPointerCapture(e.pointerId);
    beginDrag(e.clientX, e.clientY);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragInfo.current?.dragging) return;
    updateDrag(e.clientX, e.clientY);
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // pointer capture may already be released — safe to ignore
    }
    endDrag();
  }

  function close() {
    setClosed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // sessionStorage unavailable — ignore
    }
  }

  if (closed) return null;

  return (
    <div
      ref={widgetRef}
      style={positioned ? { left: pos.left, top: pos.top, right: "auto", bottom: "auto" } : undefined}
      className={`fixed z-40 select-none ${positioned ? "" : "bottom-5 left-4 md:bottom-7 md:left-7"}`}
    >
      <div
        className={`card-surface overflow-hidden border border-brand-200/60 transition-[width,height] duration-200 ${
          minimized ? "h-14 w-14 rounded-full" : "w-28 rounded-2xl lg:w-36"
        }`}
      >
        {minimized ? (
          <button
            type="button"
            aria-label="Expand spa video"
            onClick={() => setMinimized(false)}
            className="flex h-14 w-14 items-center justify-center bg-brand-600 text-cream"
          >
            <PlayIcon className="h-5 w-5" />
          </button>
        ) : (
          <>
            <div
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{ height: HEIGHT_HEADER }}
              className="flex touch-none cursor-grab items-center justify-between bg-brand-600 px-2.5 text-cream active:cursor-grabbing"
            >
              <span className="flex items-center gap-1.5 text-[10.5px] font-medium tracking-wide">
                <GripIcon className="h-3.5 w-3.5 opacity-80" />
                <span className="hidden lg:inline">Spa</span>
              </span>
              <div className="flex items-center gap-0.5">
                <button
                  type="button"
                  aria-label="Minimize video"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={() => setMinimized(true)}
                  className="rounded-full p-1 hover:bg-white/15"
                >
                  <MinusIcon className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Close video"
                  onPointerDown={(e) => e.stopPropagation()}
                  onClick={close}
                  className="rounded-full p-1 hover:bg-white/15"
                >
                  <XIcon className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <video
              src="/imgs/spa-ambience.mp4"
              autoPlay
              muted
              loop
              playsInline
              disablePictureInPicture
              className="block aspect-9/16 w-full bg-brand-900 object-cover"
            />
          </>
        )}
      </div>
    </div>
  );
}
