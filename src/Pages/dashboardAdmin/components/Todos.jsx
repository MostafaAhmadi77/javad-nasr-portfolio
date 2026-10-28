import { useMemo, useState } from "react";
import { loadTodos, saveTodos, newTodoId, sortTodos, isOverdue, todoState } from "../../../utils/todosStorage";

const EMPTY_FORM = { title: "", note: "", date: "", time: "" };

// Todo states: brand orange for new, gold for edited, and green — the
// standard color for done/complete — for completed.
const STATE_COLORS = {
  new: { hex: "#FB5701", label: "New" },
  edited: { hex: "#F2A93B", label: "Edited" },
  completed: { hex: "#22C55E", label: "Completed" },
};

function monthGrid(year, month) {
  const first = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = first.getDay();
  const cells = [];
  for (let i = 0; i < offset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) cells.push(day);
  return cells;
}

function dateKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function displayDate(date, time) {
  if (!date) return "No date set";
  const text = new Date(`${date}T12:00:00`).toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return time ? `${text} · ${time}` : text;
}

function Todos() {
  const [todos, setTodos] = useState(() => loadTodos());
  const [form, setForm] = useState(EMPTY_FORM);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formError, setFormError] = useState("");
  const [deleteId, setDeleteId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendar, setCalendar] = useState(() => {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  });

  function persist(next) {
    setTodos(next);
    saveTodos(next);
  }

  function startCreate() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setFormError("");
    setShowForm(true);
  }

  function startEdit(todo) {
    setForm({ title: todo.title, note: todo.note || "", date: todo.date || "", time: todo.time || "" });
    setEditingId(todo.id);
    setFormError("");
    setDeleteId(null);
    setShowForm(true);
  }

  function handleSave(event) {
    event.preventDefault();
    if (!form.title.trim()) {
      setFormError("Please enter a title for the todo.");
      return;
    }
    const now = new Date().toISOString();
    let next;
    if (editingId) {
      next = todos.map((item) =>
        item.id === editingId
          ? { ...item, title: form.title.trim(), note: form.note.trim(), date: form.date || "", time: form.time || "", edited: true, updatedAt: now }
          : item
      );
    } else {
      next = [
        { id: newTodoId(), title: form.title.trim(), note: form.note.trim(), date: form.date || "", time: form.time || "", completed: false, createdAt: now, updatedAt: now },
        ...todos,
      ];
    }
    persist(next);
    setShowForm(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  }

  function handleToggle(todo) {
    persist(todos.map((item) => (item.id === todo.id ? { ...item, completed: !item.completed, updatedAt: new Date().toISOString() } : item)));
  }

  function handleDelete(id) {
    persist(todos.filter((item) => item.id !== id));
    setDeleteId(null);
  }

  const countsByDate = useMemo(() => {
    const counts = {};
    todos.forEach((todo) => {
      if (todo.date) counts[todo.date] = (counts[todo.date] || 0) + 1;
    });
    return counts;
  }, [todos]);

  const visible = sortTodos(todos).filter((todo) => {
    if (filter === "pending" && todo.completed) return false;
    if (filter === "completed" && !todo.completed) return false;
    if (selectedDate && todo.date !== selectedDate) return false;
    return true;
  });

  const cells = monthGrid(calendar.year, calendar.month);
  const monthLabel = new Date(calendar.year, calendar.month, 1).toLocaleDateString(undefined, { month: "long", year: "numeric" });
  const todayKey = (() => {
    const now = new Date();
    return dateKey(now.getFullYear(), now.getMonth(), now.getDate());
  })();

  function shiftMonth(delta) {
    setCalendar((prev) => {
      const next = new Date(prev.year, prev.month + delta, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-between items-center gap-3 border border-primary-orange rounded-2xl p-4 bg-black">
        <div>
          <h1 className="text-white ss:text-xl sm:text-2xl font-bold">Todos</h1>
          <p className="text-white/50 text-sm">
            Your personal tasks. Pick a date and time from the calendar, then
            edit, complete, or delete each todo.
          </p>
        </div>
        <button type="button" onClick={startCreate} className="bg-primary-orange text-white px-4 py-2 rounded-xl">
          New todo
        </button>
      </div>

      <div className="grid ss:grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
        {/* Calendar: pick a day to filter the list, or to set a todo date */}
        <div className="border border-white/15 rounded-2xl ss:p-4 sm:p-5 bg-black h-fit">
          <div className="flex justify-between items-center mb-3">
            <button type="button" onClick={() => shiftMonth(-1)} className="text-white/70 hover:text-white px-2 py-1" aria-label="Previous month">
              ←
            </button>
            <p className="text-white font-bold text-sm">{monthLabel}</p>
            <button type="button" onClick={() => shiftMonth(1)} className="text-white/70 hover:text-white px-2 py-1" aria-label="Next month">
              →
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-white/40 text-xs mb-1">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {cells.map((day, index) => {
              if (!day) return <span key={`blank-${index}`} />;
              const key = dateKey(calendar.year, calendar.month, day);
              const hasTodos = Boolean(countsByDate[key]);
              const selected = selectedDate === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedDate(selected ? null : key)}
                  className={`relative rounded-lg py-2 text-sm transition ${
                    selected
                      ? "bg-primary-orange text-white"
                      : hasTodos
                        ? "bg-primary-orange/20 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                  } ${key === todayKey && !selected ? "border border-white/40" : ""}`}
                >
                  {day}
                  {hasTodos && !selected && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 size-1 rounded-full bg-primary-orange" />}
                </button>
              );
            })}
          </div>
          <p className="text-white/40 text-xs mt-3">
            Tap a day to show only its todos. Days with an orange dot have todos.
          </p>
          {selectedDate && (
            <button
              type="button"
              onClick={() => setSelectedDate(null)}
              className="border border-white/30 text-white px-3 py-1.5 rounded-xl text-xs mt-3"
            >
              Show all dates
            </button>
          )}
        </div>

        <div className="flex flex-col gap-4 min-w-0">
          {showForm && (
            <form onSubmit={handleSave} className="border border-white/15 rounded-2xl ss:p-4 sm:p-5 bg-black flex flex-col gap-3">
              <h2 className="text-white font-bold ss:text-lg sm:text-xl">{editingId ? "Edit todo" : "New todo"}</h2>
              <label className="flex flex-col gap-1">
                <span className="text-white/70 text-sm">Title *</span>
                <input
                  type="text"
                  value={form.title}
                  onChange={(event) => setForm({ ...form, title: event.target.value })}
                  placeholder="What needs to be done?"
                  className="bg-black border border-white/20 rounded-xl px-3 py-2 text-white"
                />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-white/70 text-sm">Note</span>
                <textarea
                  value={form.note}
                  onChange={(event) => setForm({ ...form, note: event.target.value })}
                  placeholder="Details (optional)"
                  rows={3}
                  className="bg-black border border-white/20 rounded-xl px-3 py-2 text-white"
                />
              </label>
              <div className="grid ss:grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex flex-col gap-1">
                  <span className="text-white/70 text-sm">Date (calendar)</span>
                  <input
                    type="date"
                    value={form.date}
                    onChange={(event) => setForm({ ...form, date: event.target.value })}
                    className="bg-black border border-white/20 rounded-xl px-3 py-2 text-white [color-scheme:dark]"
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-white/70 text-sm">Time</span>
                  <input
                    type="time"
                    value={form.time}
                    onChange={(event) => setForm({ ...form, time: event.target.value })}
                    className="bg-black border border-white/20 rounded-xl px-3 py-2 text-white [color-scheme:dark]"
                  />
                </label>
              </div>
              {formError && <p className="text-primary-orange text-sm">{formError}</p>}
              <div className="flex flex-wrap gap-2">
                <button type="submit" className="bg-primary-orange text-white px-4 py-2 rounded-xl">
                  {editingId ? "Save changes" : "Create todo"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                    setForm(EMPTY_FORM);
                  }}
                  className="border border-white/30 text-white px-4 py-2 rounded-xl"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          <div className="flex flex-wrap gap-3 border border-white/15 rounded-2xl px-4 py-2.5 bg-black">
            {Object.entries(STATE_COLORS).map(([key, value]) => (
              <span key={key} className="flex items-center gap-1.5 text-white/70 text-xs">
                <span className="inline-block size-2.5 rounded-full" style={{ backgroundColor: value.hex }} />
                {value.label}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { key: "all", label: "All" },
              { key: "pending", label: "Pending" },
              { key: "completed", label: "Completed" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setFilter(item.key)}
                className={`border border-primary-orange px-4 py-1.5 rounded-xl text-sm ${
                  filter === item.key ? "bg-primary-orange text-white" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <span className="text-white/40 text-sm self-center ml-1">
              {visible.length} of {todos.length} todos{selectedDate ? ` on ${selectedDate}` : ""}
            </span>
          </div>

          {visible.length === 0 ? (
            <p className="text-white/50 border border-white/15 rounded-2xl p-6 bg-black">
              {todos.length === 0 ? "No todos yet. Create the first one with the New todo button." : "No todos match this filter."}
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {visible.map((todo) => {
                const state = todoState(todo);
                const color = STATE_COLORS[state];
                return (
                <li key={todo.id} className="border border-white/15 border-l-4 rounded-2xl ss:p-4 sm:p-5 bg-black" style={{ borderLeftColor: color.hex }}>
                  <div className="flex flex-wrap justify-between gap-2 items-start">
                    <div className="min-w-0">
                      <p className={`text-white font-bold ss:text-base sm:text-lg ${todo.completed ? "line-through text-white/50" : ""}`}>
                        {todo.title}
                      </p>
                      <p className="text-white/50 text-sm mt-1">{displayDate(todo.date, todo.time)}</p>
                      {todo.note && <p className="text-white/70 text-sm mt-2 whitespace-pre-wrap">{todo.note}</p>}
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-xs border rounded-full px-2 py-0.5" style={{ borderColor: color.hex, color: color.hex }}>
                          {color.label}
                        </span>
                        {isOverdue(todo) && (
                          <span className="text-xs border border-red-400 text-red-400 rounded-full px-2 py-0.5">Overdue</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => handleToggle(todo)}
                      className="bg-primary-orange text-white px-3 py-1.5 rounded-xl text-sm"
                    >
                      {todo.completed ? "Reopen" : "Complete"}
                    </button>
                    <button
                      type="button"
                      onClick={() => startEdit(todo)}
                      className="border border-primary-orange text-primary-orange px-3 py-1.5 rounded-xl text-sm"
                    >
                      Edit
                    </button>
                    {deleteId === todo.id ? (
                      <>
                        <span className="text-white/70 text-sm self-center">Delete this todo?</span>
                        <button type="button" onClick={() => handleDelete(todo.id)} className="border border-red-400 text-red-400 px-3 py-1.5 rounded-xl text-sm">
                          Yes, delete
                        </button>
                        <button type="button" onClick={() => setDeleteId(null)} className="border border-white/30 text-white px-3 py-1.5 rounded-xl text-sm">
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setDeleteId(todo.id)}
                        className="border border-white/30 text-white px-3 py-1.5 rounded-xl text-sm"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Todos;
