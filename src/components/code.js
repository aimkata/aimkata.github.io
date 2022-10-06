import { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneDark as dark,
  atomOneLight as light,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTheme } from '../hooks/useTheme';

light.hljs.padding = '16px';
light.hljs.borderRadius = '8px';

dark.hljs.padding = '16px';
dark.hljs.borderRadius = '8px';

export const FinalCode = ({ children, className }) => {
  const [language, setLanguage] = useState(undefined);
  const [isCopied, setIsCopied] = useState(false);
  const { isDark } = useTheme();

  const setCopied = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  useEffect(() => {
    if (className && className.startsWith('lang-')) {
      setLanguage(className.replace('lang-', ''));
    }
  }, [className]);

  return (
    <div className="code">
      <CopyToClipboard text={children}>
        <button hidden onClick={() => setCopied()}>
          {isCopied ? (
            <span title="Copied!">Paste</span>
          ) : (
            <span title="Copy to Clipboard">Copy</span>
          )}
        </button>
      </CopyToClipboard>
      <SyntaxHighlighter language={language} style={isDark ? dark : light}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export const Code = ({ children, ...props }) => {
  if ('type' in children && children['type'] === 'code') {
    return <FinalCode children={children.props.children} {...children.props} />;
  }

  return <FinalCode children={children} {...props} />;
};
