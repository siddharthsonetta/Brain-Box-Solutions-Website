"use client";

import Link from "next/link";
import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900",
    outline:
      "border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700 hover:border-slate-300",
    ghost: "bg-transparent hover:bg-slate-50 text-slate-600 hover:text-slate-900",
  };

  const sizes = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.015, y: -0.5 },
    whileTap: { scale: 0.985 },
    transition: { type: "spring" as const, stiffness: 400, damping: 20 },
  };

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a className={combinedClassName} {...motionProps}>
          {children}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button className={combinedClassName} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
