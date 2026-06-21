import { useState } from "react";
import { ArrowLeft, Check, RotateCcw, Eye, Highlighter, Sparkles, BookOpen } from "lucide-react";

interface SubjuntivoPracticeProps {
  onBack: () => void;
  onNextSection?: () => void;
  nextSectionTitle?: string;
}

interface VerbConjugation {
  verb: string;
  isRegular: boolean;
  notes?: string;
  conjs: string[]; // [Eu, Tu, Você/Ele/Ela, Nós, Vocês/Eles/Elas]
}

const SUBJ_PERSONS = [
  "Eu",
  "Tu",
  "Você / Ele / Ela",
  "Nós",
  "Vocês / Eles / Elas"
];

const SUBJ_VERBS: VerbConjugation[] = [
  // Foto 1: Regulares
  {
    verb: "EXPERIMENTAR",
    isRegular: true,
    notes: "Regular -ar (PI: experimento -> experiment-e)",
    conjs: ["experimente", "experimentes", "experimente", "experimentemos", "experimentem"]
  },
  {
    verb: "ESCREVER",
    isRegular: true,
    notes: "Regular -er (PI: escrevo -> escrev-a)",
    conjs: ["escreva", "escrevas", "escreva", "escrevamos", "escrevam"]
  },
  {
    verb: "ASSISTIR",
    isRegular: true,
    notes: "Regular -ir (PI: assisto -> assist-a)",
    conjs: ["assista", "assistas", "assista", "assistamos", "assistam"]
  },
  // Foto 2: También considerados con base regular del Presente Indicativo por el usuario
  {
    verb: "TER",
    isRegular: true,
    notes: "Formado desde Eu tenho (PI) -> tenh-a",
    conjs: ["tenha", "tenhas", "tenha", "tenhamos", "tenham"]
  },
  {
    verb: "PODER",
    isRegular: true,
    notes: "Formado desde Eu posso (PI) -> poss-a",
    conjs: ["possa", "possas", "possa", "possamos", "possam"]
  },
  {
    verb: "FAZER",
    isRegular: true,
    notes: "Formado desde Eu faço (PI) -> faç-a",
    conjs: ["faça", "faças", "faça", "façamos", "façam"]
  },
  {
    verb: "VIR",
    isRegular: true,
    notes: "Formado desde Eu venho (PI) -> venh-a",
    conjs: ["venha", "venhas", "venha", "venhamos", "venham"]
  },
  {
    verb: "LER",
    isRegular: true,
    notes: "Formado desde Eu leio (PI) -> lei-a",
    conjs: ["leia", "leias", "leia", "leiamos", "leiam"]
  },
  {
    verb: "TRAZER",
    isRegular: true,
    notes: "Formado desde Eu trago (PI) -> trag-a",
    conjs: ["traga", "tragas", "traga", "tragamos", "tragam"]
  },
  // Foto 3: Totalmente Irregulares
  {
    verb: "SER",
    isRegular: false,
    notes: "Irregularidad total",
    conjs: ["seja", "sejas", "seja", "sejamos", "sejam"]
  },
  {
    verb: "ESTAR",
    isRegular: false,
    notes: "Acentuación y desinencia especial",
    conjs: ["esteja", "estejas", "esteja", "estejamos", "estejam"]
  },
  {
    verb: "DAR",
    isRegular: false,
    notes: "Mantiene acento gráfico",
    conjs: ["dê", "dês", "dê", "demos", "deem"]
  },
  {
    verb: "IR",
    isRegular: false,
    notes: "Irregularidad total",
    conjs: ["vá", "vás", "vá", "vamos", "vão"]
  },
  {
    verb: "SABER",
    isRegular: false,
    notes: "Irregularidad radical",
    conjs: ["saiba", "saibas", "saiba", "saibamos", "saibam"]
  },
  {
    verb: "QUERER",
    isRegular: false,
    notes: "Irregularidad radical",
    conjs: ["queira", "queiras", "queira", "queiramos", "queiram"]
  },
  {
    verb: "HAVER",
    isRegular: false,
    notes: "Principalmente impersonal/singular",
    conjs: ["haja", "hajas", "haja", "hajamos", "hajam"]
  }
];

