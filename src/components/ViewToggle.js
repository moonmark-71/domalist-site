// src/components/ViewToggle.js
import { LayoutGrid, List } from "lucide-react";

export default function ViewToggle({ viewType, onChange }) {
  return (
    <div className="flex gap-2">
      {["grid", "list"].map((m) => (
        <button
          key={m}
          onClick={() => onChange(m)}
          className={`p-2 rounded-md hover:bg-gray-100 ${
            viewType === m ? "text-indigo-600" : "text-gray-500"
          }`}
        >
          {m === "grid" ? <LayoutGrid size={18} /> : <List size={18} />}
        </button>
      ))}
    </div>
  );
}
