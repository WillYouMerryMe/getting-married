import { flex } from '@merried/utils';
import styled from 'styled-components';
import { Text } from '@merried/ui';
import { color } from '@merried/design-system';
import { usePathname, useRouter } from 'next/navigation';
import { ComponentType } from 'react';

interface FooterItemProps {
  route: string;
  icon: ComponentType<{ width: number; height: number; strokeColor: string }>;
  name: string;
}

const FooterItem = ({ route, icon: Icon, name }: FooterItemProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === route;

  const handleMovePage = () => router.push(route);

  return (
    <StyledFooterItem onClick={handleMovePage}>
      <Icon width={28} height={28} strokeColor={isActive ? color.primary : color.G60} />
      <Text fontType="Button4" color={isActive ? color.primary : color.G60}>
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
