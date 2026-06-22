import { Database, BarChart3, AlertTriangle, Network, Brain, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export type SectionId = "overview" | "eda" | "pandemic" | "patterns" | "ml";

const items: { id: SectionId; label: string; icon: typeof Database; tag: string }[] = [
  { id: "overview", label: "Engenharia & Visão", icon: Database, tag: "01" },
  { id: "eda", label: "Visualização (EDA)", icon: BarChart3, tag: "02" },
  { id: "pandemic", label: "Efeito Pandemia", icon: AlertTriangle, tag: "03" },
  { id: "patterns", label: "Mineração de Padrões", icon: Network, tag: "04" },
  { id: "ml", label: "Machine Learning", icon: Brain, tag: "05" },
];

export function Sidebar({
  active,
  onSelect,
}: {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}) {
  return (
    <aside className="hidden lg:flex w-72 shrink-0 flex-col border-r border-border/60 bg-surface/40 backdrop-blur-xl">
      <div className="px-6 py-7 border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow-primary)]">
            <Activity className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">TCC · Big Data & IA</p>
            <h1 className="font-display font-semibold text-foreground leading-tight">PRF Analytics</h1>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {items.map((item) => {
          const isActive = active === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={cn(
                "w-full group flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200",
                isActive
                  ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow-primary)]"
                  : "text-muted-foreground hover:bg-surface-elevated/60 hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded",
                  isActive ? "bg-black/20 text-primary-foreground" : "bg-surface-elevated/70 text-muted-foreground"
                )}
              >
                {item.tag}
              </span>
              <Icon className="w-4 h-4 shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/60">
        <div className="glass p-4">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Cluster</p>
          <p className="text-xs text-foreground font-mono">Databricks · PySpark 3.5</p>
          <p className="text-xs text-muted-foreground font-mono mt-1">Unity Catalog · Vol.</p>
        </div>
      </div>
    </aside>
  );
}
