import { color } from '@merried/design-system';
import { IconArrow } from '@merried/icon';
import { Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { ComponentType } from 'react';
import styled from 'styled-components';

interface ListItemProps {
  icon: ComponentType<{ width: number; height: number }>;
  title: string;
}

const ListItem = ({ icon: Icon, title }: ListItemProps) => {
  const handleItemClick = () => {
    alert('추후 개발 예정입니다.');
  };

  return (
    <StyledListItem onClick={handleItemClick}>
      <Row gap={8} alignItems="center">
        <Icon width={22} height={22} />
        <Text fontType="P3" color={color.G300}>
          {title}
        </Text>
      </Row>
      <IconArrow width={18} height={18} direction="left" />
    </StyledListItem>
  );
};

export default ListItem;

const StyledListItem = styled.div`
  ${flex({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  padding: 8px 0px;
`;
