import test from "node:test";
import assert from "node:assert/strict";

import {
  loadTodos,
  saveTodos,
  newTodoId,
  sortTodos,
  isOverdue,
  todoState,
} from "../src/utils/todosStorage.js";

const store = new Map();
globalThis.localStorage = {
  getItem: (key) => (store.has(key) ? store.get(key) : null),
  setItem: (key, value) => store.set(key, value),
  removeItem: (key) => store.delete(key),
  clear: () => store.clear(),
};

test("todos: save and load round-trips, and a bad value falls back to an empty list", () => {
  store.clear();
  assert.deepEqual(loadTodos(), []);
  saveTodos([{ id: "todo-1", title: "Call a client", completed: false }]);
  assert.equal(loadTodos().length, 1);
  assert.equal(loadTodos()[0].title, "Call a client");
  store.set("javad-nasr-admin-todos", "not-json");
  assert.deepEqual(loadTodos(), []);
});

test("todos: ids are unique", () => {
  const ids = new Set(Array.from({ length: 50 }, () => newTodoId()));
  assert.equal(ids.size, 50);
});

test("todos: dated todos sort earliest first, undated go last", () => {
  const todos = [
    { id: "c", date: "2026-11-10", time: "09:00", createdAt: "2026-10-01T00:00:00.000Z" },
    { id: "a", date: "2026-11-01", time: "18:00", createdAt: "2026-10-02T00:00:00.000Z" },
    { id: "b", date: "2026-11-01", time: "09:00", createdAt: "2026-10-03T00:00:00.000Z" },
    { id: "d", date: "", createdAt: "2026-10-04T00:00:00.000Z" },
  ];
  assert.deepEqual(sortTodos(todos).map((item) => item.id), ["b", "a", "c", "d"]);
});

test("todos: overdue means a past date that is not completed", () => {
  assert.equal(isOverdue({ date: "2026-01-01", completed: false }, "2026-10-28"), true);
  assert.equal(isOverdue({ date: "2026-01-01", completed: true }, "2026-10-28"), false);
  assert.equal(isOverdue({ date: "2026-12-01", completed: false }, "2026-10-28"), false);
  assert.equal(isOverdue({ date: "2026-10-28", completed: false }, "2026-10-28"), false);
  assert.equal(isOverdue({ date: "", completed: false }, "2026-10-28"), false);
});

test("todos: color state is new, then edited, then completed", () => {
  assert.equal(todoState({ completed: false, edited: false }), "new");
  assert.equal(todoState({ completed: false }), "new");
  assert.equal(todoState({ completed: false, edited: true }), "edited");
  assert.equal(todoState({ completed: true, edited: true }), "completed");
  assert.equal(todoState({ completed: true, edited: false }), "completed");
});
