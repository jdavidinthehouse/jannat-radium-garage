"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap  text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D8A441] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] disabled:pointer-events-none disabled:opacity-50 overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#D8A441] to-[#F59E0B] text-black font-semibold shadow-[0_4px_20px_rgba(216,164,65,0.2)] hover:shadow-[0_8px_40px_rgba(216,164,65,0.4)] hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border border-white/15 text-white bg-transparent hover:bg-white/5 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
        ghost:
          "text-white/50 hover:text-white hover:bg-white/5",
        gold: "bg-gradient-to-r from-[#D8A441] via-[#F59E0B] to-[#D8A441] text-black font-semibold shadow-[0_4px_25px_rgba(216,164,65,0.25)] hover:shadow-[0_8px_45px_rgba(216,164,65,0.45)] hover:scale-[1.02] active:scale-[0.98] bg-[length:200%_100%] hover:bg-right-top",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-5 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement | HTMLAnchorElement>(null)
    const combinedRef = (node: HTMLButtonElement) => {
      (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node
      if (typeof ref === "function") ref(node)
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node
    }

    const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
      const btn = buttonRef.current
      if (!btn) return
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`
    }, [])

    const handleMouseLeave = React.useCallback(() => {
      const btn = buttonRef.current
      if (!btn) return
      btn.style.transform = "translate(0, 0)"
    }, [])

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        onMouseMove={variant === "gold" || variant === "default" ? handleMouseMove : undefined}
        onMouseLeave={variant === "gold" || variant === "default" ? handleMouseLeave : undefined}
        ref={combinedRef}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {(variant === "gold" || variant === "default") && (
          <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[#D8A441] via-[#F59E0B] to-[#D8A441] bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
