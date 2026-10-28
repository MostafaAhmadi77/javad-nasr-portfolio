const KEY = "javad-nasr-admin-todos";

export function loadTodos() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveTodos(todos) {
  localStorage.setItem(KEY, JSON.stringify(todos));
}

export function newTodoId() {
  return `todo-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
}

export function localToday() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

// Dated todos first, earliest first; undated todos last, newest first.
export function sortTodos(todos) {
  return [...todos].sort((a, b) => {
    if (a.date && b.date) {
      const byDate = a.date.localeCompare(b.date);
      if (byDate !== 0) return byDate;
      return (a.time || "").localeCompare(b.time || "");
    }
    if (a.date) return -1;
    if (b.date) return 1;
    return (b.createdAt || "").localeCompare(a.createdAt || "");
  });
}

export function isOverdue(todo, today = localToday()) {
  if (!todo || todo.completed || !todo.date) return false;
  return todo.date < today;
}

// Color state of a todo, in order of priority:
// completed wins over edited, edited wins over new.
export function todoState(todo) {
  if (!todo) return "new";
  if (todo.completed) return "completed";
  if (todo.edited) return "edited";
  return "new";
}
