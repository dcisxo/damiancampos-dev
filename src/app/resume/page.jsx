export const metadata = {
  title: "Resume | Damian Campos",
};

export default function ResumePage() {
  return (
    <main className="bg-black text-white min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Resume</h2>
        <div className="flex justify-center mb-6">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition font-medium"
          >
            Download Resume (PDF)
          </a>
        </div>
        <div className="rounded-xl overflow-hidden border border-gray-800">
          <iframe
            src="/resume.pdf"
            className="w-full"
            style={{ height: "calc(100vh - 200px)", minHeight: "800px" }}
            title="Damian Campos Resume"
          />
        </div>
      </div>
    </main>
  );
}