export function SubjuntivoPractice({ onBack, onNextSection, nextSectionTitle }: SubjuntivoPracticeProps) {
  const [mode, setMode] = useState<"study" | "practice">("practice");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isVerified, setIsVerified] = useState(false);
  const [stats, setStats] = useState({ correct: 0, total: 0 });

  const handleInputChange = (verbKey: string, pi: number, val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`${verbKey}-${pi}`]: val
    }));
  };

  const getCorrectAnswer = (verbItem: VerbConjugation, pi: number): string => {
    return verbItem.conjs[pi] || "";
  };

  const checkAnswers = () => {
    let total = 0;
    let correct = 0;

    SUBJ_VERBS.forEach((v) => {
      SUBJ_PERSONS.forEach((_, pi) => {
        total++;
        const userValue = (answers[`${v.verb}-${pi}`] || "").trim().toLowerCase();
        const correctAns = getCorrectAnswer(v, pi).trim().toLowerCase();
        if (userValue === correctAns) {
          correct++;
        }
      });
    });

    setStats({ correct, total });
    setIsVerified(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetAll = () => {
    setAnswers({});
    setIsVerified(false);
  };

  const changeMode = (newMode: "study" | "practice") => {
    setMode(newMode);
    setIsVerified(false);
    if (newMode === "study") {
      const studs: Record<string, string> = {};
      SUBJ_VERBS.forEach((v) => {
        SUBJ_PERSONS.forEach((_, pi) => {
          studs[`${v.verb}-${pi}`] = getCorrectAnswer(v, pi);
        });
      });
      setAnswers(studs);
    } else {
      setAnswers({});
    }
  };

  const copyToClipboard = (char: string) => {
    navigator.clipboard.writeText(char);
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-10 py-6" id="subjuntivo-practice-workstation">
      {/* Header section */}
      <div className="subj-header-section mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <button
            onClick={onBack}
            className="back-btn bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] flex items-center gap-2 border border-[var(--border)] px-4 py-2 rounded-xl transition-all cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </button>
          <div>
            <div className="subj-label text-xs uppercase font-bold tracking-widest text-[var(--accent)] mb-1">
              Módulo 3 · Gramática de Verbos
            </div>
            <h2 className="subj-title font-display text-3xl font-black text-[var(--text)] flex items-center gap-2">
              <span>🤔 Presente do Subjuntivo</span>
            </h2>
          </div>
        </div>

        {/* Mode Toggles */}
        <div className="subj-mode-toggle bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-1.5 flex gap-2">
          <button
            onClick={() => changeMode("study")}
            className={`subj-mode-btn cursor-pointer px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
              mode === "study"
                ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] shadow-md"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>📖 Estudiar</span>
          </button>
          <button
            onClick={() => changeMode("practice")}
            className={`subj-mode-btn cursor-pointer px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
              mode === "practice"
                ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] shadow-md"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            <Highlighter className="w-4 h-4" />
            <span>✏️ Practicar</span>
          </button>
        </div>
      </div>

      {/* Intro Gramatical Box (Foto 1 rule) */}
      <div className="grammar-rule-box bg-gradient-to-br from-[rgba(244,167,50,0.06)] to-[rgba(232,103,58,0.04)] border border-[rgba(244,167,50,0.15)] rounded-2xl p-5 mb-6 flex items-start gap-4 shadow-sm">
        <span className="text-3xl shrink-0 select-none">💡</span>
        <div>
          <h4 className="font-display font-black text-base text-[var(--accent)] mb-1">
            Formación General (Regulares e Irregulares de Fotos 1 y 2)
          </h4>
          <p className="text-sm text-[var(--text)] leading-relaxed">
            O <strong className="text-[var(--accent2)]">Presente do Subjuntivo</strong> forma-se a partir da <strong className="font-mono bg-[rgba(255,255,255,0.05)] px-1.5 py-0.5 rounded text-[var(--accent)]">1ª pessoa do singular do Presente do Indicativo (PI)</strong>, sustituyendo la desinencia original.
          </p>
          <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono bg-black/20 p-3 rounded-lg border border-[var(--border)]">
            <div>
              <span className="text-[var(--text-muted)]">Indicativo:</span> Eu experimento
              <br />
              <span className="text-[var(--accent)] font-semibold">Subjuntivo:</span> que eu experimente
            </div>
            <div>
              <span className="text-[var(--text-muted)]">Indicativo:</span> Eu escrevo
              <br />
              <span className="text-[var(--accent)] font-semibold">Subjuntivo:</span> que eu escreva
            </div>
            <div>
              <span className="text-[var(--text-muted)]">Indicativo:</span> Eu tenho (Ter)
              <br />
              <span className="text-[var(--accent)] font-semibold">Subjuntivo:</span> que eu tenha
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Quick Characters */}
      <div className="special-chars-bar bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-xl">⌨️</span>
          <div>
            <h4 className="font-bold text-sm text-[var(--text)]">Caracteres Especiales de Portugués</h4>
            <p className="text-xs text-[var(--text-muted)]">Toca cualquier letra para copiarla y usarla en las conjugaciones</p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {["ã", "ê", "ç", "dê", "deem", "vão", "Ã", "Ê", "Ç"].map((char) => (
            <button
              key={char}
              onClick={() => copyToClipboard(char)}
              title="Copiar al portapapeles"
              className="px-3.5 py-2 text-xs font-mono font-bold bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(244,167,50,0.12)] hover:text-[var(--accent)] border border-[var(--border)] hover:border-[var(--accent)] rounded-lg transition-all cursor-pointer"
            >
              {char}
            </button>
          ))}
        </div>
      </div>

      {/* Practice Verdict Block */}
      {isVerified && mode === "practice" && (
        <div className="verb-score-banner bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-lg">
          <div className="flex items-center gap-5">
            <div className="verb-score-num text-4xl font-display font-black text-[var(--accent)]">
              {stats.correct}/{stats.total}
            </div>
            <div>
              <div className="font-semibold text-lg text-[var(--text)]">Conjugaciones correctas en Subjuntivo</div>
              <p className="verb-score-text text-sm text-[var(--text-muted)]">
                {stats.correct === stats.total
                  ? "¡Perfeito! Dominas el Presente de Subjuntivo a la perfección. 🇧🇷"
                  : stats.correct >= stats.total * 0.7
                  ? "¡Buen progreso! Repasa los cuadros en rojo para afianzar."
                  : "Estudia las tablas pre-completadas en el modo 'Estudiar' y vuelve a intentar."}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Controls */}
      {mode === "practice" && (
        <div className="verb-action-bar flex items-center gap-4 mb-8 flex-wrap">
          <button
            onClick={checkAnswers}
            className="verb-check-btn bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] hover:shadow-lg hover:scale-[1.02] transform transition-all cursor-pointer font-display tracking-wide font-black px-8 py-3.5 rounded-xl text-base flex items-center gap-2"
          >
            <Check className="w-5 h-5" />
            <span>✓ Verificar respuestas</span>
          </button>
          <button
            onClick={resetAll}
            className="verb-reset-btn bg-transparent border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--text)] px-6 py-3.5 rounded-xl transition-all cursor-pointer text-sm font-semibold flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reiniciar campos</span>
          </button>
        </div>
      )}

      {/* --- SECTION 1: VERBOS REGULARES (FOTOS 1 Y 2) --- */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">✅</span>
          <h3 className="font-display font-black text-2xl text-[var(--text)]">
            Verbos Regulares <span className="text-xs uppercase font-mono bg-[var(--green)]/15 text-[var(--green)] px-3 py-1 rounded-full border border-[var(--green)]/20 ml-2">Fotos 1 y 2</span>
          </h3>
        </div>
        <p className="text-sm text-[var(--text-muted)] mb-6 -mt-3">
          Verbos que se conjugan de forma regular en base a su terminación de infinitivo o que derivan de forma predecible desde la primera persona singular del Indicativo (PI).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJ_VERBS.filter((v) => v.isRegular).map((v) => (
            <div
              key={v.verb}
              className="verb-table-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm transition-all hover:scale-[1.01]"
            >
              <div className="verb-table-title bg-gradient-to-r from-[rgba(244,167,50,0.1)] to-[rgba(232,103,58,0.06)] border-b border-[var(--border)] px-5 py-3.5 text-center">
                <span className="block font-display text-lg font-black text-[var(--accent)] tracking-wider">
                  {v.verb}
                </span>
                <span className="block text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                  {v.notes}
                </span>
              </div>

              <div className="verb-table-body p-4 flex flex-col gap-3">
                {SUBJ_PERSONS.map((person, pi) => {
                  const correctAns = getCorrectAnswer(v, pi);
                  const inputVal = answers[`${v.verb}-${pi}`] || "";

                  let inputClass = "verb-input w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] focus:bg-[rgba(244,167,50,0.03)] transition-all";
                  if (mode === "study") {
                    inputClass += " study-mode text-[var(--green)] pointer-events-none font-semibold border-transparent bg-transparent";
                  } else if (isVerified) {
                    if (inputVal.trim().toLowerCase() === correctAns.trim().toLowerCase()) {
                      inputClass += " correct border-[var(--green)] bg-[rgba(78,203,135,0.06)] text-[var(--green)] font-semibold";
                    } else {
                      inputClass += " wrong border-[var(--red)] bg-[rgba(232,80,58,0.06)] text-[var(--red)]";
                    }
                  }

                  return (
                    <div key={person} className="verb-row grid grid-cols-[1fr_1.2fr] items-center gap-3">
                      <div className="verb-person text-xs font-semibold text-[var(--text-muted)]">
                        {person}
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={inputVal}
                          disabled={mode === "study"}
                          placeholder={isVerified ? `✓ ${correctAns}` : "..."}
                          onChange={(e) => handleInputChange(v.verb, pi, e.target.value)}
                          className={inputClass}
                          autoComplete="off"
                          autoCorrect="off"
                          spellCheck="false"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: VERBOS IRREGULARES (FOTO 3) --- */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-xl">⚠️</span>
          <h3 className="font-display font-black text-2xl text-[var(--text)]">
            Verbos Irregulares <span className="text-xs uppercase font-mono bg-[var(--red)]/15 text-[var(--red)] px-3 py-1 rounded-full border border-[var(--red)]/20 ml-2">Foto 3</span>
          </h3>
        </div>
        <p className="text-sm text-[var(--text-muted)] mb-6 -mt-3">
          Verbos especiales que no siguen la regla general del Indicativo y tienen desinencias o raíces exclusivas en subjuntivo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUBJ_VERBS.filter((v) => !v.isRegular).map((v) => (
            <div
              key={v.verb}
              className="verb-table-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm transition-all hover:scale-[1.01]"
            >
              <div className="verb-table-title bg-gradient-to-r from-[rgba(232,80,58,0.1)] to-[rgba(232,103,58,0.05)] border-b border-[var(--border)] px-5 py-3.5 text-center">
                <span className="block font-display text-lg font-black text-[var(--red)] tracking-wider">
                  {v.verb}
                </span>
                <span className="block text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                  {v.notes}
                </span>
              </div>

              <div className="verb-table-body p-4 flex flex-col gap-3">
                {SUBJ_PERSONS.map((person, pi) => {
                  const correctAns = getCorrectAnswer(v, pi);
                  const inputVal = answers[`${v.verb}-${pi}`] || "";

                  let inputClass = "verb-input w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] focus:bg-[rgba(244,167,50,0.03)] transition-all";
                  if (mode === "study") {
                    inputClass += " study-mode text-[var(--green)] pointer-events-none font-semibold border-transparent bg-transparent";
                  } else if (isVerified) {
                    if (inputVal.trim().toLowerCase() === correctAns.trim().toLowerCase()) {
                      inputClass += " correct border-[var(--green)] bg-[rgba(78,203,135,0.06)] text-[var(--green)] font-semibold";
                    } else {
                      inputClass += " wrong border-[var(--red)] bg-[rgba(232,80,58,0.06)] text-[var(--red)]";
                    }
                  }

                  return (
                    <div key={person} className="verb-row grid grid-cols-[1fr_1.2fr] items-center gap-3">
                      <div className="verb-person text-xs font-semibold text-[var(--text-muted)]">
                        {person}
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          value={inputVal}
                          disabled={mode === "study"}
                          placeholder={isVerified ? `✓ ${correctAns}` : "..."}
                          onChange={(e) => handleInputChange(v.verb, pi, e.target.value)}
                          className={inputClass}
                          autoComplete="off"
                          autoCorrect="off"
                          spellCheck="false"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- SECTION 3: ESTRUCTURAS DE USO (FOTO 4) --- */}
      <div className="foto4-rules bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 sm:p-8 shadow-md" id="subjuntivo-structures">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[rgba(244,167,50,0.1)] p-2.5 rounded-xl border border-[rgba(244,167,50,0.15)] flex items-center justify-center text-xl">
            <Sparkles className="w-6 h-6 text-[var(--accent)]" />
          </div>
          <div>
            <h3 className="font-display font-black text-2xl text-[var(--text)]">
              Estructuras Inductoras al Subjuntivo
            </h3>
            <p className="text-xs text-[var(--text-muted)]">Información recopilada de la documentación oficial (Foto 4). Usos que obligan a usar presente de subjuntivo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="col-struct p-5 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] rounded-2xl">
            <h4 className="font-display font-bold text-base text-[var(--accent)] mb-3 flex items-center gap-2 pb-2 border-b border-[var(--border)]">
              <span>🗣️ Expressões Impessoais + que</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">É possível que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Es posible que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">É provável que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Es probable que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">É difícil que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Es difícil que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">É necessário que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Es necesario que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">É importante que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Es importante que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">É preciso que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Es preciso que / Hace falta que...</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="col-struct p-5 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] rounded-2xl">
            <h4 className="font-display font-bold text-base text-[var(--accent)] mb-3 flex items-center gap-2 pb-2 border-b border-[var(--border)]">
              <span>⛓️ Conjunções Obligatorias</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Embora...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Aunque (induce duda/concesión)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Mesmo que... / Ainda que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Incluso si / Aun cuando</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Caso...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">En caso de que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Desde que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Siempre que / Con tal de que</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">A não ser que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">A menos que... / Salvo que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Para que... / Basta que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Para que / Basta que / Es suficiente con</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Até que... / Por mais que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Hasta que / Por más que...</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-struct p-5 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] rounded-2xl">
            <h4 className="font-display font-bold text-base text-[var(--accent)] mb-3 flex items-center gap-2 pb-2 border-b border-[var(--border)]">
              <span>❤️ Verbos de Desejo, Dúvida e Sentimento</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Desejo que... / Espero que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Deseo que... / Espero que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Prefiro que... / Peço que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Prefiero que... / Pido que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Não está certo que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">No es seguro que / No es cierto que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Duvido que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Dudo que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Sinto muito que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Siento mucho que... / Lamento que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Estou contente que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Estoy contento de que...</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--accent2)] font-mono">▸</span>
                <div>
                  <span className="font-semibold text-[var(--text)]">Tenho medo que... / Tomara que...</span>
                  <span className="block text-xs text-[var(--text-muted)] italic">Tengo miedo de que... / ¡Ojalá que...!</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      {onNextSection && (
        <div className="flex justify-end mt-12 pt-6 border-t border-[var(--border)]">
          <button
            onClick={onNextSection}
            className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] font-display font-black text-sm py-3 px-6 rounded-xl shadow-md hover:scale-105 transform transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Siguiente: {nextSectionTitle} →</span>
          </button>
        </div>
      )}
    </div>
  );
}
