import Link from "next/link";
import type { ReactNode } from "react";

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** "[metin](/yol)" biçimindeki linkleri <Link>'e çevirir. */
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;

  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const [, label, href] = match;
    const isInternal = href.startsWith("/");
    nodes.push(
      isInternal ? (
        <Link
          key={`${href}-${match.index}`}
          href={href}
          className="font-medium text-primary-700 underline underline-offset-2 hover:text-primary-900"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`${href}-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary-700 underline underline-offset-2 hover:text-primary-900"
        >
          {label}
        </a>
      )
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

/** Blog içeriği için basit markdown: ## başlık, - liste, paragraf, [link](/yol) */
export default function RichText({ content }: { content: string }) {
  const blocks = content.split("\n\n").map((b) => b.trim()).filter(Boolean);

  return (
    <div className="max-w-none">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-4">
              {block.slice(3)}
            </h2>
          );
        }
        const lines = block.split("\n");
        if (lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i} className="list-disc pl-6 mb-4 space-y-1.5 text-gray-600 leading-relaxed">
              {lines.map((l, j) => (
                <li key={j}>{renderInline(l.trim().slice(2))}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-gray-600 leading-relaxed mb-4">
            {renderInline(block)}
          </p>
        );
      })}
    </div>
  );
}
