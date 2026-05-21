import { createFileRoute } from "@tanstack/react-router";
import heroBg from "@/assets/cloud_hero.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main
      className="relative flex min-h-screen justify-center overflow-hidden bg-cover bg-center px-6 pt-[18vh]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/20" aria-hidden />
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
                color: "#6fd089",
                textShadow:
                  "0 0 10px rgba(111,208,137,0.5), 0 0 24px rgba(111,208,137,0.3)",
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
      className="group relative overflow-hidden rounded-[8px] border border-white/25 bg-white/10 px-5 py-2 text-xs font-medium text-white backdrop-blur-xl transition-all hover:bg-white/20 hover:border-white/40"
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
