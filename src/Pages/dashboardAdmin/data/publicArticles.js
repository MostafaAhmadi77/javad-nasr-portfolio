// The dashboard article is built from the exact published Insights data,
// so the dashboard shows the complete article: excerpt, hero image,
// every section, the system image after Three Forces, and the source lines.
import insightsData from "../../Insights/data/insightsData";
import {
  performanceAgendaHero,
  performanceAgendaSystem,
} from "../../Insights/data/insightsImages";

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#x27;");
}

function buildContent(article) {
  let html = `<p>${escapeHtml(article.excerpt)}</p>`;
  html += `<img src="${performanceAgendaHero}" alt="Leadership team reviewing an organizational system" />`;
  article.sections.forEach((section, index) => {
    if (section.heading) {
      html += `<h2>${escapeHtml(section.heading)}</h2>`;
    }
    section.paragraphs.forEach((paragraph) => {
      html += `<p>${escapeHtml(paragraph)}</p>`;
    });
    if (index === 1) {
      html += `<img src="${performanceAgendaSystem}" alt="Organization as a connected system of people, processes and AI" />`;
    }
  });
  html += `<p>Source: ${escapeHtml(article.source)}</p>`;
  html += `<p>Perspective &amp; analysis: ${escapeHtml(article.perspective)}</p>`;
  return html;
}

const article = insightsData[0];

export const publicArticles = [
  {
    id: article.id,
    title: article.title,
    content: buildContent(article),
    status: "published",
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
];
