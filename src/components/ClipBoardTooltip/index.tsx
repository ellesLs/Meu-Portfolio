import { useState } from 'react';

import * as S from './ClipBoardTooltip.styles';

type ClipBoardProps = {
  children: React.ReactNode;
};

export function ClipBoardTooltip({ children }: ClipBoardProps) {
  const [text, setText] = useState('Click para copiar o Email!');
  const [IsCopied, setIsCopied] = useState(false);
  const email = 'elles.2212@gmail.com';

  const handleClipBoard = () => {
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
      onClick={handleClipBoard}
      onKeyDown={(e) => e.key === 'Enter' && handleClipBoard()}
      onMouseLeave={showTooltipText}
      onBlur={showTooltipText}
    >
      {children}
      <i>{text}</i>
    </S.ContainerClipBoard>
  );
}
