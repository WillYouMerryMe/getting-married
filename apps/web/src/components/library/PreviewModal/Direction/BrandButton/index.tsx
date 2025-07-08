import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import Image from 'next/image';
import styled from 'styled-components';

interface BrandButtonProps {
  onClick: () => void;
  src: string;
  name: string;
}

const BrandButton = ({ onClick, src, name }: BrandButtonProps) => {
  return (
    <StyledBrandButton onClick={onClick}>
      <Image width={20} height={20} src={src} alt="icon" />
      <Text fontType="Button2" color={color.G900}>
        {name}
      </Text>
    </StyledBrandButton>
  );
};

export default BrandButton;

const StyledBrandButton = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  height: 50px;
  background-color: #fafafa;
  border-radius: 8px;
  word-break: keep-all;
  gap: 8px;
`;
