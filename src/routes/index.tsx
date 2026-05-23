import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { procedures } from "@/data/procedures";
import { ProcedureSidebar } from "@/components/ProcedureSidebar";
import { StepRail } from "@/components/StepRail";
import { StepCard } from "@/components/StepCard";
import { CompletionBanner } from "@/components/CompletionBanner";
import { useProgress } from "@/lib/progress-store";

export const Route = createFileRoute("/")({
  component: WorkRight,
  head: () => ({
    meta: [
      { title: "Work-Right · QMST-D Type III Service Tool" },
      {
        name: "description",
        content:
          "Industrial work-right system for QMST-D Type III service tool disassembly, assembly, and ball seat module procedures with per-step verification.",
      },
    ],
  }),
});

function WorkRight() {
  const [activeProcId, setActiveProcId] = useState(procedures[0].id);
  const [activeStepByProc, setActiveStepByProc] = useState<Record<string, number>>(
    () => Object.fromEntries(procedures.map((p) => [p.id, 1])),
  );

  const procedure = useMemo(
    () => procedures.find((p) => p.id === activeProcId)!,
    [activeProcId],
  );
  const activeStepN = activeStepByProc[activeProcId] ?? 1;
  const step = procedure.steps.find((s) => s.n === activeStepN) ?? procedure.steps[0];

  const { completedCount } = useProgress();
  const done = completedCount(procedure.id);
  const total = procedure.steps.length;
  const pct = Math.round((done / total) * 100);
  const allDone = done === total;

  const setStep = (n: number) =>
    setActiveStepByProc((prev) => ({ ...prev, [activeProcId]: n }));

  return (
    <div className="min-h-screen flex bg-background">
      <ProcedureSidebar
        activeId={activeProcId}
        onSelect={(id) => setActiveProcId(id)}
      />

      <StepRail
        procedure={procedure}
        activeStep={activeStepN}
        onSelect={setStep}
      />

      <main className="flex-1 min-w-0 flex flex-col">
        <header className="border-b border-border bg-panel/60 backdrop-blur px-8 py-5">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="font-mono text-[11px] text-muted-foreground">
                {procedure.code} · ASSY DRAWING 100407787
              </div>
              <h2 className="text-stencil text-2xl font-bold mt-1">
                {procedure.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {procedure.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-4 min-w-[280px]">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-stencil text-[10px] font-bold text-muted-foreground">
                    Overall Progress
                  </span>
                  <span className="font-mono text-xs tabular-nums">
                    {done}/{total} · {pct}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      allDone ? "bg-[oklch(0.72_0.18_145)]" : "bg-amber"
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {allDone && <CompletionBanner procedure={procedure} />}
          <StepCard
            procedure={procedure}
            step={step}
            onPrev={() => setStep(Math.max(1, activeStepN - 1))}
            onNext={() => setStep(Math.min(total, activeStepN + 1))}
            hasPrev={activeStepN > 1}
            hasNext={activeStepN < total}
          />

          <div className="text-[10px] font-mono text-muted-foreground text-center pt-4">
            RCPL-Documentation · InTouch #4302933 · Progress saved locally
          </div>
        </div>
      </main>
    </div>
  );
}
