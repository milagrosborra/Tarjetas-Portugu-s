/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BookOpen, Sparkles, BookMarked, Swords, Trophy, GraduationCap, ChevronRight, HelpCircle } from "lucide-react";

import { Category, Subcat, Card, VerbTense, ViewScreen } from "./types";
import { categories, modulo3Categories, verbTenses, flashcardData, modulo3FlashcardData } from "./data";

import { ThemeToggle } from "./components/ThemeToggle";
import { TemasSection } from "./components/TemasSection";
import { VerbPractice } from "./components/VerbPractice";
import { FlashcardPractice } from "./components/FlashcardPractice";
import { EmojiIcon } from "./components/EmojiIcon";

export default function App() {
  const [screen, setScreen] = useState<ViewScreen>("home");
  const [breadcrumb, setBreadcrumb] = useState("Selecciona un módulo");

  // Selection states
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentSubcat, setCurrentSubcat] = useState<Subcat | null>(null);
  const [currentCards, setCurrentCards] = useState<Card[]>([]);
  const [currentTense, setCurrentTense] = useState<VerbTense | null>(null);

  // Transition screen picker
  const enterScope = (target: "modulo3" | "adicional" | "verbos") => {
    if (target === "modulo3") {
      setScreen("modulo3");
      setBreadcrumb("Módulo 3");
    } else if (target === "adicional") {
      setScreen("categories");
      setBreadcrumb("Adicional");
    } else if (target === "verbos") {
      setScreen("verb-tenses");
      setBreadcrumb("Verbos");
    }
  };

  // Find next section info to pass to practice components
  let nextSectionTitle = "";
  let onNextSection: (() => void) | undefined = undefined;

  if (screen === "flashcards" && currentCategory) {
    const isM3 = modulo3Categories.some((c) => c.id === currentCategory.id);
    if (isM3) {
      const idx = modulo3Categories.findIndex((c) => c.id === currentCategory.id);
      if (idx !== -1 && idx < modulo3Categories.length - 1) {
        const nextCat = modulo3Categories[idx + 1];
        nextSectionTitle = nextCat.name;
        onNextSection = () => {
          if (nextCat.type === "verbos") {
            setCurrentTense(null);
            setScreen("verb-practice");
            setBreadcrumb("Módulo 3 › Futuro do Presente");
          } else {
            selectModulo3Category(nextCat);
          }
        };
      } else {
        // Last of Modulo 3, go to first of Vocabulario Adicional
        const nextCat = categories[0];
        nextSectionTitle = `Adicional › ${nextCat.name}`;
        onNextSection = () => {
          selectAdicionalCategory(nextCat);
        };
      }
    } else {
      const idx = categories.findIndex((c) => c.id === currentCategory.id);
      if (idx !== -1 && idx < categories.length - 1) {
        const nextCat = categories[idx + 1];
        nextSectionTitle = nextCat.name;
        onNextSection = () => {
          selectAdicionalCategory(nextCat);
        };
      } else {
        // Last of Vocabulario Adicional, go to first Tense of Conjugación de Verbos
        const nextTense = verbTenses[0];
        nextSectionTitle = `Verbos › ${nextTense.name}`;
        onNextSection = () => {
          selectVerbTense(nextTense);
        };
      }
    }
  } else if (screen === "verb-practice") {
    if (currentTense === null) {
      // Futuro do Presente (Módulo 3 special verbs)
      const nextCat = modulo3Categories.find((c) => c.id === "no_hotel");
      if (nextCat) {
        nextSectionTitle = nextCat.name;
        onNextSection = () => {
          selectModulo3Category(nextCat);
        };
      }
    } else {
      // Conjugación de Verbos
      const idx = verbTenses.findIndex((t) => t.id === currentTense.id);
      if (idx !== -1 && idx < verbTenses.length - 1) {
        const nextTense = verbTenses[idx + 1];
        nextSectionTitle = nextTense.name;
        onNextSection = () => {
          selectVerbTense(nextTense);
        };
      } else {
        // Last of Conjugación, loop back to Módulo 3 first category
        const nextCat = modulo3Categories[0];
        nextSectionTitle = `Módulo 3 › ${nextCat.name}`;
        onNextSection = () => {
          selectModulo3Category(nextCat);
        };
      }
    }
  }

  // CATEGORY HANDLING: ADICIONAL
  const selectAdicionalCategory = (cat: Category) => {
    setCurrentCategory(cat);
    const allCards = flashcardData[cat.id] || [];
    setCurrentSubcat(null);
    setCurrentCards(allCards.map((c, i) => ({ ...c, id: i })));
    setBreadcrumb(`Adicional › ${cat.name} › Todas`);
    setScreen("flashcards");
  };

  const selectAdicionalSubcat = (subcatId: string) => {
    if (!currentCategory) return;
    const allCards = flashcardData[currentCategory.id] || [];

    if (subcatId === "__all__") {
      setCurrentSubcat(null);
      setCurrentCards(allCards.map((c, i) => ({ ...c, id: i })));
      setBreadcrumb(`Adicional › ${currentCategory.name} › Todas`);
    } else {
      const sub = (currentCategory.subcats || []).find((s) => s.id === subcatId);
      if (!sub) return;
      setCurrentSubcat(sub);
      const filtered = allCards.filter((c) => (sub.keys || []).includes(c.es));
      setCurrentCards(filtered.map((c, i) => ({ ...c, id: i })));
      setBreadcrumb(`Adicional › ${currentCategory.name} › ${sub.name}`);
    }
    setScreen("flashcards");
  };

  // CATEGORY HANDLING: MÓDULO 3
  const selectModulo3Category = (cat: Category) => {
    if (cat.type === "verbos") {
      setCurrentTense(null); // special tag for Futuro do Presente (Modulo 3)
      setScreen("verb-practice");
      setBreadcrumb("Módulo 3 › Futuro do Presente");
    } else {
      setCurrentCategory(cat);
      const allCards = modulo3FlashcardData[cat.id] || [];
      setCurrentSubcat(null);
      setCurrentCards(allCards.map((c, i) => ({ ...c, id: i })));
      setBreadcrumb(`Módulo 3 › ${cat.name} › Todas`);
      setScreen("flashcards");
    }
  };

  const selectModulo3Subcat = (subcatId: string) => {
    if (!currentCategory) return;
    const allCards = modulo3FlashcardData[currentCategory.id] || [];

    if (subcatId === "__all__") {
      setCurrentSubcat(null);
      setCurrentCards(allCards.map((c, i) => ({ ...c, id: i })));
      setBreadcrumb(`Módulo 3 › ${currentCategory.name} › Todas`);
    } else {
      const sub = (currentCategory.subcats || []).find((s) => s.id === subcatId);
      if (!sub) return;
      setCurrentSubcat(sub);
      const filtered = allCards.filter(
        (c) => (sub.keys || []).includes(c.es) || (sub.keys || []).includes(c.pt)
      );
      setCurrentCards(filtered.map((c, i) => ({ ...c, id: i })));
      setBreadcrumb(`Módulo 3 › ${currentCategory.name} › ${sub.name}`);
    }
    setScreen("flashcards");
  };

  const selectSubcategoryGate = (subcatId: string) => {
    if (!currentCategory) return;
    const isM3 = modulo3Categories.some((c) => c.id === currentCategory.id);
    if (isM3) {
      selectModulo3Subcat(subcatId);
    } else {
      selectAdicionalSubcat(subcatId);
    }
  };

  const selectAllSubcatGate = () => {
    selectSubcategoryGate("__all__");
  };

  // VERBS HANDLING
  const selectVerbTense = (tense: VerbTense) => {
    setCurrentTense(tense);
    setScreen("verb-practice");
    setBreadcrumb(`Verbos › ${tense.name}`);
  };

  // BACK NAVIGATION
  const navigateBack = () => {
    if (screen === "modulo3" || screen === "categories" || screen === "verb-tenses") {
      setScreen("home");
      setBreadcrumb("Selecciona un módulo");
    } else if (screen === "subcategories") {
      if (!currentCategory) return;
      const isM3 = modulo3Categories.some((c) => c.id === currentCategory.id);
      if (isM3) {
        setScreen("modulo3");
        setBreadcrumb("Módulo 3");
      } else {
        setScreen("categories");
        setBreadcrumb("Adicional");
      }
      setCurrentCategory(null);
    } else if (screen === "flashcards") {
      if (!currentCategory) {
        setScreen("home");
        setBreadcrumb("Selecciona un módulo");
        return;
      }
      const isM3 = modulo3Categories.some((c) => c.id === currentCategory.id);
      if (isM3) {
        setScreen("modulo3");
        setBreadcrumb("Módulo 3");
      } else {
        setScreen("categories");
        setBreadcrumb("Adicional");
      }
      setCurrentCategory(null);
    } else if (screen === "verb-practice") {
      if (currentTense === null) {
        setScreen("modulo3");
        setBreadcrumb("Módulo 3");
      } else {
        setScreen("verb-tenses");
        setBreadcrumb("Verbos");
      }
    } else if (screen === "congrats") {
      setScreen("home");
      setBreadcrumb("Selecciona un módulo");
    }
  };

  return (
    <div className="wrap relative min-h-screen z-10 flex flex-col">
      {/* GLOBAL HEADER */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-[var(--border)] bg-[#100f1c10] backdrop-blur-sm sticky top-0 z-50">
        <div className="logo font-display text-2xl font-black tracking-tight text-[var(--text)]">
          Português<span className="text-[var(--accent)] font-bold">Flash</span>
        </div>
        <div className="breadcrumb text-[10px] font-bold text-[var(--text-muted)] tracking-widest uppercase hidden md:block">
          {breadcrumb}
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-grow">
        {/* SCREEN 0: HOME SCREEN */}
        {screen === "home" && (
          <div id="screen-home" className="max-w-[1100px] mx-auto py-12 px-4 sm:px-8">
            <div className="text-center md:text-left mb-12 flex flex-col items-center md:items-start">
              <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-bold px-3 py-1.5 rounded-full bg-[rgba(244,167,50,0.08)] border border-[rgba(244,167,50,0.15)] mb-3 inline-block">
                🇧🇷 Estudiar portugués de forma inteligente
              </span>
              <h1 className="hero-title font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--text)] leading-none my-2 text-center md:text-left">
                Aprende portugués <br className="hidden sm:inline" />
                <em className="font-light italic text-[var(--accent)]">con tarjetas interactivas</em>
              </h1>
              <p className="hero-sub text-[var(--text-muted)] text-base sm:text-lg font-light mt-3 text-center md:text-left max-w-2xl">
                Elige uno de los tres módulos interactivos para practicar vocabulario de forma visual,
                conjugación de verbos en tiempo real u organizar tus temas de estudio prioritarios.
              </p>
            </div>

            {/* THREE MODULE SELECTION ROW */}
            <div className="home-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div
                onClick={() => enterScope("modulo3")}
                className="home-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all relative overflow-hidden group shadow-md"
              >
                <div className="mb-4 bg-[rgba(244,167,50,0.06)] w-14 h-14 rounded-2xl flex items-center justify-center border border-[rgba(244,167,50,0.1)] group-hover:scale-110 transition-transform">
                  <EmojiIcon emoji="📗" size={32} />
                </div>
                <h3 className="home-card-name font-display text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  Módulo 3 Especial
                </h3>
              </div>

              <div
                onClick={() => enterScope("adicional")}
                className="home-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all relative overflow-hidden group shadow-md"
              >
                <div className="mb-4 bg-[rgba(244,167,50,0.06)] w-14 h-14 rounded-2xl flex items-center justify-center border border-[rgba(244,167,50,0.1)] group-hover:scale-110 transition-transform">
                  <EmojiIcon emoji="📚" size={32} />
                </div>
                <h3 className="home-card-name font-display text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  Vocabulario Adicional
                </h3>
              </div>

              <div
                onClick={() => enterScope("verbos")}
                className="home-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all relative overflow-hidden group shadow-md"
              >
                <div className="mb-4 bg-[rgba(244,167,50,0.06)] w-14 h-14 rounded-2xl flex items-center justify-center border border-[rgba(244,167,50,0.1)] group-hover:scale-110 transition-transform">
                  <EmojiIcon emoji="🔵" size={32} />
                </div>
                <h3 className="home-card-name font-display text-xl font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                  Conjugación de Verbos
                </h3>
              </div>
            </div>

            {/* Persistent Study Planner */}
            <TemasSection />
          </div>
        )}

        {/* SCREEN: MÓDULO 3 CATEGORIES DASHBOARD */}
        {screen === "modulo3" && (
          <div className="max-w-[1100px] mx-auto py-12 px-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={navigateBack}
                className="back-btn bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer font-semibold text-sm"
              >
                ← Volver
              </button>
              <h2 className="subcat-cat-title font-display text-3xl font-black text-[var(--text)] flex items-center gap-3">
                <EmojiIcon emoji="📗" size={36} />
                <span>Módulo 3 Especial</span>
              </h2>
            </div>
            <p className="subcat-desc text-[var(--text-muted)] text-sm mb-8">
              Elige un módulo temático o gramática del Módulo 3 de estudio prioritario:
            </p>

            <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modulo3Categories.map((cat) => {
                return (
                  <div
                    key={cat.id}
                    onClick={() => selectModulo3Category(cat)}
                    className="cat-card bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all relative overflow-hidden group shadow-sm flex flex-col items-center justify-center text-center gap-3"
                  >
                    <div className="cat-emoji my-1 flex justify-center items-center">
                      <EmojiIcon emoji={cat.emoji} size={36} />
                    </div>
                    <h4 className="cat-name font-display text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {cat.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SCREEN: ADICIONAL MODULE CATEGORIES DASHBOARD */}
        {screen === "categories" && (
          <div className="max-w-[1100px] mx-auto py-12 px-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={navigateBack}
                className="back-btn bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer font-semibold text-sm"
              >
                ← Volver
              </button>
              <h2 className="subcat-cat-title font-display text-3xl font-black text-[var(--text)] flex items-center gap-3">
                <EmojiIcon emoji="📚" size={36} />
                <span>Vocabulario Adicional (28 Categorías)</span>
              </h2>
            </div>
            <p className="subcat-desc text-[var(--text-muted)] text-sm mb-8">
              Despliega y entrena vocabulario estructurado a lo largo de 28 categorías completas de la lengua portuguesa:
            </p>

            <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => {
                return (
                  <div
                    key={cat.id}
                    onClick={() => selectAdicionalCategory(cat)}
                    className="cat-card bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all relative overflow-hidden group shadow-sm flex flex-col items-center justify-center text-center gap-3"
                  >
                    <div className="cat-emoji my-1 flex justify-center items-center">
                      <EmojiIcon emoji={cat.emoji} size={36} />
                    </div>
                    <h4 className="cat-name font-display text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {cat.name}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SCREEN: VERB TENSES SELECTION */}
        {screen === "verb-tenses" && (
          <div className="max-w-[1100px] mx-auto py-12 px-6">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={navigateBack}
                className="back-btn bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer font-semibold text-sm"
              >
                ← Volver
              </button>
              <h2 className="subcat-cat-title font-display text-3xl font-black text-[var(--text)] flex items-center gap-3">
                <EmojiIcon emoji="🔵" size={36} />
                <span>Tiempos Verbales</span>
              </h2>
            </div>
            <p className="subcat-desc text-[var(--text-muted)] text-sm mb-8 -mt-4">
              Elige un tiempo gramatical para conjugar la colección de 15 verbos más populares:
            </p>

            <div className="tense-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {verbTenses.map((tense) => (
                <div
                  key={tense.id}
                  onClick={() => selectVerbTense(tense)}
                  className="tense-card bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all group shadow-sm flex flex-col items-center justify-center text-center gap-3"
                >
                  <div className="tense-emoji bg-[rgba(255,255,255,0.03)] p-3 rounded-xl border border-[var(--border)] group-hover:bg-[rgba(244,167,50,0.05)] transition-colors flex items-center justify-center">
                    <EmojiIcon emoji={tense.emoji} size={36} />
                  </div>
                  <h4 className="tense-name font-display text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {tense.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREEN: SUBCATEGORY SELECTION GATE */}
        {screen === "subcategories" && currentCategory && (
          <div className="max-w-[800px] mx-auto py-12 px-6 bg-[rgba(0,0,0,0.04)] rounded-3xl border border-[var(--border)] my-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={navigateBack}
                className="back-btn bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer font-semibold text-sm"
              >
                ← Volver
              </button>
              <h2 className="subcat-cat-title font-display text-3xl font-black text-[var(--text)] flex items-center gap-3">
                <EmojiIcon emoji={currentCategory.emoji} size={36} />
                <span>{currentCategory.name}</span>
              </h2>
            </div>
            <p className="subcat-desc text-[var(--text-muted)] text-sm mb-8 -mt-2">
              Selecciona una de las subdivisiones temáticas del curso, o practica con toda la baraja de tarjetas juntas:
            </p>

            <div className="subcat-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {(currentCategory.subcats || []).map((sub) => {
                return (
                  <div
                    key={sub.id}
                    onClick={() => selectSubcategoryGate(sub.id)}
                    className="subcat-card bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all flex flex-col items-center justify-center text-center gap-3 group shadow-sm"
                  >
                    <div className="subcat-emoji flex items-center justify-center">
                      <EmojiIcon emoji={sub.emoji} size={32} />
                    </div>
                    <h4 className="subcat-name font-display text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {sub.name}
                    </h4>
                  </div>
                );
              })}
            </div>

            {/* BUTTON: Study all cards */}
            <button
              onClick={selectAllSubcatGate}
              className="all-subcat-btn w-full bg-gradient-to-r from-[rgba(244,167,50,0.12)] to-[rgba(232,103,58,0.08)] hover:from-[rgba(244,167,50,0.2)] hover:to-[rgba(232,103,58,0.14)] border border-dashed border-[rgba(244,167,50,0.35)] hover:border-[var(--accent)] text-[var(--accent)] font-display font-bold text-center text-base py-4 rounded-2xl shadow-sm hover:scale-[1.01] transform transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              ★ Practicar todas las tarjetas de {currentCategory.name} juntas
            </button>
          </div>
        )}

        {/* SCREEN: CARD RECOGNITION AND WRITING LABORATORY */}
        {screen === "flashcards" && currentCategory && (
          <FlashcardPractice
            title={
              currentSubcat ? (
                <span className="flex items-center gap-2">
                  <EmojiIcon emoji={currentSubcat.emoji} size={32} />
                  <span>{currentSubcat.name}</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <EmojiIcon emoji={currentCategory.emoji} size={32} />
                  <span>Todo {currentCategory.name}</span>
                </span>
              )
            }
            categoryLabel={
              modulo3Categories.some((c) => c.id === currentCategory.id)
                ? `Módulo 3 › ${currentCategory.name}`
                : `Adicional › ${currentCategory.name}`
            }
            cards={currentCards}
            onBack={navigateBack}
            onFinishCourse={() => setScreen("congrats")}
            onNextSection={onNextSection}
            nextSectionTitle={nextSectionTitle}
          />
        )}

        {/* SCREEN: ACTIVE CONJUGATION STUDY LAB */}
        {screen === "verb-practice" && (
          <VerbPractice
            tense={currentTense}
            onBack={navigateBack}
            onNextSection={onNextSection}
            nextSectionTitle={nextSectionTitle}
          />
        )}

        {/* SCREEN: CONGRATULATIONS AND SUCCESS FLAG */}
        {screen === "congrats" && (
          <div
            id="screen-congrats"
            className="flex flex-col items-center justify-center text-center py-16 px-4 max-w-xl mx-auto"
          >
            <div className="confetti-emoji text-6xl mb-6 select-none animate-bounce">🎉</div>
            <h2 className="congrats-title font-display text-4xl sm:text-5xl font-black text-[var(--accent)] mb-3">
              ¡Felicitaciones!
            </h2>
            <p className="congrats-sub text-base text-[var(--text-muted)] leading-relaxed mb-8">
              ¡Completaste de forma grandiosa estas tarjetas de estudio! Tu vocabulario y oído para
              el idioma portugués están logrando un aumento drástico 🇧🇷
            </p>
            <button
              onClick={() => setScreen("home")}
              className="restart-btn bg-[var(--surface)] hover:bg-[#00000020] text-[var(--text)] border border-[var(--border)] hover:border-[var(--accent)] px-8 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer shadow-sm"
            >
              ← Volver al inicio de Português Flash
            </button>
          </div>
        )}
      </main>

      {/* FOOTER FRAME */}
      <footer className="py-8 text-center text-[10px] font-bold text-[var(--text-muted)] tracking-widest uppercase border-t border-[var(--border)] mt-12">
        Português Flash · {new Date().getFullYear()} · Aprende con Tarjetas
      </footer>
    </div>
  );
}
