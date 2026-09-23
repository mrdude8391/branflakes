import Markdown from "markdown-to-jsx/react";
import SyntaxHighlightedCode from "../../components/SyntaxHighlightedCode";
import "github-markdown-css/github-markdown.css";
import { getJournalPosts } from "../../lib/journal.ts";

const Journal = () => {
  const journals = getJournalPosts();
  return (
    <section className="dashboard-card flex flex-col gap-12 ">
      <ul className="journals markdown-body">
        {journals.map((journal) => (
          <li key={journal.id} className="journal">
            <h1>{journal.title}</h1>
            <h3>{journal.description}</h3>
            <p>{journal.date}</p>
            <Markdown options={{ overrides: { code: SyntaxHighlightedCode } }}>
              {journal.content}
            </Markdown>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Journal;
