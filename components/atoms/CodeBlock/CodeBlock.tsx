import { CodeBlockProps } from "./CodeBlock.type";
import { InlineCode, StyledSyntaxHighlighter } from "./CodeBlock.style";

const CodeBlock = ({
  inline,
  className,
  children,
  ...rest
}: CodeBlockProps) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <StyledSyntaxHighlighter language={match[1]} showLineNumbers {...rest}>
      {String(children).replace(/\n$/, "")}
    </StyledSyntaxHighlighter>
  ) : (
    <InlineCode className={className} {...rest}>
      {children}
    </InlineCode>
  );
};

export default CodeBlock;
