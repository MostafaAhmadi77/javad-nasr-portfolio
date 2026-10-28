import { Link, useParams } from "react-router";
import NotFound from "../../Components/404/NotFound";
import { loadArticles } from "../dashboardAdmin/utils/articlesStorage";
import { findInsightArticle } from "./articleLookup";
import {
  performanceAgendaHero,
  performanceAgendaSystem,
} from "./data/insightsImages";
import "../dashboardAdmin/dashboardAdmin.css";

function Detail() {
  const { id } = useParams();
  let stored = [];
  try {
    stored = loadArticles();
  } catch {
    stored = [];
  }
  const found = findInsightArticle(id, stored);
  if (!found) return <NotFound />;

  const back = (
    <Link
      to="/insights"
      className="border border-white/30 px-4 py-2 rounded-xl text-sm inline-block mt-12"
    >
      ← Back to insights
    </Link>
  );

  if (found.kind === "local") {
    const article = found.article;
    return (
      <div className="bg-black text-white ss:px-4 sm:px-6 px-4 py-10">
        <div className="max-w-4xl mx-auto">
          {back}
          <span className="block text-primary-orange text-sm mt-8 tracking-widest">
            PUBLISHED
          </span>
          <h1 className="font-family-CormorantGaramondBold ss:text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-tight">
            {article.title}
          </h1>
          <p className="text-white/40 text-sm mt-4">
            Updated: {article.updatedAt ? new Date(article.updatedAt).toLocaleDateString() : ""}
          </p>
          <div
            className="text-white/80 mt-8 dashboard-article-content"
            dangerouslySetInnerHTML={{ __html: article.content || "" }}
          />
          <div className="mt-8">{back}</div>
        </div>
      </div>
    );
  }

  const article = found.article;
  return (
    <div className="bg-black text-white ss:px-4 sm:px-6 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {back}
        <span className="block text-primary-orange text-sm mt-8 tracking-widest">
          {article.category.toUpperCase()}
        </span>
        <h1 className="font-family-CormorantGaramondBold ss:text-2xl sm:text-3xl md:text-5xl font-bold mt-3 leading-tight">
          {article.title}
        </h1>
        <p className="text-white/60 mt-4">
          {article.author} • {article.date} • {article.readTime}
        </p>
        <p className="text-white/70 ss:text-base sm:text-lg mt-4">{article.excerpt}</p>
        <img
          src={performanceAgendaHero}
          alt="Leadership team reviewing an organizational system"
          className="w-full rounded-2xl mt-8 border border-white/10"
        />
        <div className="mt-8 flex flex-col gap-8">
          {article.sections.map((section, index) => (
            <section key={index}>
              {section.heading && (
                <h2 className="font-family-CormorantGaramondBold text-2xl font-bold text-primary-orange">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="text-white/80 leading-8 mt-4">
                  {paragraph}
                </p>
              ))}
              {index === 1 && (
                <img
                  src={performanceAgendaSystem}
                  alt="Organization as a connected system of people, processes and AI"
                  loading="lazy"
                  className="w-full rounded-2xl mt-8 border border-white/10"
                />
              )}
            </section>
          ))}
        </div>
        <p className="text-white/50 text-sm mt-10 border-t border-white/15 pt-6">
          Source: {article.source}
          <br />
          Perspective &amp; analysis: {article.perspective}
        </p>
        <div className="mt-8">{back}</div>
      </div>
    </div>
  );
}

export default Detail;
