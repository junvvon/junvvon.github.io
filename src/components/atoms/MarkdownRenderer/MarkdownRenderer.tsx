/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownStyle, Pre } from './MarkdownRenderer.style';
import READMEMarkdown from '@contents/posts/README.md';

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
          code: (props) => (
            <Pre>
              <code {...props} />
            </Pre>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </MarkdownStyle>
  );
};

export default MarkdownRenderer;
