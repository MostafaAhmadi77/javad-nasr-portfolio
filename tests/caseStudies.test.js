import test from "node:test";
import assert from "node:assert/strict";

import {
  mergePublicCaseStudies,
  newCaseId,
} from "../src/Pages/dashboardAdmin/utils/caseStudiesStorage.js";

const publicList = [
  { id: "01", category: "STRATEGY", title: "Case One", description: "d", industry: "Manufacturing", region: "Middle East", stats: [{ num: "25%", label: "Growth" }], imgKey: "img3", img: null, isPublic: true },
];

test("cases: public cases appear when nothing is stored, with stats intact", () => {
  const merged = mergePublicCaseStudies([], publicList);
  assert.equal(merged.length, 1);
  assert.equal(merged[0].stats[0].num, "25%");
  assert.equal(merged[0].imgKey, "img3");
});

test("cases: a stored copy shadows the public case instead of duplicating it", () => {
  const stored = [
    { id: "01", category: "STRATEGY", title: "Case One, edited", description: "d", industry: "Manufacturing", region: "Middle East", stats: [], imgKey: null, img: "data:image/png;base64,abc" },
    { id: "local-1", category: "A NEW CATEGORY", title: "A brand new case", description: "d", industry: "X", region: "Y", stats: [], imgKey: null, img: null },
  ];
  const merged = mergePublicCaseStudies(stored, publicList);
  assert.equal(merged.length, 2);
  assert.equal(merged.find((item) => item.id === "01").title, "Case One, edited");
  assert.equal(merged.filter((item) => item.id === "01").length, 1);
});

test("cases: bad stored values fall back to the public list", () => {
  assert.deepEqual(mergePublicCaseStudies(null, publicList), publicList);
  assert.deepEqual(mergePublicCaseStudies(undefined, null), []);
});

test("cases: a new id is a usable string", () => {
  const id = newCaseId();
  assert.equal(typeof id, "string");
  assert.ok(id.length > 0);
});
