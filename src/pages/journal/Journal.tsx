import Markdown from "markdown-to-jsx/react";
import markdownContent from "../../posts/journal/2026-09-22-first-journal-post.md?raw";
import SyntaxHighlightedCode from "../../components/SyntaxHighlightedCode";
import "github-markdown-css/github-markdown.css";
import matter from "gray-matter";

const Journal = () => {
  const matterResult = matter(markdownContent);
  const { content, data } = matterResult;
  const { title, date } = data;
  return (
    <section className="dashboard-card flex flex-col gap-12 ">
      <ul className="journals markdown-body">
        <li className="journal">
          <p>{title}</p>
          <p>{date}</p>
          <Markdown options={{ overrides: { code: SyntaxHighlightedCode } }}>
            {content}
          </Markdown>
        </li>
        <li className="journal">
          <Markdown options={{ overrides: { code: SyntaxHighlightedCode } }}>
            {markdownContent}
          </Markdown>
        </li>
      </ul>
    </section>
  );
};

export default Journal;
