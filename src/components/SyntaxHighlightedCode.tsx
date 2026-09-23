import React from "react";
import "github-markdown-css/github-markdown.css";
// Using ES6 import syntax
import hljs from "highlight.js";

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

export default SyntaxHighlightedCode;
