import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/cloud_hero.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative flex min-h-screen justify-center overflow-hidden px-6 pt-[18vh]">
      {/* Background image with increased saturation */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})`, filter: "saturate(1.4)" }}
      />
      <div className="absolute inset-0 bg-black/20" aria-hidden />

      {/* SVG distortion filter — required once per page for liquid glass */}
      <svg style={{ display: "none" }} aria-hidden="true">
        <filter id="glass-distortion">
          <feTurbulence type="turbulence" baseFrequency="0.008" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="77" />
        </filter>
      </svg>
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        <h1
          className="text-3xl font-normal leading-tight text-white sm:text-4xl md:text-5xl"
          style={{
            fontFamily: '"Lora", serif',
            textShadow:
              "0 0 12px rgba(255,255,255,0.55), 0 0 28px rgba(255,255,255,0.3)",
          }}
        >
          Get started in{" "}
          <span className="relative inline-block">
            <span
              className="italic"
              style={{
                fontFamily: '"Lora", serif',
                color: "#6bb23c",
                textShadow:
                  "0 0 10px rgba(61,165,90,0.5), 0 0 24px rgba(61,165,90,0.3), 0 0 12px rgba(255,255,255,0.55), 0 0 28px rgba(255,255,255,0.3)",
              }}
            >
              seconds
            </span>
            <svg
              className="absolute -right-7 -top-5 h-7 w-7 sm:-right-9 sm:-top-6 sm:h-9 sm:w-9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.25"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M12 1 C 12.6 7.2 16.8 11.4 23 12 C 16.8 12.6 12.6 16.8 12 23 C 11.4 16.8 7.2 12.6 1 12 C 7.2 11.4 11.4 7.2 12 1 Z" />
            </svg>
          </span>
        </h1>
        <p
          className="mt-4 max-w-md text-sm text-white/85"
          style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300 }}
        >
          Receive the first design within just a few days. No proposals or contracts required.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <GlassButton>See Plans</GlassButton>
          <GlassButton>Book demo</GlassButton>
        </div>
      </div>
    </main>
  );
}

function GlassButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={
        {
          "--bg-color": "rgba(255, 255, 255, 0.08)",
          "--highlight": "rgba(255, 255, 255, 0.35)",
          position: "relative",
          display: "inline-block",
          padding: "10px 22px",
          borderRadius: "50px",
          cursor: "pointer",
          overflow: "hidden",
          background: "transparent",
          border: "none",
          outline: "none",
          transition: "transform 0.2s ease",
          mixBlendMode: "difference",
        } as React.CSSProperties
      }
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
      onMouseDown={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(0.95)")}
      onMouseUp={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")}
    >
      {/* Layer 1 — backdrop distortion */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 1,
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          filter: "url(#glass-distortion) saturate(120%) brightness(1.15)",
        }}
      />
      {/* Layer 2 — translucent tinted overlay + border */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 2,
          background: "var(--bg-color)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      />
      {/* Layer 3 — specular highlight */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 3,
          boxShadow: "inset 1px 1px 1px var(--highlight)",
        }}
      />
      {/* Layer 4 — content */}
      <div
        style={{
          position: "relative",
          zIndex: 4,
          color: "#ffffff",
          fontFamily: '"Sora", sans-serif',
          fontWeight: 500,
          fontSize: "0.75rem",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </div>
    </button>
  );
}
