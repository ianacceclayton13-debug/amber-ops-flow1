import type { Procedure, Step } from "@/data/procedures";
import { Callout } from "@/components/Callout";
import { useProgress } from "@/lib/progress-store";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

export function StepCard({
  procedure,
  step,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  procedure: Procedure;
  step: Step;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const { isDone, toggle } = useProgress();
  const done = isDone(procedure.id, step.n);

  return (
    <article className="bg-card border border-border rounded-sm">
      <header className="flex items-stretch border-b border-border">
        <div className="hi-vis-stripes w-3" />
        <div className="flex-1 p-6">
          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="text-stencil text-amber font-bold">
              {procedure.code}
            </span>
            <span>·</span>
            <span>
              STEP {step.n} OF {procedure.steps.length}
            </span>
          </div>
          <h1 className="mt-2 text-stencil text-3xl font-bold leading-tight">
            {step.title}
          </h1>
        </div>
        <div className="hidden md:flex flex-col items-center justify-center px-6 border-l border-border bg-panel min-w-[120px]">
          <div className="font-mono text-[10px] text-muted-foreground">
            STEP
          </div>
          <div className="text-stencil text-5xl font-bold text-amber tabular-nums">
            {String(step.n).padStart(2, "0")}
          </div>
        </div>
      </header>

      <div className="p-6 space-y-5">
        <p className="text-base leading-relaxed text-foreground/90">
          {step.body}
        </p>

        {step.callouts && step.callouts.length > 0 && (
          <div className="space-y-3">
            {step.callouts.map((c, i) => (
              <Callout key={i} {...c} />
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-border bg-panel/50 p-4 flex items-center gap-4">
        <button
          onClick={() => toggle(procedure.id, step.n)}
          className={`flex items-center gap-3 px-4 py-3 rounded-sm border-2 transition flex-1 ${
            done
              ? "bg-[oklch(0.72_0.18_145/0.15)] border-[oklch(0.72_0.18_145)]"
              : "bg-background border-border hover:border-amber"
          }`}
        >
          <div
            className={`h-6 w-6 rounded-sm border-2 grid place-items-center transition ${
              done
                ? "bg-[oklch(0.72_0.18_145)] border-[oklch(0.72_0.18_145)]"
                : "border-muted-foreground"
            }`}
          >
            {done && <Check className="h-4 w-4 text-background" strokeWidth={3} />}
          </div>
          <span className="text-stencil text-sm font-bold">
            {done ? "Step Verified & Signed Off" : "Verify & Sign Off This Step"}
          </span>
        </button>

        <div className="flex gap-2">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="h-12 w-12 grid place-items-center rounded-sm border border-border bg-background hover:border-amber disabled:opacity-30 disabled:hover:border-border transition"
            aria-label="Previous step"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="h-12 px-4 grid place-items-center rounded-sm bg-amber text-amber-foreground font-bold text-sm text-stencil hover:opacity-90 disabled:opacity-30 transition flex-row gap-2 flex"
          >
            Next
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </footer>
    </article>
  );
}
