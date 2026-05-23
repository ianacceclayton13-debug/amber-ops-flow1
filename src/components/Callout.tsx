import type { CalloutType } from "@/data/procedures";
import { AlertTriangle, Info, Lightbulb, ShieldAlert } from "lucide-react";

const META: Record<
  CalloutType,
  { label: string; Icon: typeof Info; color: string; bg: string; border: string }
> = {
  caution: {
    label: "Caution",
    Icon: ShieldAlert,
    color: "text-[oklch(0.78_0.17_78)]",
    bg: "bg-[oklch(0.78_0.17_78/0.08)]",
    border: "border-l-[oklch(0.78_0.17_78)]",
  },
  warning: {
    label: "Warning",
    Icon: AlertTriangle,
    color: "text-[oklch(0.7_0.23_27)]",
    bg: "bg-[oklch(0.65_0.23_27/0.08)]",
    border: "border-l-[oklch(0.65_0.23_27)]",
  },
  note: {
    label: "Note",
    Icon: Info,
    color: "text-[oklch(0.75_0.13_230)]",
    bg: "bg-[oklch(0.7_0.13_230/0.08)]",
    border: "border-l-[oklch(0.7_0.13_230)]",
  },
  tip: {
    label: "Tip",
    Icon: Lightbulb,
    color: "text-[oklch(0.78_0.18_145)]",
    bg: "bg-[oklch(0.75_0.18_145/0.08)]",
    border: "border-l-[oklch(0.75_0.18_145)]",
  },
};

export function Callout({
  type,
  title,
  text,
}: {
  type: CalloutType;
  title?: string;
  text: string;
}) {
  const m = META[type];
  const Icon = m.Icon;
  return (
    <div
      className={`flex gap-3 border-l-4 ${m.border} ${m.bg} p-4 rounded-sm`}
    >
      <Icon className={`h-5 w-5 mt-0.5 shrink-0 ${m.color}`} />
      <div className="space-y-1">
        <div
          className={`text-stencil text-xs font-semibold ${m.color}`}
        >
          {m.label}
          {title ? ` — ${title}` : ""}
        </div>
        <p className="text-sm text-foreground/90 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
