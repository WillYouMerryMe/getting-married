import { Side } from '@/types/manage/client';
import { formatSide } from '@/utils/formatSide';
import { color } from '@merried/design-system';
import { IconPencil } from '@merried/icon';
import { Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface ListItemProps {
  name: string;
  side: Side;
  count: number;
  attend: boolean;
  money: boolean;
  meal: boolean;
}

const ListItem = ({ name, side, count, attend, money, meal }: ListItemProps) => {
  return (
    <StyledListItem onClick={() => {}}>
      <Row alignItems="center" gap={10}>
        <IconPencil width={16} height={16} />
        <Column alignItems="flex-start">
          <Text fontType="P3" color={color.G900}>
            {name}
          </Text>
          <Row alignItems="center" gap={4}>
            <Text fontType="P3" color={color.G70}>
              {formatSide[side]}측
            </Text>
            <Text fontType="P3" color={color.G70}>
              •
            </Text>
            <Text fontType="P3" color={color.G70}>
              본인 포함 {count}명
            </Text>
          </Row>
        </Column>
      </Row>
      <Row alignItems="center" justifyContent="space-between" width={127}>
        <Text fontType="P3" color={color.G900} width={25} textAlign="center">
          {attend === true ? 'O' : 'X'}
        </Text>
        <Text fontType="P3" color={color.G900} width={25} textAlign="center">
          {money === true ? 'O' : 'X'}
        </Text>
        <Text fontType="P3" color={color.G900} width={25} textAlign="center">
          {meal === true ? 'O' : 'X'}
        </Text>
      </Row>
    </StyledListItem>
  );
};

export default ListItem;

const StyledListItem = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 68px;
  background-color: ${color.G0};
  border: 1px solid ${color.G40};
  border-radius: 8px;
  padding: 18px 16px;
`;
