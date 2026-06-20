import { useState, useEffect } from "react";
import { Plus, Trash2, BookOpen, ArrowUp, ArrowDown } from "lucide-react";
import { Tema } from "../types";

export function TemasSection() {
  const [temas, setTemas] = useState<Tema[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ptflash_temas");
      if (saved) {
        setTemas(JSON.parse(saved));
      } else {
        // Initial seed data for standard topics
        const initial: Tema[] = [
          { tema: "Superlativos absolutos", pagina: "24", seccion: "Módulo 3", estado: "reforzar" },
          { tema: "Vocabulario de Hotel", pagina: "41", seccion: "Módulo 3", estado: "estudiar" },
          { tema: "Conectores gramaticales", pagina: "12", seccion: "Módulo Adicional", estado: "ok" }
        ];
        setTemas(initial);
        localStorage.setItem("ptflash_temas", JSON.stringify(initial));
      }
    } catch {
      setTemas([]);
    }
  }, []);

  const saveToLocalStorage = (updated: Tema[]) => {
    setTemas(updated);
    try {
      localStorage.setItem("ptflash_temas", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const addRow = () => {
    const updated = [
      ...temas,
      { tema: "", pagina: "", seccion: "", estado: "" as const }
    ];
    saveToLocalStorage(updated);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...temas];
    const temp = updated[index];
    updated[index] = updated[index - 1];
    updated[index - 1] = temp;
    saveToLocalStorage(updated);
  };

  const moveDown = (index: number) => {
    if (index === temas.length - 1) return;
    const updated = [...temas];
    const temp = updated[index];
    updated[index] = updated[index + 1];
    updated[index + 1] = temp;
    saveToLocalStorage(updated);
  };

  const handleFieldChange = (index: number, field: keyof Tema, value: string) => {
    const updated = [...temas];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    saveToLocalStorage(updated);
  };

  const deleteRow = (index: number) => {
    const updated = temas.filter((_, idx) => idx !== index);
    saveToLocalStorage(updated);
  };

  const statusClass = (estado: string) => {
    if (estado === "ok") return "s-ok";
    if (estado === "reforzar") return "s-reforzar";
    if (estado === "estudiar") return "s-estudiar";
    return "s-vacio";
  };

  return (
    <div className="temas-section max-w-[1100px] mx-auto mb-14 px-4 sm:px-10" id="study-topics-list">
      <div className="temas-header flex items-center justify-between mb-5 flex-wrap gap-3">
        <h3 className="temas-title font-display text-2xl font-black text-[var(--text)] flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[var(--accent)]" />
          <span>📋 Lista de temas personales</span>
        </h3>
        <button
          onClick={addRow}
          className="temas-add-btn bg-[var(--surface)] text-[var(--accent)] hover:bg-[rgba(244,167,50,0.08)] border border-[var(--border)] hover:border-[var(--accent)] text-sm font-semibold rounded-xl px-4 py-2.5 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>+ Agregar fila</span>
        </button>
      </div>

      <div className="temas-table-wrap bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-x-auto shadow-md">
        <table className="temas-table w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-[rgba(244,167,50,0.12)] to-[rgba(232,103,58,0.08)] border-b border-[var(--border)]">
              <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] w-[40%]">
                Tema de Estudio
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] w-[15%]">
                Página
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] w-[25%]">
                Módulo / Sección
              </th>
              <th className="px-4 py-3.5 text-left text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] w-[15%]">
                Estado
              </th>
              <th className="px-4 py-3.5 text-center text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] w-[12%]">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {temas.map((t, idx) => (
              <tr
                key={idx}
                className="border-b last:border-0 border-[rgba(255,255,255,0.04)] transition-colors hover:bg-[rgba(255,255,255,0.01)]"
              >
                <td className="px-4 py-3">
                  <input
                    type="text"
                    value={t.tema}
                    onChange={(e) => handleFieldChange(idx, "tema", e.target.value)}
                    placeholder="Ej: Pronombres Demostrativos"
                    className="tema-input w-full bg-transparent border-0 border-b border-transparent focus:border-[var(--accent)] text-sm font-medium text-[var(--text)] outline-none py-1 transition-all"
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    value={t.pagina}
                    onChange={(e) => handleFieldChange(idx, "pagina", e.target.value)}
                    placeholder="24"
                    className="tema-input w-full bg-transparent border-0 border-b border-transparent focus:border-[var(--accent)] text-sm font-medium text-[var(--text)] outline-none py-1 transition-all max-w-[80px]"
                  />
                </td>
                <td className="px-4 py-3">
                  <input
                    type="text"
                    value={t.seccion}
                    onChange={(e) => handleFieldChange(idx, "seccion", e.target.value)}
                    placeholder="Ej: Módulo 3"
                    className="tema-input w-full bg-transparent border-0 border-b border-transparent focus:border-[var(--accent)] text-sm font-medium text-[var(--text)] outline-none py-1 transition-all"
                  />
                </td>
                <td className="px-4 py-3">
                  <div className="relative">
                    <select
                      value={t.estado}
                      onChange={(e) => handleFieldChange(idx, "estado", e.target.value)}
                      className={`tema-status ${statusClass(t.estado)} w-full appearance-none border border-[var(--border)] rounded-lg px-2.5 py-1.5 fs-8 font-semibold cursor-pointer outline-none transition-all pr-8`}
                    >
                      <option value="">— Sin estado —</option>
                      <option value="ok">✓ Ok</option>
                      <option value="reforzar">⚡ Reforzar</option>
                      <option value="estudiar">📖 Estudiar</option>
                    </select>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-1">
                    <button
                      onClick={() => moveUp(idx)}
                      disabled={idx === 0}
                      className="tema-move-btn text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[rgba(244,167,50,0.08)] p-1.5 rounded-lg transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
                      title="Mover arriba"
                    >
                      <ArrowUp className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => moveDown(idx)}
                      disabled={idx === temas.length - 1}
                      className="tema-move-btn text-[var(--text-muted)] hover:text-[var(--accent)] hover:bg-[rgba(244,167,50,0.08)] p-1.5 rounded-lg transition-all disabled:opacity-20 disabled:pointer-events-none cursor-pointer"
                      title="Mover abajo"
                    >
                      <ArrowDown className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => deleteRow(idx)}
                      className="tema-del-btn text-[var(--text-muted)] hover:text-[var(--red)] hover:bg-[rgba(232,80,58,0.08)] p-1.5 rounded-lg transition-all cursor-pointer ml-1"
                      title="Eliminar tema"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {temas.length === 0 && (
          <div className="temas-empty text-center py-10 text-[var(--text-muted)] italic text-sm">
            No tienes ningún tema listado. Haz clic en "+ Agregar fila" para planificar tu estudio.
          </div>
        )}
      </div>
    </div>
  );
}
