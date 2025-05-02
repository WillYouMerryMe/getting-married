import Badge from '@/components/common/Badge/Badge';
import { color } from '@merried/design-system';
import { IconBoldLetter, IconBoldShare, IconFolder } from '@merried/icon';
import { Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface InvitationItemProps {
  title: string;
  date: string;
  hour: string;
}

const InvitationItem = ({ title, date, hour }: InvitationItemProps) => {
  return (
    <StyledInvitationItem>
      <Background src="images/type01.svg" alt="초대장 배경" />
      <IconFolder width="100%" height={194.38} stroke={color.G30}/>
      <ItemContent>
        <Column gap={4}>
          <Text fontType="H4" color={color.G900}>
            {title}
          </Text>
          <Row gap={4}>
            <Text fontType="P3" color={color.G80}>
              {date}
            </Text>
            <Text fontType="P3" color={color.G80}>
              {hour}
            </Text>
          </Row>
        </Column>
        <Row alignItems="center" gap={8}>
          <Badge icon={IconBoldLetter} title="청첩장 확인" onClick={() => {}} />
          <Badge icon={IconBoldShare} title="URL 복사" onClick={() => {}} />
        </Row>
      </ItemContent>
    </StyledInvitationItem>
  );
};

export default InvitationItem;

const StyledInvitationItem = styled.div`
  width: 100%;
  height: 194.38px;
  margin-bottom: 14px;
  position: relative;

  svg {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ItemContent = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100%;
  padding: 60px 16px 20.38px;
  position: absolute;
  z-index: 2;
  top: 0;
`;

const Background = styled.img`
  width: calc(100% - 14px);
  max-width: calc(100% - 14px);
  height: 137px;
  position: absolute;
  z-index: 0;
  top: 18.2px;
  left: 0;
  object-fit: fill;
`;
