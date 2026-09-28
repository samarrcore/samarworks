import React, { useEffect, useRef } from "react";

const MatrixRain = ({ onClose }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネハヒフヘホマミムメモヤユラリルレワSAMARWORKS<>{}/*#$[]+=~";
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    let animationId;
    const draw = () => {
      ctx.fillStyle = "rgba(8, 12, 16, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#10b981";
      ctx.font = `${fontSize}px 'Cascadia Code', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Bright green head
        ctx.fillStyle = drops[i] % 5 === 0 ? "#a7f3d0" : "#10b981";
        ctx.fillText(text, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(5, 8, 11, 0.92)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer"
      }}
      onClick={onClose}
    >
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0 }} />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#34d399",
          fontFamily: "'Cascadia Code', monospace",
          fontSize: "0.85rem",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)"
        }}
      >
        <span>[ MATRIX RAIN PROTOCOL ACTIVATED // ESC OR CLICK ANYWHERE TO EXIT ]</span>
        <button
          onClick={onClose}
          style={{
            background: "#10b981",
            color: "#05080c",
            border: "none",
            padding: "0.4rem 1rem",
            borderRadius: "4px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          ✕ DISCONNECT
        </button>
      </div>
    </div>
  );
};

export default MatrixRain;
