import { useState, useEffect } from "react";
import { ArrowLeft, Check, RotateCcw, Highlighter, Eye } from "lucide-react";
import { VerbTense, VerbMode } from "../types";
import { verbConjugations, futuroM3Verbs, PERSONS } from "../data";

interface VerbPracticeProps {
  tense: VerbTense | null; // null represents Módulo 3 Futuro verbs
  onBack: () => void;
  onNextSection?: () => void;
  nextSectionTitle?: string;
}

export function VerbPractice({ tense, onBack, onNextSection, nextSectionTitle }: VerbPracticeProps) {
  const [mode, setMode] = useState<VerbMode>("practice");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isVerified, setIsVerified] = useState(false);
  const [stats, setStats] = useState({ correct: 0, total: 0 });

  // Get active verb list
  const isFuturoM3 = tense === null;
  const verbList = isFuturoM3
    ? Object.keys(futuroM3Verbs)
    : Object.keys(verbConjugations).sort();

  // Reset states when changing tense or mode
  useEffect(() => {
    setAnswers({});
    setIsVerified(false);
  }, [tense]);

  const handleInputChange = (verb: string, pi: number, val: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`${verb}-${pi}`]: val
    }));
  };

  const getCorrectAnswer = (verb: string, pi: number): string => {
    if (isFuturoM3) {
      return (futuroM3Verbs[verb] || [])[pi] || "";
    }
    const conjs = verbConjugations[verb]?.[tense?.id || ""] || [];
    return conjs[pi] || "";
  };

  const checkAnswers = () => {
    let total = 0;
    let correct = 0;

    verbList.forEach((verb) => {
      PERSONS.forEach((_, pi) => {
        const correctAns = getCorrectAnswer(verb, pi).trim().toLowerCase();
        if (correctAns === "—") return; // blank conjugations
        total++;
        const userValue = (answers[`${verb}-${pi}`] || "").trim().toLowerCase();
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

  const setPracticeMode = (newMode: VerbMode) => {
    setMode(newMode);
    setIsVerified(false);
    if (newMode === "study") {
      // prefill correct answers
      const newAnswers: Record<string, string> = {};
      verbList.forEach((verb) => {
        PERSONS.forEach((_, pi) => {
          newAnswers[`${verb}-${pi}`] = getCorrectAnswer(verb, pi);
        });
      });
      setAnswers(newAnswers);
    } else {
      setAnswers({});
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-10 py-6" id="verb-conj-workstation">
      {/* Header section */}
      <div className="verb-practice-header mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <button
            onClick={onBack}
            className="back-btn bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] flex items-center gap-2 border border-[var(--border)] px-4 py-2 rounded-xl transition-all cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </button>
          <div>
            <div className="verb-tense-label text-xs uppercase font-bold tracking-widest text-[var(--accent)] mb-1">
              {isFuturoM3 ? "Módulo 3 · Gramática de Verbos" : tense?.desc}
            </div>
            <h2 className="verb-practice-title font-display text-3xl font-black text-[var(--text)]">
              {isFuturoM3 ? "🔮 Futuro do Presente" : `${tense?.emoji} ${tense?.name}`}
            </h2>
          </div>
        </div>

        {/* Action Toggle buttons */}
        <div className="verb-mode-toggle bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-1.5 flex gap-2">
          <button
            onClick={() => setPracticeMode("study")}
            className={`verb-mode-btn cursor-pointer px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
              mode === "study"
                ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] shadow-md"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>📖 Estudiar</span>
          </button>
          <button
            onClick={() => setPracticeMode("practice")}
            className={`verb-mode-btn cursor-pointer px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-1.5 ${
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

      {/* Score Banner when verified */}
      {isVerified && mode === "practice" && (
        <div className="verb-score-banner bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-lg">
          <div className="flex items-center gap-5">
            <div className="verb-score-num text-4xl font-display font-black text-[var(--accent)]">
              {stats.correct}/{stats.total}
            </div>
            <div>
              <div className="font-semibold text-lg text-[var(--text)]">Conjugaciones correctas</div>
              <p className="verb-score-text text-sm text-[var(--text-muted)]">
                {stats.correct === stats.total
                  ? "¡Parabéns! ¡Completaste toda esta lista de forma perfecta! 🇧🇷"
                  : stats.correct >= stats.total * 0.7
                  ? "¡Excelente trabajo! Posees un dominio firme. Sigue así."
                  : "Práctica enfocándote en los campos de color rojo para memorizarlos más rápido."}
              </p>
            </div>
          </div>
          {onNextSection && (
            <button
              onClick={onNextSection}
              className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] font-display font-black text-sm py-3.5 px-6 rounded-xl shadow-md hover:scale-105 transform transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap self-stretch md:self-auto justify-center"
            >
              <span>Siguiente: {nextSectionTitle} →</span>
            </button>
          )}
        </div>
      )}

      {/* Elegant Next button for study mode */}
      {mode === "study" && onNextSection && (
        <div className="study-next-banner bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 mb-8 flex items-center justify-between gap-4 shadow-sm">
          <div className="text-sm text-[var(--text-muted)]">
            Estás en modo de estudio. ¿Quieres pasar al siguiente tema/módulo?
          </div>
          <button
            onClick={onNextSection}
            className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] font-display font-black text-xs py-2.5 px-5 rounded-xl shadow-md hover:scale-105 transform transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Siguiente: {nextSectionTitle} →</span>
          </button>
        </div>
      )}

      {/* Controller Buttons only for practice mode */}
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
            <span>Reiniciar</span>
          </button>
        </div>
      )}

      {/* Verbs Flex grid */}
      <div className="verb-tables-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {verbList.map((verb) => {
          return (
            <div
              key={verb}
              className="verb-table-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden shadow-sm transition-all hover:scale-[1.01]"
            >
              <div className="verb-table-title bg-gradient-to-r from-[rgba(244,167,50,0.12)] to-[rgba(232,103,58,0.08)] border-b border-[var(--border)] px-5 py-3 font-display text-lg font-black text-center text-[var(--accent)] tracking-wider">
                {verb}
              </div>
              <div className="verb-table-body p-4 flex flex-col gap-3">
                {PERSONS.map((person, pi) => {
                  const correctAns = getCorrectAnswer(verb, pi);
                  const isHyphen = correctAns === "—";
                  const inputVal = answers[`${verb}-${pi}`] || "";

                  // styling helpers
                  let inputClass = "verb-input w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.1)] rounded-lg p-2.5 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)] focus:bg-[rgba(244,167,50,0.03)] transition-all";
                  if (mode === "study") {
                    inputClass += " study-mode text-[var(--green)] pointer-events-none font-semibold border-transparent bg-transparent";
                  } else if (isVerified) {
                    if (isHyphen) {
                      inputClass += " revealed text-[var(--text-muted)] line-through bg-transparent border-transparent";
                    } else if (inputVal.trim().toLowerCase() === correctAns.trim().toLowerCase()) {
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
                          value={isHyphen ? "—" : inputVal}
                          disabled={mode === "study" || isHyphen}
                          placeholder={isVerified ? `✓ ${correctAns}` : "..."}
                          onChange={(e) => handleInputChange(verb, pi, e.target.value)}
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
          );
        })}
      </div>
    </div>
  );
}
