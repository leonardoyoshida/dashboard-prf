import heatmapImg from "@/assets/charts/heatmap.png";
import severidadeImg from "@/assets/charts/severidade.png";
import letalidadeImg from "@/assets/charts/letalidade.png";
import matrizImg from "@/assets/charts/matriz.png";

const charts = [
  {
    title: "Mapa de Calor Geográfico e Zonas de Risco",
    src: heatmapImg,
    caption: "Densidade de acidentes por região — concentração em SC/PR/MG.",
  },
  {
    title: "Severidade e Taxa de Feridos nos Fins de Semana",
    src: severidadeImg,
    caption: "Comparativo de severidade entre dias úteis e fins de semana.",
  },
  {
    title: "Evolução do Volume e Letalidade",
    src: letalidadeImg,
    caption: "Índice de letalidade ao longo do recorte temporal (2020, 2021, 2025).",
  },
  {
    title: "Matriz de Correlação Linear",
    src: matrizImg,
    caption: "Correlação de Pearson entre variáveis numéricas do dataset PRF.",
  },
];

export function EdaSection() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs uppercase tracking-[0.25em] text-warning font-mono">Secção 02 · EDA</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight">
          Análise Exploratória <span className="text-gradient-primary">Visual</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-3xl">
          Visualizações geradas com <span className="text-foreground font-medium">Matplotlib</span> e
          <span className="text-foreground font-medium"> Seaborn</span> sobre o dataset consolidado da PRF.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {charts.map((c) => (
          <figure
            key={c.title}
            className="group glass relative flex flex-col overflow-hidden border border-border/60 hover:border-info/60 transition-all duration-300"
          >
            <div className="px-5 pt-5 pb-3">
              <h3 className="text-base font-display font-semibold text-foreground">
                {c.title}
              </h3>
            </div>
            <div className="flex-1 bg-surface-elevated/40 flex items-center justify-center p-3">
              <img
                src={c.src}
                alt={c.title}
                loading="lazy"
                className="max-h-[360px] w-full object-contain rounded-md"
              />
            </div>
            <figcaption className="px-5 py-3 border-t border-border/60 text-xs font-mono text-muted-foreground">
              {c.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
