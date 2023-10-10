import { useState } from 'react';

import * as S from './TooltipWithClipBoard';

type TooltipWithClipBoardProps = {
  children: React.ReactNode;
};

export function TooltipWithClipBoard({ children }: TooltipWithClipBoardProps) {
  const [text, setText] = useState('Click para copiar o Email!');
  const [IsCopied, setIsCopied] = useState(false);
  const email = 'elles.2212@gmail.com';

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(email);
    setText(`Email Copiado!! ${email}`);
    setIsCopied(true);
  };

  const showTooltipText = () => {
    setText('Click para copiar o Email!');
    setIsCopied(false);
  };

  return (
    <S.ContainerClipBoard
      tabIndex={0}
      IsCopied={IsCopied}
      onClick={copyToClipBoard}
      onKeyDown={(e) => e.key === 'Enter' && copyToClipBoard()}
      onMouseLeave={showTooltipText}
      onBlur={showTooltipText}
    >
      {children}
      <i>{text}</i>
    </S.ContainerClipBoard>
  );
}
