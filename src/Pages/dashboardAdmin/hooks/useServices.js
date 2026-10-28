import { useEffect, useState } from "react";
import {
  loadServices,
  markPublicServiceDeleted,
  mergePublicServices,
  newServiceId,
  saveServices,
} from "../utils/servicesStorage";
import { publicServices } from "../data/publicServices";

export function useServices() {
  const [services, setServices] = useState([]);
  const [editingService, setEditingService] = useState(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    setServices(mergePublicServices(loadServices(), publicServices));
  }, []);

  // Only stored copies are persisted: untouched public services are
  // rebuilt from the project data on every load.
  function persist(next) {
    setServices(next);
    saveServices(next.filter((item) => !item.isPublic));
  }

  function handleSave(service) {
    if (isCreating) {
      persist([
        ...services,
        { ...service, id: newServiceId(), isPublic: false },
      ]);
    } else {
      persist(
        services.map((item) =>
          item.id === service.id ? { ...service, isPublic: false } : item,
        ),
      );
    }
    setEditingService(null);
    setIsCreating(false);
  }

  function handleDelete(service) {
    if (service.isPublic) markPublicServiceDeleted(service.id);
    persist(services.filter((item) => item.id !== service.id));
  }

  function beginCreate() {
    setEditingService({ title: "", description: "", items: [], iconKey: "compass" });
    setIsCreating(true);
  }

  function beginEdit(service) {
    setEditingService(service);
    setIsCreating(false);
  }

  function cancelForm() {
    setEditingService(null);
    setIsCreating(false);
  }

  return {
    services,
    editingService,
    isCreating,
    handleSave,
    handleDelete,
    beginCreate,
    beginEdit,
    cancelForm,
  };
}
