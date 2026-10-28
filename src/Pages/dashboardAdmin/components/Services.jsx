import { useState } from "react";
import { useServices } from "../hooks/useServices";
import { SERVICE_ICONS, SERVICE_ICON_OPTIONS } from "../data/publicServices";

function ServiceForm({ initial, onSave, onCancel }) {
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [itemsText, setItemsText] = useState((initial.items || []).join("\n"));
  const [iconKey, setIconKey] = useState(initial.iconKey || "compass");

  function submit(event) {
    event.preventDefault();
    if (!title.trim()) return;
    onSave({
      ...initial,
      title: title.trim(),
      description: description.trim(),
      items: itemsText.split("\n").map((line) => line.trim()).filter(Boolean),
      iconKey,
    });
  }

  return (
    <form
      onSubmit={submit}
      className="border border-white/15 rounded-2xl p-4 bg-black flex flex-col gap-3"
    >
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Service title"
        className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Service description"
        rows={3}
        className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
      />
      <textarea
        value={itemsText}
        onChange={(event) => setItemsText(event.target.value)}
        placeholder="Sub-services, one per line"
        rows={4}
        className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
      />
      <label className="text-white/60 text-sm">
        Icon
        <select
          value={iconKey}
          onChange={(event) => setIconKey(event.target.value)}
          className="block mt-1 bg-black border border-white/20 rounded-xl px-4 py-2 text-white w-full"
        >
          {SERVICE_ICON_OPTIONS.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-primary-orange text-white px-4 py-2 rounded-xl"
        >
          Save service
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-white/30 text-white px-4 py-2 rounded-xl"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function Services() {
  const {
    services,
    editingService,
    isCreating,
    handleSave,
    handleDelete,
    beginCreate,
    beginEdit,
    cancelForm,
  } = useServices();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <h2 className="text-white ss:text-xl sm:text-2xl font-bold">Services</h2>
        {!editingService && (
          <button
            type="button"
            onClick={beginCreate}
            className="bg-primary-orange text-white px-4 py-2 rounded-xl"
          >
            New service
          </button>
        )}
      </div>

      {editingService && (
        <ServiceForm
          key={isCreating ? "new" : editingService.id}
          initial={editingService}
          onSave={handleSave}
          onCancel={cancelForm}
        />
      )}

      {services.length === 0 && !editingService && (
        <p className="text-white/50">No services yet. Create the first one.</p>
      )}

      {services.map((service) => {
        const Icon = SERVICE_ICONS[service.iconKey] || SERVICE_ICONS.compass;
        return (
          <div
            key={service.id}
            className="border border-white/15 rounded-2xl p-4 bg-black"
          >
            <div className="flex flex-wrap justify-between items-start gap-3">
              <div className="flex items-start gap-3 min-w-0">
                <Icon size={24} className="text-primary-orange shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold">{service.title}</h3>
                  {service.isPublic && (
                    <span className="text-primary-orange text-xs tracking-widest">
                      PUBLIC
                    </span>
                  )}
                  <p className="text-white/60 text-sm mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => beginEdit(service)}
                  className="border border-white/30 text-white px-3 py-1 rounded-lg text-sm"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm(`Delete "${service.title}"?`)) {
                      handleDelete(service);
                    }
                  }}
                  className="border border-red-400/50 text-red-300 px-3 py-1 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
            {service.items && service.items.length > 0 && (
              <ul className="text-white/50 text-sm mt-3 flex flex-wrap gap-2">
                {service.items.map((item, index) => (
                  <li
                    key={index}
                    className="border border-white/15 rounded-full px-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Services;
