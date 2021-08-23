/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownStyle } from './MarkdownRenderer.style';
import READMEMarkdown from '@contents/posts/README.md';
import CodeBlock from '@components/atoms/CodeBlock';
import QuoteBlock from '@components/atoms/QuoteBlock';

const MarkdownRenderer: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(READMEMarkdown)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }, []);

  return (
    <MarkdownStyle>
      <ReactMarkdown
        plugins={[remarkGfm]}
        components={{
          code: (props) => <CodeBlock {...props} />,
          blockquote: (props) => <QuoteBlock {...props} />,
          em: ({ ...props }) => {
            if (
              props.children[0] &&
              typeof props.children[0] === 'string' &&
              props.children[0].startsWith('^')
            ) {
              console.log(props.children[0]);
              return (
                <sup>
                  {props.children[0].substring(1, props.children[0].length - 1)}
                </sup>
              );
            }
            if (
              props.children[0] &&
              typeof props.children[0] === 'string' &&
              props.children[0].startsWith('~')
            ) {
              return <sub>{props.children[0].substring(1)}</sub>;
            }
            return <i {...props} />;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </MarkdownStyle>
  );
};

export default MarkdownRenderer;
