import { color } from '@merried/design-system';
import { IconError, IconSuccess } from '@merried/icon';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled, { CSSProperties } from 'styled-components';

interface Props {
  label: string;
  width?: CSSProperties['width'];
  type: 'ERROR' | 'SUCCESS';
}

const Toast = ({ label, width, type }: Props) => {
  return (
    <StyledToast $type={type} style={{ width }}>
      {type === 'ERROR' ? (
        <IconError width={14} height={14} />
      ) : (
        <IconSuccess width={14} height={14} />
      )}
      <Text fontType="Button3" color={color.G0}>
        {label}
      </Text>
    </StyledToast>
  );
};

export default Toast;

const StyledToast = styled.div<{ $type: 'ERROR' | 'SUCCESS' }>`
  ${flex({ alignItems: 'center' })}
  position: fixed;
  gap: 10px;
  bottom: 88px;
  background-color: ${(p) => (p.$type === 'ERROR' ? color.red : '#6DDC5C')};
  width: auto;
  height: 50px;
  padding: 16px 14px;
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
