import { stripHtml } from "../utils/articlesStorage";

function ArticlesList({ articles, onEdit, onDelete, onToggleStatus, onView }) {
  if (articles.length === 0) {
    return (
      <div className="border border-primary-orange rounded-2xl p-6 text-white/70">
        No articles yet. Use &quot;New article&quot; to write your first one.
        Articles are saved in this browser, in the dashboard only.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {articles.map((article) => (
        <article
          key={article.id}
          onClick={() => onView(article)}
          className="border border-white/15 rounded-2xl p-4 bg-black cursor-pointer hover:border-primary-orange transition"
        >
          <div className="flex flex-wrap justify-between gap-3">
            <h3 className="text-white text-xl font-bold hover:text-primary-orange transition">
              {article.title}
            </h3>
            <span className="text-primary-orange text-sm border border-primary-orange rounded-full px-3 py-1 h-fit">
              {article.status === "published" ? "Published" : "Draft"}
            </span>
          </div>
          <p className="text-white/60 text-sm mt-2">
            {stripHtml(article.content).slice(0, 180)}
            {stripHtml(article.content).length > 180 ? "..." : ""}
          </p>
          <p className="text-white/40 text-xs mt-2">
            Updated: {new Date(article.updatedAt).toLocaleString()}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onView(article);
              }}
              className="border border-white/30 text-white px-3 py-1 rounded-lg text-sm"
            >
              View
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onEdit(article);
              }}
              className="border border-primary-orange text-primary-orange px-3 py-1 rounded-lg text-sm"
            >
              Edit
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onToggleStatus(article);
              }}
              className="border border-white/30 text-white px-3 py-1 rounded-lg text-sm"
            >
              {article.status === "published" ? "Move to draft" : "Publish"}
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onDelete(article.id);
              }}
              className="text-red-400 px-3 py-1 rounded-lg text-sm"
            >
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ArticlesList;
