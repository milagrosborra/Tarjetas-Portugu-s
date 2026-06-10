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

  // CATEGORY HANDLING: ADICIONAL
  const selectAdicionalCategory = (cat: Category) => {
    setCurrentCategory(cat);
    setScreen("subcategories");
    setBreadcrumb(`Adicional › ${cat.name}`);
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
      setScreen("subcategories");
      setBreadcrumb(`Módulo 3 › ${cat.name}`);
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
      setScreen("subcategories");
      setBreadcrumb(currentCategory ? `Volver a ${currentCategory.name}` : "Estudio");
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
                conjuación de verbos en tiempo real u organizar tus temas de estudio prioritarios.
              </p>
            </div>

            {/* THREE MODULE SELECTION ROW */}
            <div className="home-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div
                onClick={() => enterScope("modulo3")}
                className="home-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex flex-col items-start cursor-pointer hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all relative overflow-hidden group shadow-md"
              >
                <div className="text-4xl mb-4 bg-[rgba(244,167,50,0.06)] w-14 h-14 rounded-2xl flex items-center justify-center border border-[rgba(244,167,50,0.1)] group-hover:scale-110 transition-transform">
                  📗
                </div>
                <h3 className="home-card-name font-display text-xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  Módulo 3 Especial
                </h3>
                <p className="home-card-desc text-xs line-clamp-3 text-[var(--text-muted)] leading-relaxed">
                  Superlativos, Fazendo as Malas, viajes en hotel, meteorología y verbos esenciales de gramática de nivel intermedio.
                </p>
              </div>

              <div
                onClick={() => enterScope("adicional")}
                className="home-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex flex-col items-start cursor-pointer hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all relative overflow-hidden group shadow-md"
              >
                <div className="text-4xl mb-4 bg-[rgba(244,167,50,0.06)] w-14 h-14 rounded-2xl flex items-center justify-center border border-[rgba(244,167,50,0.1)] group-hover:scale-110 transition-transform">
                  📚
                </div>
                <h3 className="home-card-name font-display text-xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  Vocabulario Adicional
                </h3>
                <p className="home-card-desc text-xs line-clamp-3 text-[var(--text-muted)] leading-relaxed">
                  Más de 28 categorías didácticas de vocabulario: comida, familia, colores, preposiciones, adverbios, tecnología y ocio.
                </p>
              </div>

              <div
                onClick={() => enterScope("verbos")}
                className="home-card bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 flex flex-col items-start cursor-pointer hover:border-[var(--accent)] hover:-translate-y-1.5 transition-all relative overflow-hidden group shadow-md"
              >
                <div className="text-4xl mb-4 bg-[rgba(244,167,50,0.06)] w-14 h-14 rounded-2xl flex items-center justify-center border border-[rgba(244,167,50,0.1)] group-hover:scale-110 transition-transform">
                  🔵
                </div>
                <h3 className="home-card-name font-display text-xl font-bold text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                  Conjugación de Verbos
                </h3>
                <p className="home-card-desc text-xs line-clamp-3 text-[var(--text-muted)] leading-relaxed">
                  Practica los 15 verbos indispensables del portugués en 6 tiempos (Presente, Pretérito Perfeito, Imperfecto, Subjuntivo, etc.).
                </p>
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
              <h2 className="subcat-cat-title font-display text-3xl font-black text-[var(--text)]">
                📗 Módulo 3 Especial
              </h2>
            </div>
            <p className="subcat-desc text-[var(--text-muted)] text-sm mb-8">
              Elige un módulo temático o gramática del Módulo 3 de estudio prioritario:
            </p>

            <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modulo3Categories.map((cat) => {
                const isVerbType = cat.type === "verbos";
                const keysCount = isVerbType
                  ? (cat.verbs || []).length
                  : (modulo3FlashcardData[cat.id] || []).length;
                return (
                  <div
                    key={cat.id}
                    onClick={() => selectModulo3Category(cat)}
                    className="cat-card bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all relative overflow-hidden group shadow-sm"
                  >
                    <span className="cat-emoji text-3xl block mb-3">{cat.emoji}</span>
                    <h4 className="cat-name font-display text-lg font-bold text-[var(--text)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {cat.name}
                    </h4>
                    <span className="cat-count text-[11px] font-bold text-[var(--text-muted)]">
                      {isVerbType ? `${keysCount} verbos prácticos` : `${keysCount} tarjetas didácticas`}
                    </span>
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
              <h2 className="subcat-cat-title font-display text-3xl font-black text-[var(--text)]">
                📚 Vocabulario Adicional (28 Categorías)
              </h2>
            </div>
            <p className="subcat-desc text-[var(--text-muted)] text-sm mb-8">
              Despliega y entrena vocabulario estructurado a lo largo de 28 categorías completas de la lengua portuguesa:
            </p>

            <div className="categories-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => {
                const totalCards = (flashcardData[cat.id] || []).length;
                return (
                  <div
                    key={cat.id}
                    onClick={() => selectAdicionalCategory(cat)}
                    className="cat-card bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all relative overflow-hidden group shadow-sm"
                  >
                    <span className="cat-emoji text-3xl block mb-3">{cat.emoji}</span>
                    <h4 className="cat-name font-display text-lg font-bold text-[var(--text)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                      {cat.name}
                    </h4>
                    <span className="cat-count text-[11px] font-bold text-[var(--text-muted)]">
                      {totalCards} tarjetas · {cat.subcats?.length || 0} subcategorías
                    </span>
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
              <h2 className="subcat-cat-title font-display text-3xl font-black text-[var(--text)]">
                🔵 Tiempos Verbales
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
                  className="tense-card bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all group shadow-sm flex items-start gap-4"
                >
                  <span className="tense-emoji text-3xl bg-[rgba(255,255,255,0.03)] p-3 rounded-xl border border-[var(--border)] group-hover:bg-[rgba(244,167,50,0.05)] transition-colors">
                    {tense.emoji}
                  </span>
                  <div>
                    <h4 className="tense-name font-display text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                      {tense.name}
                    </h4>
                    <p className="tense-desc text-[11px] text-[var(--text-muted)] mt-1 font-medium leading-relaxed">
                      {tense.desc}
                    </p>
                  </div>
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
              <h2 className="subcat-cat-title font-display text-3xl font-black text-[var(--text)]">
                {currentCategory.emoji} {currentCategory.name}
              </h2>
            </div>
            <p className="subcat-desc text-[var(--text-muted)] text-sm mb-8 -mt-2">
              Selecciona una de las subdivisiones temáticas del curso, o practica con toda la baraja de tarjetas juntas:
            </p>

            <div className="subcat-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {(currentCategory.subcats || []).map((sub) => {
                const isM3 = modulo3Categories.some((c) => c.id === currentCategory!.id);
                const cardsDb = isM3
                  ? modulo3FlashcardData[currentCategory!.id] || []
                  : flashcardData[currentCategory!.id] || [];

                // filtering count
                const matchedCount = isM3
                  ? cardsDb.filter(
                      (c) => (sub.keys || []).includes(c.es) || (sub.keys || []).includes(c.pt)
                    ).length
                  : cardsDb.filter((c) => (sub.keys || []).includes(c.es)).length;

                return (
                  <div
                    key={sub.id}
                    onClick={() => selectSubcategoryGate(sub.id)}
                    className="subcat-card bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] rounded-2xl p-5 cursor-pointer hover:-translate-y-0.5 transition-all flex items-center gap-4 group shadow-sm"
                  >
                    <span className="subcat-emoji text-2xl">{sub.emoji}</span>
                    <div>
                      <h4 className="subcat-name font-display text-base font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                        {sub.name}
                      </h4>
                      <span className="subcat-count text-[11px] font-bold text-[var(--text-muted)]">
                        {matchedCount} tarjetas
                      </span>
                    </div>
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
              currentSubcat
                ? `${currentSubcat.emoji} ${currentSubcat.name}`
                : `Todo ${currentCategory.name}`
            }
            categoryLabel={
              modulo3Categories.some((c) => c.id === currentCategory.id)
                ? `Módulo 3 › ${currentCategory.name}`
                : `Adicional › ${currentCategory.name}`
            }
            cards={currentCards}
            onBack={navigateBack}
            onFinishCourse={() => setScreen("congrats")}
          />
        )}

        {/* SCREEN: ACTIVE CONJUGATION STUDY LAB */}
        {screen === "verb-practice" && (
          <VerbPractice tense={currentTense} onBack={navigateBack} />
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
