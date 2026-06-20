import { useState, useEffect, MouseEvent, ReactNode } from "react";
import { ArrowLeft, Check, RotateCcw, AlertTriangle, Play, HelpCircle, Eye, Highlighter } from "lucide-react";
import { Card, CardMode } from "../types";
import { EmojiIcon } from "./EmojiIcon";

interface FlashcardPracticeProps {
  title: ReactNode;
  categoryLabel: string;
  cards: Card[];
  onBack: () => void;
  onFinishCourse: () => void;
  onNextSection?: () => void;
  nextSectionTitle?: string;
}

export function FlashcardPractice({
  title,
  categoryLabel,
  cards,
  onBack,
  onFinishCourse,
  onNextSection,
  nextSectionTitle
}: FlashcardPracticeProps) {
  const [activeCards, setActiveCards] = useState<Card[]>([]);
  const [mode, setMode] = useState<CardMode>("ver");
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});
  const [votes, setVotes] = useState<Record<number, "check" | "cross" | null>>({});

  // States for write mode
  const [writtenAnswers, setWrittenAnswers] = useState<Record<number, string>>({});
  const [writeScore, setWriteScore] = useState<{ correct: number; total: number } | null>(null);
  const [isWriteVerified, setIsWriteVerified] = useState(false);

  useEffect(() => {
    // Reset cards and all temporary practice status on start
    setActiveCards([...cards]);
    setFlipped({});
    setVotes({});
    setWrittenAnswers({});
    setIsWriteVerified(false);
    setWriteScore(null);
  }, [cards]);

  // Flip toggle
  const toggleFlip = (cardId: number) => {
    if (mode === "escribir") return;
    setFlipped((prev) => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  // Record memory status
  const handleVote = (e: MouseEvent, cardId: number, status: "check" | "cross") => {
    e.stopPropagation();
    setVotes((prev) => ({
      ...prev,
      [cardId]: status
    }));
  };

  // Accent-insensitive normalization
  const normalizeText = (text: string): string => {
    return text
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Verify write mode answers
  const checkWriteAnswers = () => {
    let correct = 0;
    const total = activeCards.length;

    activeCards.forEach((c) => {
      const userVal = normalizeText(writtenAnswers[c.id] || "");
      const answerVal = normalizeText(c.pt);
      const answerRaw = c.pt.trim().toLowerCase();

      if (userVal === answerVal || userVal === answerRaw) {
        correct++;
      }
    });

    setWriteScore({ correct, total });
    setIsWriteVerified(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetWriteAnswers = () => {
    setWrittenAnswers({});
    setIsWriteVerified(false);
    setWriteScore(null);
  };

  // Launch review of failed cards
  const triggerReviewRound = () => {
    const wrongOnes = activeCards.filter((c) => votes[c.id] === "cross");
    if (wrongOnes.length > 0) {
      setActiveCards(wrongOnes);
      setFlipped({});
      setVotes({});
    } else {
      onFinishCourse();
    }
  };

  // View state helpers
  const totalCount = activeCards.length;
  const markedCount = Object.values(votes).filter((v) => v !== null).length;
  const wrongCount = Object.values(votes).filter((v) => v === "cross").length;
  const percentComplete = totalCount > 0 ? Math.round((markedCount / totalCount) * 100) : 0;

  // Render flip cards in VER mode
  const renderVerMode = () => {
    return (
      <div className="cards-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeCards.map((card, i) => {
          const isFlipped = !!flipped[card.id];
          const voteVal = votes[card.id];

          return (
            <div
              key={card.id}
              onClick={() => toggleFlip(card.id)}
              className="flip-card relative h-[140px] cursor-pointer"
              style={{ perspective: "1000px" }}
            >
              <div
                className="flip-card-inner relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
              >
                {/* CARD FRONT: SPANISH */}
                <div
                  className="flip-face flip-front absolute inset-0 bg-[var(--card-front)] border border-[var(--border)] rounded-2xl flex flex-col items-center justify-center p-4 gap-2 shadow-sm transition-all hover:border-[rgba(244,167,50,0.3)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <span className="card-hint text-[9px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
                    Español · click para revelar
                  </span>
                  <div className="card-emoji-big my-1 flex items-center justify-center">
                    <EmojiIcon emoji={card.emoji} size={42} />
                  </div>
                  <div className="card-word-es font-display text-xl font-bold text-[var(--text)] text-center px-2">
                    {card.es}
                  </div>
                </div>

                {/* CARD BACK: PORTUGUESE */}
                <div
                  className="flip-face flip-back absolute inset-0 bg-[var(--card-back)] border border-[var(--border)] rounded-2xl flex flex-col items-center justify-center p-4 gap-2 shadow-sm"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    borderColor: "rgba(78,203,135,0.15)"
                  }}
                >
                  <span className="card-hint text-[9px] uppercase tracking-wider text-[var(--text-muted)] font-bold">
                    Português
                  </span>
                  <div className="card-word-pt font-display text-xl font-extrabold text-[var(--green)] text-center px-2 mb-2">
                    {card.pt}
                  </div>

                  {/* Actions: check & cross status */}
                  <div className="vote-row flex gap-4 mt-1">
                    <button
                      onClick={(e) => handleVote(e, card.id, "cross")}
                      className={`vote-btn cross w-10 h-10 rounded-full border-2 border-[var(--red)] text-[var(--red)] cursor-pointer flex items-center justify-center transition-all hover:scale-110 hover:bg-[var(--red)] hover:text-white ${
                        voteVal === "cross" ? "bg-[var(--red)] text-white scale-110" : "bg-transparent"
                      }`}
                      title="No la recordaba"
                    >
                      ✕
                    </button>
                    <button
                      onClick={(e) => handleVote(e, card.id, "check")}
                      className={`vote-btn check w-10 h-10 rounded-full border-2 border-[var(--green)] text-[var(--green)] cursor-pointer flex items-center justify-center transition-all hover:scale-110 hover:bg-[var(--green)] hover:text-[#0f0e17] ${
                        voteVal === "check" ? "bg-[var(--green)] text-[#0f0e17] scale-110 border-[var(--green)]" : "bg-transparent"
                      }`}
                      title="¡La recordaba perfectamente!"
                    >
                      ✓
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Render inputs in ESCRIBIR mode
  const renderEscribirMode = () => {
    return (
      <div className="cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="write-grid">
        {activeCards.map((card, i) => {
          const userVal = writtenAnswers[card.id] || "";
          const isCorrect = normalizeText(userVal) === normalizeText(card.pt);
          const showWarning = isWriteVerified && !isCorrect;

          return (
            <div
              key={card.id}
              className={`write-card bg-[var(--card-front)] border rounded-2xl p-4 flex flex-col items-center gap-3 shadow-sm transition-all ${
                isWriteVerified
                  ? isCorrect
                    ? "border-[var(--green)] bg-[rgba(78,203,135,0.04)]"
                    : "border-[var(--red)] bg-[rgba(232,80,58,0.04)]"
                  : "border-[var(--border)]"
              }`}
            >
              <div className="write-card-hint text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-bold">
                Español
              </div>
              <div className="write-card-emoji my-1 flex items-center justify-center">
                <EmojiIcon emoji={card.emoji} size={40} />
              </div>
              <div className="write-card-word font-display text-lg font-bold text-[var(--text)] text-center px-1">
                {card.es}
              </div>

              <input
                type="text"
                value={userVal}
                disabled={isWriteVerified}
                onChange={(e) =>
                  setWrittenAnswers((prev) => ({
                    ...prev,
                    [card.id]: e.target.value
                  }))
                }
                placeholder="Escribí en portugués..."
                className={`write-card-input w-full bg-[rgba(255,255,255,0.04)] border border-[var(--border)] rounded-xl px-3 py-2.5 text-center text-sm font-semibold outline-none focus:border-[var(--accent)] transition-all ${
                  isWriteVerified
                    ? isCorrect
                      ? "wci-correct text-[var(--green)] border-[var(--green)] bg-[rgba(78,203,135,0.06)]"
                      : "wci-wrong text-[var(--red)] border-[var(--red)] bg-[rgba(232,80,58,0.06)]"
                    : ""
                }`}
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />

              {showWarning && (
                <div className="write-card-answer text-xs font-semibold text-[var(--green)] flex items-center gap-1 mt-1 justify-center">
                  <span>✓ {card.pt}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-[1100px] mx-auto px-4 sm:px-10 py-6" id="flashcards-workspace">
      {/* Workspace Header */}
      <div className="section-header flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pb-4 border-b border-[var(--border)]">
        <div className="flex items-start gap-4 flex-1">
          <button
            onClick={onBack}
            className="back-btn bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] flex items-center gap-1.5 border border-[var(--border)] px-4 py-2 rounded-xl transition-all cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver</span>
          </button>
          <div className="flex-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--accent)] mb-1 block">
              {categoryLabel}
            </span>
            <h2 className="section-title font-display text-3xl font-black text-[var(--text)]">
              {title}
            </h2>
          </div>
        </div>

        {/* Progress statistics for Ver mode */}
        {mode === "ver" && (
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="progress-bar-wrap bg-[var(--surface)] border border-[var(--border)] rounded-full h-2.5 w-32 hidden sm:block overflow-hidden">
              <div
                className="progress-bar-fill h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] transition-all duration-300"
                style={{ width: `${percentComplete}%` }}
              ></div>
            </div>
            <div className="progress-label text-xs font-bold text-[var(--text-muted)] whitespace-nowrap bg-[var(--surface)] px-3 py-1.5 rounded-lg border border-[var(--border)]">
              {markedCount} / {totalCount} marcadas
            </div>
          </div>
        )}
      </div>

      {/* Mode Control for Cards */}
      <div className="card-mode-bar flex items-center gap-3 mb-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-1.5 w-fit">
        <span className="card-mode-label text-xs uppercase font-bold text-[var(--text-muted)] px-2">
          Modo:
        </span>
        <div className="card-mode-toggle flex gap-1">
          <button
            id="cmode-btn-ver"
            onClick={() => setMode("ver")}
            className={`card-mode-btn cursor-pointer text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
              mode === "ver"
                ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] shadow-sm font-black"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>🔄 Ver / Flashear</span>
          </button>
          <button
            id="cmode-btn-escribir"
            onClick={() => setMode("escribir")}
            className={`card-mode-btn cursor-pointer text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
              mode === "escribir"
                ? "bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] shadow-sm font-black"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            <Highlighter className="w-3.5 h-3.5" />
            <span>✏️ Escribir</span>
          </button>
        </div>
      </div>

      {/* Primary Cards Panel */}
      {mode === "ver" ? renderVerMode() : renderEscribirMode()}

      {/* BOTTOM CONTROL ACTIONS */}

      {/* Review CTA for failed cards inside "Ver" mode */}
      {mode === "ver" && wrongCount > 0 && markedCount < totalCount && (
        <div className="review-btn-wrap mt-10 flex justify-center">
          <button
            onClick={triggerReviewRound}
            className="review-btn bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] hover:shadow-xl font-display font-black text-lg py-4 px-10 rounded-2xl shadow-lg hover:scale-105 transform transition-all cursor-pointer flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            <span>Filtrar las {wrongCount} con error ✕</span>
          </button>
        </div>
      )}

      {/* If fully completed VER mode */}
      {mode === "ver" && markedCount === totalCount && (
        <div className="review-btn-wrap mt-10 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex flex-col items-center gap-4 text-center max-w-xl mx-auto shadow-sm">
          {wrongCount === 0 ? (
            <div className="text-[var(--green)] font-bold flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>¡Recordabas todas las tarjetas de esta ronda!</span>
            </div>
          ) : (
            <div className="text-[var(--accent)] font-semibold">
              Completaste la ronda, pero marcaste {wrongCount} con error. Puedes repasarlas o continuar.
            </div>
          )}
          <div className="flex gap-4 flex-wrap justify-center mt-2">
            {wrongCount > 0 && (
              <button
                onClick={triggerReviewRound}
                className="bg-[rgba(232,80,58,0.1)] text-[var(--red)] border border-transparent hover:border-[var(--red)] font-semibold text-sm py-3 px-6 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Repasar errores ({wrongCount})</span>
              </button>
            )}
            <button
              onClick={onFinishCourse}
              className="bg-transparent border border-[var(--border)] text-[var(--text)] hover:border-[var(--text)] font-semibold text-sm py-3 px-6 rounded-xl transition-all cursor-pointer"
            >
              Volver al menú
            </button>
          </div>
        </div>
      )}

      {/* Write answers checker buttons */}
      {mode === "escribir" && (
        <div className="write-check-wrap flex flex-col gap-6 mt-8" id="write-controllers">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={checkWriteAnswers}
              className="write-check-btn bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] font-display font-black tracking-wide py-3.5 px-8 rounded-xl hover:shadow-lg transition-all cursor-pointer text-sm"
            >
              ✓ Corregir respuestas
            </button>
            <button
              onClick={resetWriteAnswers}
              className="write-reset-btn text-[var(--text-muted)] hover:text-[var(--text)] bg-transparent border border-[var(--border)] hover:border-[var(--text)] py-3.5 px-6 rounded-xl transition-all cursor-pointer text-sm font-semibold flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reiniciar</span>
            </button>
          </div>

          {isWriteVerified && writeScore && (
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[rgba(244,167,50,0.06)] border border-[rgba(244,167,50,0.15)] rounded-2xl shadow-sm">
              <div className="write-score text-[var(--accent)] font-display font-black text-base">
                Resultados: {writeScore.correct} / {writeScore.total} aciertos (
                {Math.round((writeScore.correct / writeScore.total) * 100)}%)
              </div>
              <div className="flex gap-3 flex-wrap">
                <button
                  onClick={onFinishCourse}
                  className="bg-transparent border border-[var(--border)] text-[var(--text)] hover:border-[var(--text)] text-sm font-bold py-2.5 px-5 rounded-xl transition-all cursor-pointer"
                >
                  Volver al menú
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Persistent Next Module Button at the Bottom Right */}
      {onNextSection && (
        <div className="flex justify-end mt-12 pt-6 border-t border-[var(--border)]">
          <button
            onClick={onNextSection}
            className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] text-[#0f0e17] font-display font-black text-sm py-3 px-6 rounded-xl shadow-md hover:scale-105 transform transition-all cursor-pointer flex items-center gap-1.5"
          >
            Siguiente: {nextSectionTitle} →
          </button>
        </div>
      )}
    </div>
  );
}
