import { flex } from '@merried/utils';
import styled from 'styled-components';
import { Text } from '@merried/ui';
import { color } from '@merried/design-system';
import { useRouter } from 'next/navigation';
import { ComponentType } from 'react';

interface FooterItemProps {
  route: string;
  icon: ComponentType<{ width: number; height: number; strokeColor: string }>;
  name: string;
  isActive?: boolean;
}

const FooterItem = ({ route, icon: Icon, name, isActive }: FooterItemProps) => {
  const router = useRouter();
  const strokeColor = isActive ? color.primary : color.G60;

  return (
    <StyledFooterItem onClick={() => router.push(route)}>
      <Icon width={28} height={28} strokeColor={strokeColor} />
      <Text fontType="Button4" color={strokeColor}>
        {name}
      </Text>
    </StyledFooterItem>
  );
};

export default FooterItem;

const StyledFooterItem = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  height: 100%;
  cursor: pointer;
`;
