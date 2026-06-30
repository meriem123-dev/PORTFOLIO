import { useEffect, useState } from "react";
import { MousePointerClick } from "lucide-react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const checkPointer = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(checkPointer);

    if (checkPointer) return;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] text-white"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <MousePointerClick size={28} />
    </div>
  );
}