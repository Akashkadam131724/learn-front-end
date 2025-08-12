import { useRef, useEffect } from "react";

const CanvasExample = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#ff5f6d", "#ffc371", "#6a11cb", "#2575fc"];
    let hue = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "#0f0c29");
      gradient.addColorStop(0.5, "#302b63");
      gradient.addColorStop(1, "#24243e");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Aurora blobs
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const x = Math.random() * canvas.width;
        const y = (Math.random() * canvas.height) / 2;
        const radius = Math.random() * 300 + 100;

        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = `${color}55`; // semi-transparent
        ctx.shadowBlur = 100;
        ctx.shadowColor = color;

        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Tiny stars
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const r = Math.random() * 1.5;
        ctx.fillStyle = "#ffffff33";
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={1440}
      height={720}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "1440px",
        height: "720px",
        filter: "blur(2px)",
      }}
    />
  );
};

export default CanvasExample;
