import { type JSX } from 'react';

/**
 * Renders a styled card component as a clickable link with a title and content.
 *
 * The link opens in a new tab and automatically appends UTM tracking parameters to the provided {@link href}.
 *
 * @param title - The heading text displayed at the top of the card.
 * @param children - The content displayed below the title.
 * @param className - Optional CSS class for custom styling.
 * @param href - The destination URL for the card link.
 *
 * @returns A React element representing the card.
 */
export function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={className}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
