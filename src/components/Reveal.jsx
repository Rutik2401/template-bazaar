'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { cn } from '@/utils/cn'

/**
 * Scroll-triggered animation wrapper.
 * Renders children with a Tailwind animation when they scroll into view.
 * Hidden (opacity-0) until visible — no layout shift.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.animation - Tailwind animation class (default: 'animate-fade-up')
 * @param {number} props.delay - Stagger delay in ms
 * @param {string} props.className - Additional classes
 * @param {string} props.as - HTML tag to render (default: 'div')
 */
export default function Reveal({
  children,
  animation = 'animate-fade-up',
  delay = 0,
  className = '',
  as: Tag = 'div',
  ...props
}) {
  const { ref, visible } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={cn(
        visible ? animation : 'opacity-0',
        className,
      )}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
