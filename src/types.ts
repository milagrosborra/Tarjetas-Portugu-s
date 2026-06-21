export interface Card {
  id: number;
  es: string;
  pt: string;
  emoji: string;
}

export interface Subcat {
  id: string;
  emoji: string;
  name: string;
  keys?: string[];
}

export interface Category {
  id: string;
  emoji: string;
  name: string;
  subcats?: Subcat[];
  type?: string;
  verbs?: string[];
}

export interface VerbTense {
  id: string;
  emoji: string;
  name: string;
  desc: string;
}

export interface Tema {
  tema: string;
  pagina: string;
  seccion: string;
  estado: "" | "ok" | "reforzar" | "estudiar";
}

export type ViewScreen =
  | "home"
  | "categories"
  | "modulo3"
  | "subcategories"
  | "flashcards"
  | "verb-tenses"
  | "verb-practice"
  | "congrats"
  | "repaso";

export type CardMode = "ver" | "escribir";
export type VerbMode = "study" | "practice";
