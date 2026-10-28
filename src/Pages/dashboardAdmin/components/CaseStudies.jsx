import { useState } from "react";
import { useCaseStudies } from "../hooks/useCaseStudies";
import { caseImage } from "../data/publicCaseStudies";

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

function CaseForm({ initial, onSave, onCancel, categories }) {
  const [category, setCategory] = useState(initial.category || "");
  const [title, setTitle] = useState(initial.title || "");
  const [description, setDescription] = useState(initial.description || "");
  const [industry, setIndustry] = useState(initial.industry || "");
  const [region, setRegion] = useState(initial.region || "");
  const [stats, setStats] = useState(
    (initial.stats || []).length === 3
      ? initial.stats
      : [
          { num: "", label: "" },
          { num: "", label: "" },
          { num: "", label: "" },
        ],
  );
  const [img, setImg] = useState(initial.img || null);
  const [imgKey, setImgKey] = useState(initial.imgKey || null);
  const [imageName, setImageName] = useState("");

  function setStat(index, field, value) {
    setStats((current) =>
      current.map((stat, statIndex) =>
        statIndex === index ? { ...stat, [field]: value } : stat,
      ),
    );
  }

  async function onImageFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const dataUrl = await readFileAsDataUrl(file);
    if (dataUrl) {
      setImg(dataUrl);
      setImgKey(null);
      setImageName(file.name);
    }
  }

  function submit(event) {
    event.preventDefault();
    if (!title.trim()) return;
    onSave({
      ...initial,
      category: category.trim(),
      title: title.trim(),
      description: description.trim(),
      industry: industry.trim(),
      region: region.trim(),
      stats: stats.map((stat) => ({
        num: (stat.num || "").trim(),
        label: (stat.label || "").trim(),
      })),
      img,
      imgKey,
    });
  }

  const preview = caseImage({ img, imgKey });

  return (
    <form
      onSubmit={submit}
      className="border border-white/15 rounded-2xl p-4 bg-black flex flex-col gap-3"
    >
      <input
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        placeholder="Category (new categories are allowed)"
        list="case-categories"
        className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
      />
      <datalist id="case-categories">
        {categories.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Case title"
        className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
      />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Case description"
        rows={3}
        className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
      />
      <div className="grid ss:grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          placeholder="Industry"
          className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
        />
        <input
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          placeholder="Region"
          className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
        />
      </div>
      {stats.map((stat, index) => (
        <div key={index} className="grid ss:grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            value={stat.num}
            onChange={(event) => setStat(index, "num", event.target.value)}
            placeholder={`Stat ${index + 1} number (e.g. 25%)`}
            className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
          />
          <input
            value={stat.label}
            onChange={(event) => setStat(index, "label", event.target.value)}
            placeholder={`Stat ${index + 1} label`}
            className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
          />
        </div>
      ))}
      <label className="text-white/60 text-sm">
        Image (optional)
        <input
          type="file"
          accept="image/*"
          onChange={onImageFile}
          className="block mt-1 text-white text-sm"
        />
      </label>
      {imageName && <p className="text-white/50 text-sm">{imageName}</p>}
      {preview && (
        <img
          src={preview}
          alt=""
          className="w-full max-w-sm rounded-xl border border-white/10"
        />
      )}
      {preview && (
        <button
          type="button"
          onClick={() => {
            setImg(null);
            setImgKey(null);
            setImageName("");
          }}
          className="border border-white/30 text-white px-3 py-1 rounded-lg text-sm self-start"
        >
          Remove image
        </button>
      )}
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-primary-orange text-white px-4 py-2 rounded-xl"
        >
          Save case study
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

function CaseStudies() {
  const {
    caseStudies,
    editingCase,
    isCreating,
    handleSave,
    handleDelete,
    beginCreate,
    beginEdit,
    cancelForm,
  } = useCaseStudies();

  const categories = [
    ...new Set(caseStudies.map((item) => item.category).filter(Boolean)),
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-between items-center gap-3">
        <h2 className="text-white ss:text-xl sm:text-2xl font-bold">
          Case Studies
        </h2>
        {!editingCase && (
          <button
            type="button"
            onClick={beginCreate}
            className="bg-primary-orange text-white px-4 py-2 rounded-xl"
          >
            New case study
          </button>
        )}
      </div>

      {editingCase && (
        <CaseForm
          key={isCreating ? "new" : editingCase.id}
          initial={editingCase}
          onSave={handleSave}
          onCancel={cancelForm}
          categories={categories}
        />
      )}

      {caseStudies.length === 0 && !editingCase && (
        <p className="text-white/50">No case studies yet. Create the first one.</p>
      )}

      {caseStudies.map((item) => {
        const image = caseImage(item);
        return (
          <div
            key={item.id}
            className="border border-white/15 rounded-2xl overflow-hidden bg-black"
          >
            {image && (
              <img
                src={image}
                alt={item.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <div className="flex flex-wrap justify-between items-start gap-3">
                <div>
                  <span className="text-primary-orange text-xs tracking-widest">
                    {item.category}
                  </span>
                  {item.isPublic && (
                    <span className="text-primary-orange text-xs tracking-widest ml-2">
                      PUBLIC
                    </span>
                  )}
                  <h3 className="text-white font-bold mt-1">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">
                    {item.description}
                  </p>
                  <p className="text-white/40 text-sm mt-2">
                    {item.industry} • {item.region}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => beginEdit(item)}
                    className="border border-white/30 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (window.confirm(`Delete "${item.title}"?`)) {
                        handleDelete(item);
                      }
                    }}
                    className="border border-red-400/50 text-red-300 px-3 py-1 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              {item.stats && (
                <div className="flex flex-wrap gap-4 mt-3">
                  {item.stats.map((stat, index) => (
                    <span key={index} className="text-white/60 text-sm">
                      <strong className="text-white">{stat.num}</strong>{" "}
                      {stat.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CaseStudies;
