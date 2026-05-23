import type { Procedure } from "@/data/procedures";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { useProgress } from "@/lib/progress-store";

export function CompletionBanner({ procedure }: { procedure: Procedure }) {
  const { resetProcedure } = useProgress();
  return (
    <div className="relative overflow-hidden bg-[oklch(0.72_0.18_145/0.12)] border-2 border-[oklch(0.72_0.18_145)] rounded-sm p-6 flex items-center gap-5">
      <div className="hi-vis-stripes absolute inset-y-0 left-0 w-2" />
      <CheckCircle2 className="h-12 w-12 text-[oklch(0.78_0.18_145)] shrink-0 ml-2" />
      <div className="flex-1">
        <div className="text-stencil text-xs font-bold text-[oklch(0.78_0.18_145)]">
          Procedure Complete
        </div>
        <h2 className="text-stencil text-2xl font-bold mt-1">
          {procedure.title} — All Steps Signed Off
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {procedure.steps.length} of {procedure.steps.length} steps verified.
          Ready for QA inspection and sign-off.
        </p>
      </div>
      <button
        onClick={() => resetProcedure(procedure.id)}
        className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm bg-background hover:border-amber text-sm font-bold text-stencil transition"
      >
        <RotateCcw className="h-4 w-4" />
        Reset
      </button>
    </div>
  );
}
