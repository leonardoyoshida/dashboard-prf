import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Activity, AlertCircle, AlertOctagon, AlertTriangle, BarChart3, Brain, CheckCircle2, Cpu, Database, FileWarning, GitBranch, GitMerge, Lightbulb, MapPin, Menu, MoveRight, Network, RotateCcw, Skull, Sun, TrendingUp } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/dashboard/Sidebar.tsx
var items = [
	{
		id: "overview",
		label: "Engenharia & Visão",
		icon: Database,
		tag: "01"
	},
	{
		id: "eda",
		label: "Visualização (EDA)",
		icon: BarChart3,
		tag: "02"
	},
	{
		id: "pandemic",
		label: "Efeito Pandemia",
		icon: AlertTriangle,
		tag: "03"
	},
	{
		id: "patterns",
		label: "Mineração de Padrões",
		icon: Network,
		tag: "04"
	},
	{
		id: "ml",
		label: "Machine Learning",
		icon: Brain,
		tag: "05"
	}
];
function Sidebar({ active, onSelect }) {
	return /* @__PURE__ */ jsxs("aside", {
		className: "hidden lg:flex w-72 shrink-0 flex-col border-r border-border/60 bg-surface/40 backdrop-blur-xl",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "px-6 py-7 border-b border-border/60",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-10 h-10 rounded-xl flex items-center justify-center bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow-primary)]",
						children: /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-primary-foreground" })
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
						children: "TCC · Big Data & IA"
					}), /* @__PURE__ */ jsx("h1", {
						className: "font-display font-semibold text-foreground leading-tight",
						children: "PRF Analytics"
					})] })]
				})
			}),
			/* @__PURE__ */ jsx("nav", {
				className: "flex-1 p-4 space-y-1",
				children: items.map((item) => {
					const isActive = active === item.id;
					const Icon = item.icon;
					return /* @__PURE__ */ jsxs("button", {
						onClick: () => onSelect(item.id),
						className: cn("w-full group flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200", isActive ? "bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow-primary)]" : "text-muted-foreground hover:bg-surface-elevated/60 hover:text-foreground"),
						children: [
							/* @__PURE__ */ jsx("span", {
								className: cn("text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded", isActive ? "bg-black/20 text-primary-foreground" : "bg-surface-elevated/70 text-muted-foreground"),
								children: item.tag
							}),
							/* @__PURE__ */ jsx(Icon, { className: "w-4 h-4 shrink-0" }),
							/* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium",
								children: item.label
							})
						]
					}, item.id);
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "p-4 border-t border-border/60",
				children: /* @__PURE__ */ jsxs("div", {
					className: "glass p-4",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[10px] uppercase tracking-widest text-muted-foreground mb-1",
							children: "Cluster"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-foreground font-mono",
							children: "Databricks · PySpark 3.5"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground font-mono mt-1",
							children: "Unity Catalog · Vol."
						})
					]
				})
			})
		]
	});
}
//#endregion
//#region src/components/dashboard/sections/OverviewSection.tsx
var yearMetrics = [
	{
		year: "2020",
		value: 7185,
		label: "registos processados",
		tone: "info",
		badge: "Baseline"
	},
	{
		year: "2021",
		value: 7326,
		label: "registos processados",
		tone: "warning",
		badge: "+1.96%"
	},
	{
		year: "2025",
		value: 7844,
		label: "registos processados",
		tone: "danger",
		badge: "+9.17%",
		highlight: true
	}
];
var weekendData = [
	{
		year: "2020",
		acc: 2196,
		fer: 2770
	},
	{
		year: "2021",
		acc: 2366,
		fer: 2783
	},
	{
		year: "2025",
		acc: 2395,
		fer: 2864
	}
];
var toneClass = {
	info: "from-[oklch(0.7_0.19_240/30%)] to-transparent border-[oklch(0.7_0.19_240/40%)]",
	warning: "from-[oklch(0.78_0.17_70/30%)] to-transparent border-[oklch(0.78_0.17_70/40%)]",
	danger: "from-[oklch(0.65_0.24_27/35%)] to-transparent border-[oklch(0.65_0.24_27/50%)]"
};
var toneText = {
	info: "text-info",
	warning: "text-warning",
	danger: "text-danger"
};
function OverviewSection() {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.25em] text-info font-mono",
					children: "Secção 01 · Engenharia de Dados"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight",
					children: [
						"Pipeline de ",
						/* @__PURE__ */ jsx("span", {
							className: "text-gradient-primary",
							children: "Big Data"
						}),
						": PySpark no Databricks"
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-4 text-muted-foreground max-w-3xl leading-relaxed",
					children: [
						"Dados ingeridos via ",
						/* @__PURE__ */ jsx("span", {
							className: "text-foreground font-medium",
							children: "Unity Catalog Volumes"
						}),
						" e tratados no cluster. Aplicou-se ",
						/* @__PURE__ */ jsx("code", {
							className: "text-info font-mono text-sm bg-surface px-1.5 py-0.5 rounded",
							children: "unionByName"
						}),
						", conversões de tipagem com ",
						/* @__PURE__ */ jsx("code", {
							className: "text-info font-mono text-sm bg-surface px-1.5 py-0.5 rounded",
							children: "regexp_replace"
						}),
						" e limpeza de nulos."
					]
				})
			] }),
			/* @__PURE__ */ jsx("section", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-5",
				children: yearMetrics.map((m) => /* @__PURE__ */ jsxs("div", {
					className: `glass-elevated relative overflow-hidden p-7 bg-gradient-to-br ${toneClass[m.tone]}`,
					children: [
						m.highlight && /* @__PURE__ */ jsxs("div", {
							className: "absolute top-5 right-5 flex items-center gap-1 text-xs font-mono text-danger",
							children: [/* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4" }), " ALTA"]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 mb-4",
							children: [/* @__PURE__ */ jsx(Database, { className: `w-4 h-4 ${toneText[m.tone]}` }), /* @__PURE__ */ jsxs("span", {
								className: "text-xs uppercase tracking-widest text-muted-foreground font-mono",
								children: ["Ano ", m.year]
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: `text-5xl font-display font-bold tabular-nums ${toneText[m.tone]}`,
							children: m.value.toLocaleString("pt-BR")
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: m.label
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 inline-flex items-center gap-2 text-xs font-mono px-2.5 py-1 rounded-md bg-black/30 border border-border/60",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: toneText[m.tone],
									children: "●"
								}),
								" ",
								m.badge
							]
						})
					]
				}, m.year))
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "glass p-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-5",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx(GitMerge, { className: "w-4 h-4 text-warning" }), /* @__PURE__ */ jsx("h2", {
							className: "text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono",
							children: "Sub-métricas · Recorte de Fins de Semana (Sex–Dom)"
						})]
					}), /* @__PURE__ */ jsx(FileWarning, { className: "w-4 h-4 text-warning" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-3 gap-4",
					children: weekendData.map((w) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-lg border border-border/70 bg-surface/50 p-5",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-xs font-mono text-muted-foreground uppercase tracking-widest",
							children: w.year
						}), /* @__PURE__ */ jsxs("div", {
							className: "mt-3 flex items-baseline gap-6",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-2xl font-display font-bold text-foreground tabular-nums",
								children: w.acc.toLocaleString("pt-BR")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "acidentes"
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-2xl font-display font-bold text-warning tabular-nums",
								children: w.fer.toLocaleString("pt-BR")
							}), /* @__PURE__ */ jsx("p", {
								className: "text-[11px] uppercase tracking-wider text-muted-foreground",
								children: "feridos"
							})] })]
						})]
					}, w.year))
				})]
			})
		]
	});
}
//#endregion
//#region src/components/dashboard/sections/EdaSection.tsx
var charts = [
	{
		title: "Mapa de Calor Geográfico e Zonas de Risco",
		src: "/dashboard-prf/assets/heatmap-DtVEyIyo.png",
		caption: "Densidade de acidentes por região — concentração em SC/PR/MG."
	},
	{
		title: "Severidade e Taxa de Feridos nos Fins de Semana",
		src: "/dashboard-prf/assets/severidade-DCMKt9H9.png",
		caption: "Comparativo de severidade entre dias úteis e fins de semana."
	},
	{
		title: "Evolução do Volume e Letalidade",
		src: "/dashboard-prf/assets/letalidade-CC27T5Na.png",
		caption: "Índice de letalidade ao longo do recorte temporal (2020, 2021, 2025)."
	},
	{
		title: "Matriz de Correlação Linear",
		src: "/dashboard-prf/assets/matriz-CXwuWHQS.png",
		caption: "Correlação de Pearson entre variáveis numéricas do dataset PRF."
	}
];
function EdaSection() {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ jsxs("header", { children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-xs uppercase tracking-[0.25em] text-warning font-mono",
				children: "Secção 02 · EDA"
			}),
			/* @__PURE__ */ jsxs("h1", {
				className: "mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight",
				children: ["Análise Exploratória ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient-primary",
					children: "Visual"
				})]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-4 text-muted-foreground max-w-3xl",
				children: [
					"Visualizações geradas com ",
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground font-medium",
						children: "Matplotlib"
					}),
					" e",
					/* @__PURE__ */ jsx("span", {
						className: "text-foreground font-medium",
						children: " Seaborn"
					}),
					" sobre o dataset consolidado da PRF."
				]
			})
		] }), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-6",
			children: charts.map((c) => /* @__PURE__ */ jsxs("figure", {
				className: "group glass relative flex flex-col overflow-hidden border border-border/60 hover:border-info/60 transition-all duration-300",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "px-5 pt-5 pb-3",
						children: /* @__PURE__ */ jsx("h3", {
							className: "text-base font-display font-semibold text-foreground",
							children: c.title
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex-1 bg-surface-elevated/40 flex items-center justify-center p-3",
						children: /* @__PURE__ */ jsx("img", {
							src: c.src,
							alt: c.title,
							loading: "lazy",
							className: "max-h-[360px] w-full object-contain rounded-md"
						})
					}),
					/* @__PURE__ */ jsx("figcaption", {
						className: "px-5 py-3 border-t border-border/60 text-xs font-mono text-muted-foreground",
						children: c.caption
					})
				]
			}, c.title))
		})]
	});
}
//#endregion
//#region src/components/dashboard/sections/PandemicSection.tsx
var data = [
	{
		cause: "Velocidade Incompatível",
		mortos: 117,
		color: "oklch(0.65 0.24 27)"
	},
	{
		cause: "Falta de Atenção",
		mortos: 98,
		color: "oklch(0.7 0.21 35)"
	},
	{
		cause: "Pedestres",
		mortos: 70,
		color: "oklch(0.75 0.18 50)"
	}
];
function PandemicSection() {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ jsxs("header", { children: [/* @__PURE__ */ jsx("p", {
			className: "text-xs uppercase tracking-[0.25em] text-danger font-mono",
			children: "Secção 03 · Causas Raízes"
		}), /* @__PURE__ */ jsxs("h1", {
			className: "mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight",
			children: ["Análise de Letalidade: ", /* @__PURE__ */ jsx("span", {
				className: "text-danger",
				children: "O Efeito Pandemia"
			})]
		})] }), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-5 gap-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-3 glass-elevated p-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-6",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "text-xs uppercase tracking-widest text-muted-foreground font-mono",
						children: "Ranking"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "font-display text-xl font-semibold text-foreground",
						children: ["Top 3 Causas de Mortes em 2020 ", /* @__PURE__ */ jsx("span", {
							className: "text-muted-foreground",
							children: "(Lockdown)"
						})]
					})] }), /* @__PURE__ */ jsx(Skull, { className: "w-6 h-6 text-danger" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "h-72",
					children: /* @__PURE__ */ jsx(ResponsiveContainer, {
						width: "100%",
						height: "100%",
						children: /* @__PURE__ */ jsxs(BarChart, {
							data,
							layout: "vertical",
							margin: {
								left: 20,
								right: 40,
								top: 10,
								bottom: 0
							},
							children: [
								/* @__PURE__ */ jsx(XAxis, {
									type: "number",
									stroke: "oklch(0.7 0.02 256)",
									tick: {
										fill: "oklch(0.7 0.02 256)",
										fontSize: 12
									}
								}),
								/* @__PURE__ */ jsx(YAxis, {
									type: "category",
									dataKey: "cause",
									stroke: "oklch(0.7 0.02 256)",
									width: 170,
									tick: {
										fill: "oklch(0.9 0.01 256)",
										fontSize: 12
									}
								}),
								/* @__PURE__ */ jsx(Tooltip, {
									cursor: { fill: "oklch(1 0 0 / 5%)" },
									contentStyle: {
										background: "oklch(0.22 0.028 256)",
										border: "1px solid oklch(1 0 0 / 10%)",
										borderRadius: 12,
										color: "oklch(0.96 0.005 250)"
									}
								}),
								/* @__PURE__ */ jsx(Bar, {
									dataKey: "mortos",
									radius: [
										0,
										8,
										8,
										0
									],
									animationDuration: 1200,
									children: data.map((d, i) => /* @__PURE__ */ jsx(Cell, { fill: d.color }, i))
								})
							]
						})
					})
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-2 relative overflow-hidden rounded-xl p-7 bg-[image:var(--gradient-danger)] shadow-[var(--shadow-glow-danger)] text-white",
				children: [
					/* @__PURE__ */ jsx(AlertOctagon, { className: "w-8 h-8 mb-4 opacity-90" }),
					/* @__PURE__ */ jsx("p", {
						className: "text-[11px] uppercase tracking-[0.25em] opacity-80 font-mono",
						children: "Insight"
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-1 font-display text-2xl font-bold leading-tight",
						children: "A Descoberta das Pistas Vazias"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-4 text-sm leading-relaxed opacity-95",
						children: [
							"Em 2020, devido ao lockdown, o volume geral de tráfego caiu, mas a letalidade explodiu. A ",
							/* @__PURE__ */ jsx("strong", { children: "“Velocidade Incompatível”" }),
							" gerou ",
							/* @__PURE__ */ jsx("strong", { children: "117 mortes" }),
							" em apenas",
							/* @__PURE__ */ jsx("strong", { children: " 90 acidentes" }),
							" — média gravíssima de ",
							/* @__PURE__ */ jsx("strong", { children: "1,3 mortes/acidente" }),
							"."
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 grid grid-cols-3 gap-3 text-center",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "bg-black/25 rounded-lg p-3",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-2xl font-display font-bold",
									children: "117"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-wider opacity-80",
									children: "mortes"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-black/25 rounded-lg p-3",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-2xl font-display font-bold",
									children: "90"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-wider opacity-80",
									children: "acidentes"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "bg-black/25 rounded-lg p-3",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-2xl font-display font-bold",
									children: "1,3"
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-wider opacity-80",
									children: "mortes/acid"
								})]
							})
						]
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/components/dashboard/sections/PatternsSection.tsx
var rules = [
	{
		confidence: 97.42,
		icon: Sun,
		title: "Sol = Pleno Dia",
		text: "Quando o tempo é de \"Sol\", os acidentes acontecem em \"Pleno dia\"."
	},
	{
		confidence: 67.2,
		icon: MoveRight,
		title: "Colisão Transversal",
		text: "Se a colisão é \"Transversal\", a esmagadora maioria ocorre de \"Pleno Dia\" (não à noite)."
	},
	{
		confidence: 63.4,
		icon: GitBranch,
		title: "Colisão Traseira",
		text: "Colisões \"Traseiras\" ocorrem maioritariamente com \"Céu Claro\" e de \"Pleno dia\"."
	},
	{
		confidence: 62.93,
		icon: RotateCcw,
		title: "Tombamentos",
		text: "A grande maioria dos \"Tombamentos\" de veículos ocorre em \"Pleno dia\"."
	}
];
function PatternsSection() {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ jsxs("header", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-xs uppercase tracking-[0.25em] text-warning font-mono",
					children: "Secção 04 · Mineração de Padrões"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight",
					children: ["Regras de Associação: ", /* @__PURE__ */ jsx("span", {
						className: "text-warning",
						children: "A Quebrar o Senso Comum"
					})]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-4 text-muted-foreground max-w-3xl",
					children: [
						"Uso de algoritmos de mineração de padrões frequentes (",
						/* @__PURE__ */ jsx("span", {
							className: "font-mono text-foreground",
							children: "FP-Growth"
						}),
						") traduzidos para regras de negócio e de prevenção."
					]
				})
			] }),
			/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-2 gap-5",
				children: rules.map((r) => {
					const Icon = r.icon;
					return /* @__PURE__ */ jsxs("div", {
						className: "glass-elevated p-6 group hover:border-warning/40 transition-colors",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-start justify-between",
								children: [/* @__PURE__ */ jsx("div", {
									className: "w-12 h-12 rounded-xl bg-warning/15 border border-warning/30 flex items-center justify-center",
									children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-warning" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-right",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono",
										children: "Confiança"
									}), /* @__PURE__ */ jsxs("p", {
										className: "font-display text-3xl font-bold text-warning tabular-nums",
										children: [r.confidence, "%"]
									})]
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-5 font-display text-lg font-semibold text-foreground",
								children: r.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: r.text
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-5 h-1.5 bg-surface rounded-full overflow-hidden",
								children: /* @__PURE__ */ jsx("div", {
									className: "h-full bg-[image:var(--gradient-warning)] rounded-full transition-all duration-1000",
									style: { width: `${r.confidence}%` }
								})
							})
						]
					}, r.title);
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-xl p-7 bg-[image:var(--gradient-warning)] text-[oklch(0.18_0.04_60)] shadow-[0_0_60px_-15px_oklch(0.78_0.17_70/60%)]",
				children: [
					/* @__PURE__ */ jsx(Lightbulb, { className: "w-8 h-8 mb-3" }),
					/* @__PURE__ */ jsx("p", {
						className: "text-[11px] uppercase tracking-[0.25em] font-mono opacity-80",
						children: "Insight"
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-1 font-display text-2xl font-bold",
						children: "O Paradoxo do Clima"
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-3 text-sm md:text-base leading-relaxed max-w-4xl",
						children: [
							"A IA provou que os ",
							/* @__PURE__ */ jsx("strong", { children: "piores acidentes" }),
							" (traseiras, transversais e tombamentos) ocorrem em condições climáticas e de luz ",
							/* @__PURE__ */ jsx("strong", { children: "ideais" }),
							". Isto comprova matematicamente que a",
							/* @__PURE__ */ jsx("strong", { children: " falha humana" }),
							" (excesso de confiança e velocidade) é mais letal do que o clima adverso."
						]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/dashboard/sections/MlSection.tsx
var centroids = [
	{
		label: "Região Sul (BR-116/153)",
		lat: -26.1968,
		lon: -51.2363
	},
	{
		label: "Região Metropolitana BH/MG (BR-381)",
		lat: -19.6919,
		lon: -44.5213
	},
	{
		label: "Mato Grosso (BR-364)",
		lat: -12.6496,
		lon: -58.173
	},
	{
		label: "Nordeste / PE",
		lat: -8.7825,
		lon: -37.9196
	},
	{
		label: "Nordeste / MA",
		lat: -4.631,
		lon: -47.1061
	}
];
function MlSection() {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-10",
		children: [/* @__PURE__ */ jsxs("header", { children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-xs uppercase tracking-[0.25em] text-info font-mono",
				children: "Secção 05 · Machine Learning"
			}),
			/* @__PURE__ */ jsxs("h1", {
				className: "mt-2 text-4xl md:text-5xl font-display font-bold tracking-tight",
				children: ["Inteligência Artificial: ", /* @__PURE__ */ jsx("span", {
					className: "text-gradient-primary",
					children: "A Trinca de Algoritmos"
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 text-muted-foreground max-w-3xl",
				children: "Modelagem preditiva e espacial sobre a base PRF — três frentes complementares."
			})
		] }), /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 xl:grid-cols-3 gap-6",
			children: [
				/* @__PURE__ */ jsxs("article", {
					className: "glass-elevated p-6 flex flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-11 h-11 rounded-xl bg-info/15 border border-info/30 flex items-center justify-center",
								children: /* @__PURE__ */ jsx(Cpu, { className: "w-5 h-5 text-info" })
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono",
									children: "Card 01"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "PySpark MLlib"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-info font-mono",
									children: "Random Forest"
								})
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-4 text-sm",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1",
								children: "Bibliotecas"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-1.5",
								children: [
									"StringIndexer",
									"VectorAssembler",
									"RandomForestClassifier"
								].map((b) => /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-foreground",
									children: b
								}, b))
							})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1",
								children: "Engenharia"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground leading-relaxed",
								children: "Processamento distribuído no cluster para classificar o risco de óbito."
							})] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 pt-5 border-t border-border space-y-3",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-wider text-info font-mono",
									children: "Resultados (Triagem)"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg bg-surface/70 border border-border p-3",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-xs font-mono text-muted-foreground",
											children: "[Veículos: 2 · Clima: Bom]"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "font-display text-2xl font-bold text-info tabular-nums",
											children: "7,82%"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Probabilidade de Óbito"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-lg bg-surface/70 border border-danger/30 p-3",
									children: [
										/* @__PURE__ */ jsx("p", {
											className: "text-xs font-mono text-muted-foreground",
											children: "[Veículos: 3 · Chuva]"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "font-display text-2xl font-bold text-danger tabular-nums",
											children: "11,12%"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[11px] text-muted-foreground",
											children: "Probabilidade de Óbito"
										})
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("article", {
					className: "glass-elevated p-6 flex flex-col",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-11 h-11 rounded-xl bg-warning/15 border border-warning/30 flex items-center justify-center",
								children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-warning" })
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono",
									children: "Card 02"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "Scikit-Learn"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-warning font-mono",
									children: "K-Means Clustering"
								})
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "space-y-3 text-sm",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1",
								children: "Bibliotecas"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-1.5",
								children: ["sklearn.cluster.KMeans (n=5)", "Pandas"].map((b) => /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-foreground",
									children: b
								}, b))
							})] }), /* @__PURE__ */ jsxs("p", {
								className: "text-muted-foreground leading-relaxed",
								children: [
									"Algoritmo não-supervisionado processa Latitude e Longitude para mapear",
									/* @__PURE__ */ jsx("span", {
										className: "text-warning font-medium",
										children: " Zonas Vermelhas (Centróides)"
									}),
									"."
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 pt-5 border-t border-border",
							children: [/* @__PURE__ */ jsx("p", {
								className: "text-[10px] uppercase tracking-wider text-warning font-mono mb-3",
								children: "5 Coordenadas Críticas"
							}), /* @__PURE__ */ jsx("ol", {
								className: "space-y-2",
								children: centroids.map((c, i) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3 rounded-lg bg-surface/60 border border-border p-2.5",
									children: [/* @__PURE__ */ jsx("span", {
										className: "shrink-0 w-6 h-6 rounded-md bg-warning/20 text-warning text-xs font-mono font-bold flex items-center justify-center",
										children: i + 1
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-xs font-medium text-foreground truncate",
											children: c.label
										}), /* @__PURE__ */ jsxs("p", {
											className: "text-[10px] font-mono text-muted-foreground tabular-nums",
											children: [
												c.lat.toFixed(4),
												", ",
												c.lon.toFixed(4)
											]
										})]
									})]
								}, i))
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("article", {
					className: "glass-elevated p-6 flex flex-col relative overflow-hidden",
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 w-48 h-48 bg-info/20 rounded-full blur-3xl" }),
						/* @__PURE__ */ jsxs("div", {
							className: "relative flex items-center gap-3 mb-4",
							children: [/* @__PURE__ */ jsx("div", {
								className: "w-11 h-11 rounded-xl bg-info/15 border border-info/30 flex items-center justify-center",
								children: /* @__PURE__ */ jsx(Network, { className: "w-5 h-5 text-info" })
							}), /* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-widest text-muted-foreground font-mono",
									children: "Card 03"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "font-display text-lg font-bold text-foreground",
									children: "TensorFlow / Keras"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-info font-mono",
									children: "Rede Neural Profunda (MLP)"
								})
							] })]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative space-y-3 text-sm",
							children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
								className: "text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-1",
								children: "Bibliotecas"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-1.5",
								children: [
									"Sequential",
									"Dense",
									"StandardScaler"
								].map((b) => /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-foreground",
									children: b
								}, b))
							})] }), /* @__PURE__ */ jsxs("p", {
								className: "text-muted-foreground leading-relaxed",
								children: [
									"Arquitetura MLP com ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: "3 camadas densas (16 · 8 · 1)"
									}),
									", otimizador ",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: "Adam"
									}),
									" e ativações",
									/* @__PURE__ */ jsx("span", {
										className: "text-foreground",
										children: " ReLU / Sigmoid"
									}),
									"."
								]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "relative mt-5 pt-5 border-t border-border",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[10px] uppercase tracking-wider text-info font-mono mb-2",
									children: "Resultado Oficial"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "rounded-xl bg-[image:var(--gradient-primary)] p-5 shadow-[var(--shadow-glow-primary)]",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 text-primary-foreground/80 text-[11px] uppercase tracking-wider font-mono",
											children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "w-3.5 h-3.5" }), " Acurácia validada"]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "font-display text-5xl font-bold text-primary-foreground tabular-nums mt-1",
											children: "93,39%"
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-xs text-primary-foreground/80 mt-1",
											children: "base de teste · KM da BR × volume de veículos"
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-4 flex gap-3 rounded-lg border border-warning/40 bg-warning/10 p-3",
									children: [/* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-warning shrink-0 mt-0.5" }), /* @__PURE__ */ jsxs("p", {
										className: "text-[12px] text-muted-foreground leading-relaxed",
										children: [
											/* @__PURE__ */ jsx("span", {
												className: "text-warning font-semibold",
												children: "Nota técnica:"
											}),
											" A base PRF é fortemente desbalanceada, este índice atua como ",
											/* @__PURE__ */ jsx("em", { children: "baseline inicial" }),
											". Em produção, recomenda-se aplicação da técnica",
											/* @__PURE__ */ jsx("span", {
												className: "font-mono text-foreground",
												children: " SMOTE"
											}),
											"."
										]
									})]
								})
							]
						})
					]
				})
			]
		})]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var labels = {
	overview: "Engenharia & Visão Geral",
	eda: "Visualização de Dados",
	pandemic: "Efeito Pandemia",
	patterns: "Mineração de Padrões",
	ml: "Machine Learning"
};
function Dashboard() {
	const [active, setActive] = useState("overview");
	const [mobileOpen, setMobileOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex w-full text-foreground",
		children: [
			/* @__PURE__ */ jsx(Sidebar, {
				active,
				onSelect: (id) => {
					setActive(id);
					setMobileOpen(false);
				}
			}),
			mobileOpen && /* @__PURE__ */ jsxs("div", {
				className: "lg:hidden fixed inset-0 z-40 flex",
				children: [/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 bg-black/60",
					onClick: () => setMobileOpen(false)
				}), /* @__PURE__ */ jsx("div", {
					className: "relative",
					children: /* @__PURE__ */ jsx(Sidebar, {
						active,
						onSelect: (id) => {
							setActive(id);
							setMobileOpen(false);
						}
					})
				})]
			}),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-1 min-w-0 flex flex-col",
				children: [
					/* @__PURE__ */ jsxs("header", {
						className: "sticky top-0 z-30 flex items-center justify-between gap-4 px-5 md:px-10 h-16 border-b border-border/60 bg-background/70 backdrop-blur-xl",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => setMobileOpen(true),
								className: "lg:hidden w-9 h-9 rounded-md border border-border bg-surface flex items-center justify-center",
								"aria-label": "Abrir menu",
								children: /* @__PURE__ */ jsx(Menu, { className: "w-4 h-4" })
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2 text-xs font-mono text-muted-foreground",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "text-info",
										children: "●"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "uppercase tracking-widest",
										children: "Cluster online"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "hidden md:inline text-border",
										children: "/"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "hidden md:inline",
										children: labels[active]
									})
								]
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 md:gap-3 text-xs font-mono text-muted-foreground",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-warning/40 bg-warning/10 text-warning",
									children: [
										/* @__PURE__ */ jsx("span", {
											className: "uppercase tracking-widest text-[10px] opacity-80",
											children: "Recorte"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-foreground font-semibold",
											children: "Jan–Abr"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-border",
											children: "·"
										}),
										/* @__PURE__ */ jsx("span", {
											className: "text-foreground font-semibold",
											children: "SC/PR/MG"
										})
									]
								}),
								/* @__PURE__ */ jsx("span", {
									className: "sm:hidden px-2 py-1 rounded border border-warning/40 bg-warning/10 text-warning text-[10px] font-semibold",
									children: "Jan–Abr · SC/PR/MG"
								}),
								/* @__PURE__ */ jsx(Activity, { className: "w-3.5 h-3.5 text-info hidden md:block" }),
								/* @__PURE__ */ jsx("span", {
									className: "hidden md:inline",
									children: "TCC · v1.0"
								})
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex-1 px-5 md:px-10 py-10 max-w-7xl w-full mx-auto",
						children: [
							active === "overview" && /* @__PURE__ */ jsx(OverviewSection, {}),
							active === "eda" && /* @__PURE__ */ jsx(EdaSection, {}),
							active === "pandemic" && /* @__PURE__ */ jsx(PandemicSection, {}),
							active === "patterns" && /* @__PURE__ */ jsx(PatternsSection, {}),
							active === "ml" && /* @__PURE__ */ jsx(MlSection, {})
						]
					}),
					/* @__PURE__ */ jsxs("footer", {
						className: "px-5 md:px-10 py-6 border-t border-border/60 text-[11px] font-mono text-muted-foreground flex justify-between",
						children: [/* @__PURE__ */ jsx("span", { children: "PRF Analytics © TCC Big Data & IA" }), /* @__PURE__ */ jsx("span", { children: "Databricks · PySpark · Scikit-Learn · TensorFlow" })]
					})
				]
			})
		]
	});
}
//#endregion
export { Dashboard as component };
