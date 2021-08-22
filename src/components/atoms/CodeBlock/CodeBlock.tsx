import React from 'react';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeBlockProps } from './CodeBlock.type';
import { InlineCode, StyledSyntaxHighlighter } from './CodeBlock.style';

const CodeBlock: React.FC<CodeBlockProps> = ({
  inline,
  className,
  children,
  ...rest
}) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <StyledSyntaxHighlighter
      style={prism}
      language={match[1]}
      showLineNumbers
      {...rest}
    >
      {String(children).replace(/\n$/, '')}
    </StyledSyntaxHighlighter>
  ) : (
    <InlineCode className={className} {...rest}>
      {children}
    </InlineCode>
  );
};

export default CodeBlock;
