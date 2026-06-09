export function IconBox({ icon, className = '' }: { icon: string; className?: string }) {
  return (
    <div className={`w-9 h-9 rounded-xl bg-tp-border-dim border border-tp-border-bright flex items-center justify-center text-lg text-tp-green ${className}`}>
      <i className={`ti ${icon}`} />
    </div>
  )
}

export function StatusDot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-tp-green animate-pulse-glow" />
}

export function LoadingSpinner({ message = 'Carregando...' }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-10 h-10 rounded-full border-2 border-tp-border border-t-tp-green animate-spin" />
      <span className="text-[13px] text-tp-green-dim">{message}</span>
    </div>
  )
}

export function ErrorState({ message = 'Erro ao carregar dados.', onRetry }: { message?: string; onRetry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
      <div className="w-12 h-12 rounded-2xl bg-tp-red-bg border border-tp-red-border flex items-center justify-center">
        <i className="ti ti-alert-circle text-tp-red text-xl" />
      </div>
      <div className="text-[13px] text-tp-text-muted">{message}</div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-1 text-[12px] text-tp-green-dim hover:text-tp-green transition-colors flex items-center gap-1"
        >
          <i className="ti ti-refresh text-[13px]" />
          Tentar novamente
        </button>
      )}
    </div>
  )
}
