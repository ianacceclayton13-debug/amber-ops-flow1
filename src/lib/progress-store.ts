import { useEffect, useState, useCallback } from "react";

const KEY = "workright-progress-v1";

type ProgressMap = Record<string, Record<number, boolean>>;

function load(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ProgressMap) : {};
  } catch {
    return {};
  }
}

function save(p: ProgressMap) {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    // ignore
  }
}

let memory: ProgressMap = {};
let initialized = false;
const listeners = new Set<() => void>();

function ensureInit() {
  if (!initialized && typeof window !== "undefined") {
    memory = load();
    initialized = true;
  }
}

export function useProgress() {
  ensureInit();
  const [, force] = useState(0);

  useEffect(() => {
    const l = () => force((n) => n + 1);
    listeners.add(l);
    if (!initialized) {
      memory = load();
      initialized = true;
      force((n) => n + 1);
    }
    return () => {
      listeners.delete(l);
    };
  }, []);

  const toggle = useCallback((procId: string, stepN: number, value?: boolean) => {
    const cur = memory[procId]?.[stepN] ?? false;
    const next = value === undefined ? !cur : value;
    memory = {
      ...memory,
      [procId]: { ...(memory[procId] ?? {}), [stepN]: next },
    };
    save(memory);
    listeners.forEach((l) => l());
  }, []);

  const resetProcedure = useCallback((procId: string) => {
    memory = { ...memory, [procId]: {} };
    save(memory);
    listeners.forEach((l) => l());
  }, []);

  const isDone = useCallback(
    (procId: string, stepN: number) => !!memory[procId]?.[stepN],
    [],
  );

  const completedCount = useCallback(
    (procId: string) =>
      Object.values(memory[procId] ?? {}).filter(Boolean).length,
    [],
  );

  return { toggle, isDone, completedCount, resetProcedure };
}
