import React from "react";
import Markdown from "markdown-to-jsx/react";
import markdownContent from "../../posts/journal/2026-09-22-first-journal-post.md?raw";
import "github-markdown-css/github-markdown.css";
// Using ES6 import syntax
import hljs from "highlight.js";

const Journal = () => {
  return (
    <section className="dashboard-card flex flex-col gap-8 markdown-body">
      <div className="flex flex-col gap-12">
        <div>
          <Markdown options={{ overrides: { code: SyntaxHighlightedCode } }}>
            {markdownContent}
          </Markdown>
        </div>
      </div>
    </section>
  );
};

const SyntaxHighlightedCode = (props: React.HTMLAttributes<HTMLElement>) => {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    if (ref.current && props.className?.includes("lang-") && hljs) {
      hljs.highlightElement(ref.current);

      // hljs won't reprocess the element unless this attribute is removed
      ref.current.removeAttribute("data-highlighted");
    }
  }, [props.className, props.children]);

  return <code {...props} ref={ref} />;
};

export default Journal;
