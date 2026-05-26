import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, saveToken, isAuthenticated } from "../api/auth";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../api/projects";

const EMPTY_FORM = {
  title: "",
  description: "",
  problem: "",
  technology: "",
  imageUrl: "",
  githubUrl: "",
  demoUrl: "",
};

const Admin = () => {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(isAuthenticated());

  // Login form
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");

  // Projects state
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(false);

  // Edit / create form
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (authed) fetchProjects();
  }, [authed]);

  const fetchProjects = async () => {
    setLoadingProjects(true);
    try {
      const data = await getProjects();
      setProjects(data);
    } finally {
      setLoadingProjects(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const { token } = await login(creds);
      saveToken(token);
      setAuthed(true);
    } catch {
      setLoginError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setAuthed(false);
    navigate("/");
  };

  const openCreate = () => {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setFormError("");
    setShowForm(true);
  };

  const openEdit = (project) => {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      problem: project.problem || "",
      technology: project.technology.join(", "),
      imageUrl: project.imageUrl || "",
      githubUrl: project.githubUrl || "",
      demoUrl: project.demoUrl || "",
    });
    setFormError("");
    setShowForm(true);
  };

  const handleFormChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setFormError("");
    const payload = {
      ...form,
      technology: form.technology
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };
    try {
      if (editingId) {
        await updateProject(editingId, payload);
      } else {
        await createProject(payload);
      }
      setShowForm(false);
      fetchProjects();
    } catch {
      setFormError("Failed to save project. Check all fields.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    try {
      await deleteProject(id);
      fetchProjects();
    } catch {
      alert("Failed to delete project.");
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-center mb-8">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Username"
              value={creds.username}
              onChange={(e) =>
                setCreds((p) => ({ ...p, username: e.target.value }))
              }
              required
              autoComplete="username"
            />
            <input
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
              type="password"
              placeholder="Password"
              value={creds.password}
              onChange={(e) =>
                setCreds((p) => ({ ...p, password: e.target.value }))
              }
              required
              autoComplete="current-password"
            />
            {loginError && (
              <p className="text-red-400 text-sm text-center">{loginError}</p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin — Projects</h1>
        <div className="flex gap-3">
          <button
            onClick={openCreate}
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-sm font-medium transition"
          >
            + Add Project
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-gray-600 rounded-lg hover:border-white text-sm transition"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* Project Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 w-full max-w-lg max-h-screen overflow-y-auto">
            <h2 className="text-xl font-bold mb-6">
              {editingId ? "Edit Project" : "New Project"}
            </h2>
            <form onSubmit={handleSave} className="space-y-4">
              {[
                { name: "title", label: "Title", required: true },
                { name: "description", label: "Description", required: true },
                { name: "problem", label: "Problem it solves" },
                {
                  name: "technology",
                  label: "Technologies (comma-separated)",
                  required: true,
                },
                { name: "imageUrl", label: "Image URL" },
                { name: "githubUrl", label: "GitHub URL" },
                { name: "demoUrl", label: "Live Demo URL" },
              ].map(({ name, label, required }) => (
                <div key={name}>
                  <label className="block text-sm text-gray-400 mb-1">
                    {label}
                    {required && <span className="text-red-400"> *</span>}
                  </label>
                  {name === "description" || name === "problem" ? (
                    <textarea
                      name={name}
                      value={form[name]}
                      onChange={handleFormChange}
                      required={required}
                      rows={3}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  ) : (
                    <input
                      type="text"
                      name={name}
                      value={form[name]}
                      onChange={handleFormChange}
                      required={required}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                    />
                  )}
                </div>
              ))}
              {formError && <p className="text-red-400 text-sm">{formError}</p>}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 text-sm font-medium transition disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-2 border border-gray-600 rounded-lg hover:border-white text-sm transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Projects Table */}
      {loadingProjects ? (
        <p className="text-gray-400">Loading...</p>
      ) : projects.length === 0 ? (
        <p className="text-gray-500">
          No projects yet. Click "Add Project" to get started.
        </p>
      ) : (
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project._id}
              className="flex items-center justify-between bg-gray-900 border border-gray-800 rounded-xl px-6 py-4"
            >
              <div>
                <p className="font-semibold">{project.title}</p>
                <p className="text-sm text-gray-400 mt-1">
                  {project.technology.join(", ")}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => openEdit(project)}
                  className="px-3 py-1 text-sm border border-gray-600 rounded hover:border-white transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="px-3 py-1 text-sm border border-red-800 text-red-400 rounded hover:border-red-500 hover:text-red-300 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
