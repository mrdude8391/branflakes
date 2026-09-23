import matter from "gray-matter";

export function getJournalPosts() {
  const journalGlobs = import.meta.glob("../../src/posts/journal/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  });
  const journals = Object.entries(journalGlobs).map(([path, data]) => {
    const matterResult = matter(data);
    return {
      id: path.split("/").pop()?.replace(".md", ""),
      content: matterResult.content,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      tags: matterResult.data.tags,
    };
  });
  return journals.reverse();
}
