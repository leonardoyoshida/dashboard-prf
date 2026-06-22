import { Cpu, MapPin, Network, CheckCircle2, AlertCircle } from "lucide-react";

const centroids = [
  { label: "Região Sul (BR-116/153)", lat: -26.1968, lon: -51.2363 },
  { label: "Região Metropolitana BH/MG (BR-381)", lat: -19.6919, lon: -44.5213 },
  { label: "Mato Grosso (BR-364)", lat: -12.6496, lon: -58.173 },
  { label: "Nordeste / PE", lat: -8.7825, lon: -37.9196 },
  { label: "Nordeste / MA", lat: -4.631, lon: -47.1061 },
];

export function MlSection() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-info font-mono">Secção 05 · Machine Learning</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
          Inteligência Artificial: <span className="text-gradient-primary">A Trinca de Algoritmos</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Modelagem preditiva e espacial sobre a base PRF — três frentes complementares.
        </p>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Card 1 — PySpark MLlib */}
        <article className="glass-elevated p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-info/15 border border-info/30 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-info" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Card 01</p>
              <h3 className="font-display text-lg font-bold text-foreground">PySpark MLlib</h3>
              <p className="text-xs text-info font-mono">Random Forest</p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">Bibliotecas</p>
              <div className="flex flex-wrap gap-1.5">
                {["StringIndexer", "VectorAssembler", "RandomForestClassifier"].map((b) => (
                  <span key={b} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-foreground">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">Engenharia</p>
              <p className="text-muted-foreground leading-relaxed">
                Processamento distribuído no cluster para classificar o risco de óbito.
              </p>
            </div>
          </div>

          <div className="mt-5 pt-5 border-t border-border space-y-3">
            <p className="text-[10px] uppercase tracking-wider text-info font-mono">Resultados (Triagem)</p>
            <div className="rounded-lg bg-surface/70 border border-border p-3">
              <p className="text-xs font-mono text-muted-foreground">[Veículos: 2 · Clima: Bom]</p>
              <p className="font-display text-2xl font-bold text-info tabular-nums">7,82%</p>
              <p className="text-[11px] text-muted-foreground">Probabilidade de Óbito</p>
            </div>
            <div className="rounded-lg bg-surface/70 border border-danger/30 p-3">
              <p className="text-xs font-mono text-muted-foreground">[Veículos: 3 · Chuva]</p>
              <p className="font-display text-2xl font-bold text-danger tabular-nums">11,12%</p>
              <p className="text-[11px] text-muted-foreground">Probabilidade de Óbito</p>
            </div>
          </div>
        </article>

        {/* Card 2 — K-Means */}
        <article className="glass-elevated p-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-warning/15 border border-warning/30 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Card 02</p>
              <h3 className="font-display text-lg font-bold text-foreground">Scikit-Learn</h3>
              <p className="text-xs text-warning font-mono">K-Means Clustering</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">Bibliotecas</p>
              <div className="flex flex-wrap gap-1.5">
                {["sklearn.cluster.KMeans (n=5)", "Pandas"].map((b) => (
                  <span key={b} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-foreground">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Algoritmo não-supervisionado processa Latitude e Longitude para mapear
              <span className="text-warning font-medium"> Zonas Vermelhas (Centróides)</span>.
            </p>
          </div>

          <div className="mt-5 pt-5 border-t border-border">
            <p className="text-[10px] uppercase tracking-wider text-warning font-mono mb-3">5 Coordenadas Críticas</p>
            <ol className="space-y-2">
              {centroids.map((c, i) => (
                <li key={i} className="flex items-start gap-3 rounded-lg bg-surface/60 border border-border p-2.5">
                  <span className="shrink-0 w-6 h-6 rounded-md bg-warning/20 text-warning text-xs font-mono font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{c.label}</p>
                    <p className="text-[10px] font-mono text-muted-foreground tabular-nums">
                      {c.lat.toFixed(4)}, {c.lon.toFixed(4)}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>

        {/* Card 3 — TensorFlow */}
        <article className="glass-elevated p-6 flex flex-col relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-info/20 rounded-full blur-3xl" />
          <div className="relative flex items-center gap-3 mb-4">
            <div className="w-11 h-11 rounded-xl bg-info/15 border border-info/30 flex items-center justify-center">
              <Network className="w-5 h-5 text-info" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">Card 03</p>
              <h3 className="font-display text-lg font-bold text-foreground">TensorFlow / Keras</h3>
              <p className="text-xs text-info font-mono">Rede Neural Profunda (MLP)</p>
            </div>
          </div>

          <div className="relative space-y-3 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1">Bibliotecas</p>
              <div className="flex flex-wrap gap-1.5">
                {["Sequential", "Dense", "StandardScaler"].map((b) => (
                  <span key={b} className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-foreground">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Arquitetura MLP com <span className="text-foreground">3 camadas densas (16 · 8 · 1)</span>,
              otimizador <span className="text-foreground">Adam</span> e ativações
              <span className="text-foreground"> ReLU / Sigmoid</span>.
            </p>
          </div>

          <div className="relative mt-5 pt-5 border-t border-border">
            <p className="text-[10px] uppercase tracking-wider text-info font-mono mb-2">Resultado Oficial</p>
            <div className="rounded-xl bg-[image:var(--gradient-primary)] p-5 shadow-[var(--shadow-glow-primary)]">
              <div className="flex items-center gap-2 text-primary-foreground/80 text-[11px] uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-3.5 h-3.5" /> Acurácia validada
              </div>
              <p className="font-display text-5xl font-bold text-primary-foreground tabular-nums mt-1">93,39%</p>
              <p className="text-xs text-primary-foreground/80 mt-1">
                base de teste · KM da BR × volume de veículos
              </p>
            </div>

            <div className="mt-4 flex gap-3 rounded-lg border border-warning/40 bg-warning/10 p-3">
              <AlertCircle className="w-4 h-4 text-warning shrink-0 mt-0.5" />
              <p className="text-[12px] text-muted-foreground leading-relaxed">
                <span className="text-warning font-semibold">Nota técnica:</span> A base PRF é fortemente desbalanceada,
                este índice atua como <em>baseline inicial</em>. Em produção, recomenda-se aplicação da técnica
                <span className="font-mono text-foreground"> SMOTE</span>.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
