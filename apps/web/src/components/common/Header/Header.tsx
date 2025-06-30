import { styled } from 'styled-components';
import { flex } from '@merried/utils';
import { color } from '@merried/design-system';
import Image from 'next/image';
import { DesktopButton } from '@merried/ui';

const Header = () => {
  return (
    <StyledHeader>
      <Image
        src="/LogoFull.svg"
        style={{ cursor: 'pointer' }}
        width={64}
        height={64}
        alt="logo"
      />
      <DesktopButton styleType="SECOND" size="SMALL">
        로그인
      </DesktopButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  padding: 8px 120px;
  border-bottom: 1px solid ${color.G30};
  background: ${color.G0};
  z-index: 1000;
`;
