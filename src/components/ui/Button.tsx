import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20",
    secondary:
      "border border-[#2a2a2a] text-[#f5f5f5] hover:border-blue-500/50 hover:bg-[#1a1a1a]",
    ghost: "text-[#a3a3a3] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
