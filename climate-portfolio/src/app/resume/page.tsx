export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white p-8 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6 tracking-tight">Full Resume</h1>

      {/* Download Button */}
      <a
        href="/resume.pdf"
        download
        className="
          mb-6 px-5 py-2.5 
          rounded-md 
          border border-slate-700/70 
          text-text-secondary
          bg-slate-900/30 
          hover:bg-slate-900/60
          hover:text-accent
          hover-glow
          transition-all 
          duration-300
          text-sm
        "
      >
        Download PDF
      </a>

      {/* Embedded PDF */}
      <div className="w-full max-w-4xl h-[85vh] border border-slate-700/50 rounded-lg overflow-hidden shadow-xl">
        <embed src="/resume.pdf" type="application/pdf" className="w-full h-full" />
      </div>
    </div>
  );
}
