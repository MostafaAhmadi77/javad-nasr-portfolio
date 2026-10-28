import test from "node:test";
import assert from "node:assert/strict";

import {
  publishedLocalArticles,
  findInsightArticle,
  firstImageSrc,
} from "../src/Pages/Insights/articleLookup.js";

const publicArticle = {
  id: "performance-agenda-2026",
  title: "The New Performance Agenda",
  status: "published",
  content: "<p>Public copy saved in the dashboard</p>",
};

test("insights: only published local articles appear, and public copies are not duplicated", () => {
  const stored = [
    { id: "local-1", title: "A new article", status: "published", content: "<p>Hello</p>" },
    { id: "local-2", title: "A draft", status: "draft", content: "<p>Draft</p>" },
    publicArticle,
  ];
  assert.deepEqual(
    publishedLocalArticles(stored).map((item) => item.id),
    ["local-1"]
  );
  assert.deepEqual(publishedLocalArticles(null), []);
});

test("insights: a public article wins over a stored copy with the same id", () => {
  const found = findInsightArticle("performance-agenda-2026", [publicArticle]);
  assert.equal(found.kind, "public");
  assert.equal(found.article.title, "The New Performance Agenda: What Organizations Need to Rethink in 2026");
});

test("insights: a local published article is found by id, unknown ids are not", () => {
  const local = { id: "local-1", title: "A new article", status: "published", content: "<p>Hello</p>" };
  assert.equal(findInsightArticle("local-1", [local]).kind, "local");
  assert.equal(findInsightArticle("local-2", [local]), null);
  assert.equal(findInsightArticle("nope", []), null);
});

test("insights: first image is taken from article html, or null when there is none", () => {
  assert.equal(
    firstImageSrc('<p>Text</p><img src="https://example.com/a.jpg" />'),
    "https://example.com/a.jpg"
  );
  assert.equal(firstImageSrc("<p>No image here</p>"), null);
  assert.equal(firstImageSrc(""), null);
});
