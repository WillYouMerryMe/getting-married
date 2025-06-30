import { color } from '@merried/design-system';
import styled from 'styled-components';
import MyInfo from '../MyInfo/MyInfo';
import ListItem from '../ListItem/ListItem';
import { IconHeadset, IconMegaphone } from '@merried/icon';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';

const MyInfoList = () => {
  return (
    <StyledMyInfoList>
      <MyInfo />
      <Spacer />
      <Column gap={4} width="100%">
        <ListItem icon={IconHeadset} title="고객지원" />
        <ListItem icon={IconMegaphone} title="공지사항" />
      </Column>
    </StyledMyInfoList>
  );
};

export default MyInfoList;

const StyledMyInfoList = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 100%;
  gap: 16px;
`;

const Spacer = styled.div`
  width: calc(100% + 36px);
  height: 10px;
  background-color: ${color.G10};
  position: relative;
  left: -18px;
`;
