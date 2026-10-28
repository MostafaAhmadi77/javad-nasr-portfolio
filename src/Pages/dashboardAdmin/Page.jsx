import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";
import ArticleEditor from "./components/ArticleEditor";
import ArticlesList from "./components/ArticlesList";
import Login from "./components/Login";
import ChangeCredentials from "./components/ChangeCredentials";
import Leads from "./components/Leads";
import Todos from "./components/Todos";
import { isAdminLoggedIn, setAdminLoggedIn } from "./utils/adminAuth";
import { useArticles } from "./hooks/useArticles";
import "./dashboardAdmin.css";

function DashboardAdmin() {
  const [loggedIn, setLoggedIn] = useState(() => isAdminLoggedIn());
  const [activeTab, setActiveTab] = useState("overview");
  const {
    articles,
    editingArticle,
    isCreating,
    viewingArticle,
    handleSave,
    handleDelete,
    handleToggleStatus,
    beginCreate,
    beginEdit,
    beginView,
    cancelForm,
    closeViewing,
  } = useArticles();

  // Saving returns to the articles list, as before the refactor.
  function handleSaveAndShow(data) {
    handleSave(data);
    setActiveTab("articles");
  }

  if (!loggedIn) {
    return <Login onLoggedIn={() => setLoggedIn(true)} />;
  }

  function handleLogout() {
    setAdminLoggedIn(false);
    setLoggedIn(false);
  }

  return (
    <div className="ss:pt-24 pt-24 pb-10 bg-black">
      <div className="grid ss:grid-cols-1 lg:grid-cols-[240px_1fr] gap-4 ss:mx-4 mx-4">
        <Sidebar
          activeTab={activeTab}
          onSelect={setActiveTab}
          onLogout={handleLogout}
        />
        <main className="min-w-0">
          {activeTab === "overview" && <Overview articles={articles} />}

          {activeTab === "articles" && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap justify-between items-center gap-3 border border-primary-orange rounded-2xl p-4 bg-black">
                <div>
                  <h1 className="text-white ss:text-xl sm:text-2xl font-bold">Articles</h1>
                  <p className="text-white/50 text-sm">
                    Articles are saved in this browser and shown in the
                    dashboard only, for now.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={beginCreate}
                  className="bg-primary-orange text-white px-4 py-2 rounded-xl"
                >
                  New article
                </button>
              </div>

              {(isCreating || editingArticle) && (
                <ArticleEditor
                  article={editingArticle}
                  onSave={handleSaveAndShow}
                  onCancel={cancelForm}
                />
              )}

              {viewingArticle && (
                <div className="border border-white/15 rounded-2xl ss:p-4 sm:p-6 bg-black">
                  <div className="flex flex-wrap justify-between gap-3 mb-4">
                    <button
                      type="button"
                      onClick={closeViewing}
                      className="border border-white/30 text-white px-4 py-2 rounded-xl text-sm"
                    >
                      ← Back to articles
                    </button>
                    <button
                      type="button"
                      onClick={() => beginEdit(viewingArticle)}
                      className="border border-primary-orange text-primary-orange px-4 py-2 rounded-xl text-sm"
                    >
                      Edit
                    </button>
                  </div>
                  <span className="text-primary-orange text-sm border border-primary-orange rounded-full px-3 py-1">
                    {viewingArticle.status === "published" ? "Published" : "Draft"}
                  </span>
                  <h2 className="text-white ss:text-2xl sm:text-3xl font-bold mt-4">
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
                  onEdit={beginEdit}
                  onDelete={handleDelete}
                  onToggleStatus={handleToggleStatus}
                  onView={beginView}
                />
              )}
            </div>
          )}

          {activeTab === "settings" && <ChangeCredentials />}

          {activeTab === "leads" && <Leads />}

          {activeTab === "todos" && <Todos />}

          {(activeTab === "caseStudies" || activeTab === "services") && (
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
