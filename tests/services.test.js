import test from "node:test";
import assert from "node:assert/strict";

import {
  mergePublicServices,
  newServiceId,
} from "../src/Pages/dashboardAdmin/utils/servicesStorage.js";

const publicList = [
  { id: 1, title: "Strategy Development", description: "d", items: ["a"], iconKey: "compass", isPublic: true },
  { id: 2, title: "Organizational Development", description: "d", items: ["b"], iconKey: "users", isPublic: true },
];

test("services: public services appear when nothing is stored", () => {
  assert.deepEqual(
    mergePublicServices([], publicList).map((item) => item.id),
    [1, 2]
  );
});

test("services: a stored copy shadows the public service instead of duplicating it", () => {
  const stored = [
    { id: 1, title: "Strategy, edited", description: "d", items: ["a"], iconKey: "compass" },
    { id: "local-1", title: "A brand new service", description: "d", items: [], iconKey: "chart" },
  ];
  const merged = mergePublicServices(stored, publicList);
  assert.equal(merged.length, 3);
  assert.equal(merged.find((item) => item.id === 1).title, "Strategy, edited");
  assert.equal(merged.filter((item) => item.id === 1).length, 1);
});

test("services: bad stored values fall back to the public list", () => {
  assert.deepEqual(mergePublicServices(null, publicList), publicList);
  assert.deepEqual(mergePublicServices("nope", null), []);
});

test("services: a new id is a usable string", () => {
  const id = newServiceId();
  assert.equal(typeof id, "string");
  assert.ok(id.length > 0);
});
