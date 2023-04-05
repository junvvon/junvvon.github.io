import { dracula, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import useDarkMode from 'use-dark-mode';

import { CodeBlockProps } from './CodeBlock.type';
import { InlineCode, StyledSyntaxHighlighter } from './CodeBlock.style';

const CodeBlock = ({
  inline,
  className,
  children,
  ...rest
}: CodeBlockProps) => {
  const { value } = useDarkMode(false);
  const theme = value ? prism : dracula;
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <StyledSyntaxHighlighter
      language={match[1]}
      showLineNumbers
      style={theme}
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
