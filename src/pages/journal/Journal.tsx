import Markdown from "markdown-to-jsx/react";
import markdownContent from "../../posts/journal/2026-09-22-first-journal-post.md?raw";
import SyntaxHighlightedCode from "../../components/SyntaxHighlightedCode";

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

export default Journal;
