import { procedures } from "@/data/procedures";
import { useProgress } from "@/lib/progress-store";
import { CheckCircle2, HardHat, Wrench, CircleDot } from "lucide-react";

const ICONS = [Wrench, HardHat, CircleDot];

export function ProcedureSidebar({
  activeId,
  onSelect,
}: {
  activeId: string;
  onSelect: (id: string) => void;
}) {
  const { completedCount } = useProgress();

  return (
    <aside className="w-72 shrink-0 bg-rail border-r border-border flex flex-col">
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="hi-vis-stripes h-6 w-2 rounded-sm" />
          <div>
            <div className="text-stencil text-[10px] text-amber font-bold">
              Work-Right System
            </div>
            <div className="text-stencil text-base font-bold tracking-wider">
              QMST-D / Type III
            </div>
          </div>
        </div>
        <div className="mt-3 text-[10px] font-mono text-muted-foreground">
          DOC #4302933 · REV 2.1
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
        {procedures.map((p, i) => {
          const Icon = ICONS[i] ?? Wrench;
          const total = p.steps.length;
          const done = completedCount(p.id);
          const pct = Math.round((done / total) * 100);
          const isActive = p.id === activeId;
          const complete = done === total;
          return (
            <button
              key={p.id}
              onClick={() => onSelect(p.id)}
              className={`w-full text-left rounded-sm border p-3 transition group ${
                isActive
                  ? "bg-panel border-amber"
                  : "bg-panel/40 border-border hover:border-amber/40 hover:bg-panel"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 h-8 w-8 grid place-items-center rounded-sm shrink-0 ${
                    isActive
                      ? "bg-amber text-amber-foreground"
                      : "bg-secondary text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {complete ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Icon className="h-4 w-4" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[10px] text-muted-foreground">
                    {p.code}
                  </div>
                  <div className="text-stencil text-sm font-bold leading-tight">
                    {p.title}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          complete ? "bg-[oklch(0.72_0.18_145)]" : "bg-amber"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground tabular-nums">
                      {done}/{total}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="hi-vis-stripes h-2 rounded-sm" />
        <div className="mt-2 text-[10px] font-mono text-muted-foreground text-center">
          DO RIGHT · WORK SAFE
        </div>
      </div>
    </aside>
  );
}
