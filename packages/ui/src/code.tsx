import { type JSX } from 'react';

/**
 * Renders its children inside a <code> element with optional custom styling.
 *
 * @param children - The content to display within the code block.
 * @param className - Optional CSS class for custom styling.
 * @returns A JSX <code> element containing the provided children.
 */
export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <code className={className}>{children}</code>;
}
