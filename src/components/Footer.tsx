export default function Footer() {
  return (
    <footer className="bg-tp-surface border-t border-tp-border px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 mt-auto">
      <div className="font-syne font-bold text-sm text-tp-green">TerraPlan</div>
      <div className="flex gap-5">
        <a href="#" className="text-[12px] text-tp-green-muted hover:text-tp-green-dim transition-colors">GitHub</a>
        <a href="#" className="text-[12px] text-tp-green-muted hover:text-tp-green-dim transition-colors">Vídeo</a>
        <a href="#" className="text-[12px] text-tp-green-muted hover:text-tp-green-dim transition-colors">Vercel</a>
      </div>
      <div className="text-[11px] text-tp-green-muted">FIAP · Global Solution 2026</div>
    </footer>
  )
}
