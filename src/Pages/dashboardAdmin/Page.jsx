import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import ArticleEditor from "./components/ArticleEditor";
import ArticlesList from "./components/ArticlesList";
import {
  loadArticles,
  saveArticles,
  newArticleId,
} from "./utils/articlesStorage";
import "./dashboardAdmin.css";

function DashboardAdmin() {
  const [activeTab, setActiveTab] = useState("overview");
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [viewingArticle, setViewingArticle] = useState(null);

  useEffect(() => {
    setArticles(loadArticles());
  }, []);

  function persist(nextArticles) {
    setArticles(nextArticles);
    saveArticles(nextArticles);
  }

  function handleSave({ id, title, content, status }) {
    const now = new Date().toISOString();
    let nextArticles;
    if (id) {
      nextArticles = articles.map((item) =>
        item.id === id
          ? { ...item, title, content, status, updatedAt: now }
          : item
      );
    } else {
      nextArticles = [
        { id: newArticleId(), title, content, status, createdAt: now, updatedAt: now },
        ...articles,
      ];
    }
    persist(nextArticles);
    setEditingArticle(null);
    setIsCreating(false);
    setActiveTab("articles");
  }

  function handleDelete(id) {
    persist(articles.filter((item) => item.id !== id));
    if (viewingArticle && viewingArticle.id === id) setViewingArticle(null);
  }

  function handleToggleStatus(article) {
    persist(
      articles.map((item) =>
        item.id === article.id
          ? {
              ...item,
              status: item.status === "published" ? "draft" : "published",
              updatedAt: new Date().toISOString(),
            }
          : item
      )
    );
  }

  return (
    <div className="pb-5 bg-black">
      <div className="grid lg:grid-cols-[240px_1fr] gap-4 mr-4 ml-4">
        <Sidebar activeTab={activeTab} onSelect={setActiveTab} />
        <main className="min-w-0">
          {activeTab === "overview" && <Overview articles={articles} />}

          {activeTab === "articles" && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap justify-between items-center gap-3 border border-primary-orange rounded-2xl p-4 bg-black">
                <div>
                  <h1 className="text-white text-2xl font-bold">Articles</h1>
                  <p className="text-white/50 text-sm">
                    Articles are saved in this browser and shown in the
                    dashboard only, for now.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setEditingArticle(null);
                    setViewingArticle(null);
                    setIsCreating(true);
                  }}
                  className="bg-primary-orange text-white px-4 py-2 rounded-xl"
                >
                  New article
                </button>
              </div>

              {(isCreating || editingArticle) && (
                <ArticleEditor
                  article={editingArticle}
                  onSave={handleSave}
                  onCancel={() => {
                    setEditingArticle(null);
                    setIsCreating(false);
                  }}
                />
              )}

              {viewingArticle && (
                <div className="border border-white/15 rounded-2xl p-6 bg-black">
                  <div className="flex flex-wrap justify-between gap-3 mb-4">
                    <button
                      type="button"
                      onClick={() => setViewingArticle(null)}
                      className="border border-white/30 text-white px-4 py-2 rounded-xl text-sm"
                    >
                      ← Back to articles
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setViewingArticle(null);
                        setIsCreating(false);
                        setEditingArticle(viewingArticle);
                      }}
                      className="border border-primary-orange text-primary-orange px-4 py-2 rounded-xl text-sm"
                    >
                      Edit
                    </button>
                  </div>
                  <span className="text-primary-orange text-sm border border-primary-orange rounded-full px-3 py-1">
                    {viewingArticle.status === "published" ? "Published" : "Draft"}
                  </span>
                  <h2 className="text-white text-3xl font-bold mt-4">
                    {viewingArticle.title}
                  </h2>
                  <p className="text-white/40 text-xs mt-2">
                    Updated: {new Date(viewingArticle.updatedAt).toLocaleString()}
                  </p>
                  <div
                    className="text-white/80 mt-4 dashboard-article-content"
                    dangerouslySetInnerHTML={{ __html: viewingArticle.content }}
                  />
                </div>
              )}

              {!viewingArticle && (
                <ArticlesList
                  articles={articles}
                  onEdit={(article) => {
                    setViewingArticle(null);
                    setIsCreating(false);
                    setEditingArticle(article);
                  }}
                  onDelete={handleDelete}
                  onToggleStatus={handleToggleStatus}
                  onView={(article) => {
                    setEditingArticle(null);
                    setIsCreating(false);
                    setViewingArticle(article);
                  }}
                />
              )}
            </div>
          )}

          {(activeTab === "caseStudies" ||
            activeTab === "services" ||
            activeTab === "settings") && (
            <div className="border border-white/15 rounded-2xl p-6 bg-black text-white/70">
              This section is a placeholder in the dashboard layout. The
              Articles section is the working section in this version.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default DashboardAdmin;
