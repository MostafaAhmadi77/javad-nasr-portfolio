import { useEffect, useState } from "react";
import {
  loadArticles,
  saveArticles,
  mergePublicArticles,
  markPublicArticleDeleted,
  newArticleId,
} from "../utils/articlesStorage";

// All article state and actions for the dashboard, in one place. The page
// keeps only login/logout and tab navigation; the article logic lives here
// so it can be found, changed, and tested without touching the page layout.
// Behavior is unchanged from when these handlers lived in the page itself.
export function useArticles() {
  const [articles, setArticles] = useState([]);
  const [editingArticle, setEditingArticle] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [viewingArticle, setViewingArticle] = useState(null);

  useEffect(() => {
    setArticles(mergePublicArticles(loadArticles()));
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
  }

  function handleDelete(id) {
    markPublicArticleDeleted(id);
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

  function beginCreate() {
    setEditingArticle(null);
    setViewingArticle(null);
    setIsCreating(true);
  }

  function beginEdit(article) {
    setViewingArticle(null);
    setIsCreating(false);
    setEditingArticle(article);
  }

  function beginView(article) {
    setEditingArticle(null);
    setIsCreating(false);
    setViewingArticle(article);
  }

  function cancelForm() {
    setEditingArticle(null);
    setIsCreating(false);
  }

  function closeViewing() {
    setViewingArticle(null);
  }

  return {
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
  };
}
