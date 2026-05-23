import type { Procedure } from "@/data/procedures";
import { useProgress } from "@/lib/progress-store";
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

export function StepRail({
  procedure,
  activeStep,
  onSelect,
}: {
  procedure: Procedure;
  activeStep: number;
  onSelect: (n: number) => void;
}) {
  const { isDone } = useProgress();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current?.querySelector<HTMLElement>(
      `[data-step="${activeStep}"]`,
    );
    el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeStep, procedure.id]);

  return (
    <div
      ref={containerRef}
      className="w-20 shrink-0 bg-panel border-r border-border overflow-y-auto py-4"
    >
      <div className="text-stencil text-[9px] text-muted-foreground text-center mb-3">
        Steps
      </div>
      <div className="flex flex-col items-center gap-1.5">
        {procedure.steps.map((s) => {
          const done = isDone(procedure.id, s.n);
          const active = s.n === activeStep;
          return (
            <button
              key={s.n}
              data-step={s.n}
              onClick={() => onSelect(s.n)}
              className={`relative h-10 w-10 rounded-sm border font-mono text-xs font-bold grid place-items-center transition ${
                active
                  ? "bg-amber text-amber-foreground border-amber shadow-[0_0_0_3px_oklch(0.78_0.17_78/0.2)]"
                  : done
                    ? "bg-[oklch(0.72_0.18_145/0.15)] text-[oklch(0.78_0.18_145)] border-[oklch(0.72_0.18_145/0.4)]"
                    : "bg-secondary text-muted-foreground border-border hover:border-amber/40 hover:text-foreground"
              }`}
              title={s.title}
            >
              {done && !active ? <Check className="h-4 w-4" /> : s.n}
            </button>
          );
        })}
      </div>
    </div>
  );
}
