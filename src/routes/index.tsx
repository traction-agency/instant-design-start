import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/cloud_hero.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/20" aria-hidden />
      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <h1
          className="text-5xl font-semibold leading-tight text-white sm:text-6xl md:text-7xl"
          style={{ fontFamily: '"Sora", sans-serif' }}
        >
          Get started in{" "}
          <span className="relative inline-block">
            <span
              className="italic"
              style={{
                fontFamily: '"Lora", serif',
                color: "#a8f5b4",
                textShadow:
                  "0 0 12px rgba(168,245,180,0.55), 0 0 28px rgba(168,245,180,0.35)",
              }}
            >
              seconds
            </span>
            <svg
              className="absolute -right-5 -top-3 h-6 w-6 sm:-right-7 sm:-top-4 sm:h-8 sm:w-8"
              viewBox="0 0 24 24"
              fill="white"
              aria-hidden
            >
              <path d="M12 0 L13.8 10.2 L24 12 L13.8 13.8 L12 24 L10.2 13.8 L0 12 L10.2 10.2 Z" />
            </svg>
          </span>
        </h1>
        <p
          className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
          style={{ fontFamily: '"Sora", sans-serif', fontWeight: 300 }}
        >
          Receive the first design within just a few days. No proposals or contracts required.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
      className="group relative overflow-hidden rounded-[10px] border border-white/25 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all hover:bg-white/20 hover:border-white/40"
      style={{
        fontFamily: '"Sora", sans-serif',
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.25)",
      }}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[10px] opacity-60"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 100%)",
        }}
      />
    </button>
  );
}
