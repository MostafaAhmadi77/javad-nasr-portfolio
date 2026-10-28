import { useEffect, useState } from "react";
import {
  loadCaseStudies,
  markPublicCaseDeleted,
  mergePublicCaseStudies,
  newCaseId,
  saveCaseStudies,
} from "../utils/caseStudiesStorage";
import { publicCaseStudies } from "../data/publicCaseStudies";

export function useCaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [editingCase, setEditingCase] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    setCaseStudies(mergePublicCaseStudies(loadCaseStudies(), publicCaseStudies));
  }, []);

  // Only stored copies are persisted: untouched public cases are
  // rebuilt from the project data on every load.
  function persist(next) {
    setCaseStudies(next);
    saveCaseStudies(next.filter((item) => !item.isPublic));
  }

  function handleSave(caseStudy) {
    if (isCreating) {
      persist([
        ...caseStudies,
        { ...caseStudy, id: newCaseId(), isPublic: false },
      ]);
    } else {
      persist(
        caseStudies.map((item) =>
          item.id === caseStudy.id
            ? { ...caseStudy, isPublic: false }
            : item,
        ),
      );
    }
    setEditingCase(null);
    setIsCreating(false);
  }

  function handleDelete(caseStudy) {
    if (caseStudy.isPublic) markPublicCaseDeleted(caseStudy.id);
    persist(caseStudies.filter((item) => item.id !== caseStudy.id));
  }

  function beginCreate() {
    setEditingCase({
      category: "",
      title: "",
      description: "",
      industry: "",
      region: "",
      stats: [
        { num: "", label: "" },
        { num: "", label: "" },
        { num: "", label: "" },
      ],
      imgKey: null,
      img: null,
    });
    setIsCreating(true);
  }

  function beginEdit(caseStudy) {
    setEditingCase(caseStudy);
    setIsCreating(false);
  }

  function cancelForm() {
    setEditingCase(null);
    setIsCreating(false);
  }

  return {
    caseStudies,
    editingCase,
    isCreating,
    handleSave,
    handleDelete,
    beginCreate,
    beginEdit,
    cancelForm,
  };
}
