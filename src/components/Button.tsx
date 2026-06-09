import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: ButtonVariant
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-tp-green text-tp-bg hover:opacity-90',
  secondary: 'border border-tp-border-bright text-tp-green-light hover:bg-tp-border-dim',
  ghost: 'text-tp-green-dim hover:text-tp-green',
}

export default function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={`${variants[variant]} px-6 py-2.5 rounded-xl text-sm font-semibold font-syne active:scale-95 transition-all ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
