import { ROUTES } from '@/constants/common/constant';
import { color } from '@merried/design-system';
import { IconError, IconSuccess } from '@merried/icon';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

interface ToastProps {
  children: ReactNode;
  width?: CSSProperties['width'];
  type: 'ERROR' | 'SUCCESS';
}

const Toast = ({ children, width, type }: ToastProps) => {
  const [visible, setVisible] = useState(true);
  const pathname = usePathname();

  const bottom = pathname.startsWith(ROUTES.INVITATION) ? '80px' : '120px';

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <StyledToast $type={type} $bottom={bottom} style={{ width }}>
      {type === 'ERROR' ? (
        <IconError width={14} height={14} />
      ) : (
        <IconSuccess width={14} height={14} />
      )}
      <Text fontType="Button3" color={color.G0}>
        {children}
      </Text>
    </StyledToast>
  );
};

export default Toast;

const StyledToast = styled.div<{ $type: 'ERROR' | 'SUCCESS'; $bottom: string }>`
  ${flex({ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' })}
  position: fixed;
  gap: 10px;
  bottom: ${(p) => p.$bottom};
  background-color: ${(p) => (p.$type === 'ERROR' ? color.red : '#6DDC5C')};
  width: auto;
  height: 38px;
  padding: 12px 16px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  z-index: 1000;
  opacity: 0;
  animation: fadeInOut 3s ease forwards;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
    10% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    90% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, 20px);
    }
  }
`;
