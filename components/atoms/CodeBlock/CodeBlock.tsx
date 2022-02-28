import { dracula, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'hooks/useTheme';
import { CodeBlockProps } from './CodeBlock.type';
import { InlineCode, StyledSyntaxHighlighter } from './CodeBlock.style';

const CodeBlock = ({
  inline,
  className,
  children,
  ...rest
}: CodeBlockProps) => {
  const [themeMode, setThemeMode] = useTheme();
  const theme = themeMode === 'light' ? prism : dracula;
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
