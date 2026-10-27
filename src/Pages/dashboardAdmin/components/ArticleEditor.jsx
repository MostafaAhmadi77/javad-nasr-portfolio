import { useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ indent: "-1" }, { indent: "+1" }],
    ["blockquote", "code-block"],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "list",
  "align",
  "indent",
  "blockquote",
  "code-block",
  "link",
  "image",
];

function ArticleEditor({ article, onSave, onCancel }) {
  const [title, setTitle] = useState(article ? article.title : "");
  const [content, setContent] = useState(article ? article.content : "");
  const quillRef = useRef(null);
  const fileRef = useRef(null);

  function insertImageFromFile(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const editor = quillRef.current ? quillRef.current.getEditor() : null;
      if (!editor) return;
      const range = editor.getSelection() || { index: editor.getLength(), length: 0 };
      editor.insertEmbed(range.index, "image", reader.result);
      editor.setSelection(range.index + 1);
    };
    reader.readAsDataURL(file);
  }

  function handleSave(status) {
    if (!title.trim()) return;
    onSave({
      id: article ? article.id : undefined,
      title: title.trim(),
      content,
      status,
    });
  }

  return (
    <div className="border border-primary-orange rounded-2xl p-4 bg-black">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Article title"
        className="w-full bg-black text-white border border-white/20 rounded-xl px-4 py-3 mb-4 outline-none focus:border-primary-orange"
      />
      <div className="dashboard-editor">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          placeholder="Write your article here..."
        />
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => insertImageFromFile(event.target.files[0])}
      />
      <div className="flex flex-wrap gap-3 mt-4">
        <button
          type="button"
          onClick={() => fileRef.current && fileRef.current.click()}
          className="border border-primary-orange text-primary-orange px-4 py-2 rounded-xl hover:bg-primary-orange hover:text-white transition"
        >
          Upload image
        </button>
        <button
          type="button"
          onClick={() => handleSave("draft")}
          className="border border-white/30 text-white px-4 py-2 rounded-xl hover:border-white transition"
        >
          Save draft
        </button>
        <button
          type="button"
          onClick={() => handleSave("published")}
          className="bg-primary-orange text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
        >
          Publish in dashboard
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="text-white/70 px-4 py-2 rounded-xl hover:text-white transition"
        >
          Cancel
        </button>
      </div>
      <p className="text-white/50 text-sm mt-3">
        Published articles stay in the Articles section for now. No public
        article page has been created yet.
      </p>
    </div>
  );
}

export default ArticleEditor;
