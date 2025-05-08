import { color } from '@merried/design-system';
import styled from 'styled-components';
import MyInfo from '../MyInfo/MyInfo';
import ListItem from '../ListItem/ListItem';
import { IconHeadset, IconMegaphone } from '@merried/icon';
import { Column } from '@merried/ui';

const MyInfoList = () => {
  return (
    <StyledMyInfoList>
      <MyInfo />
      <Spacer />
      <Column gap={4}>
        <ListItem icon={IconHeadset} title="고객지원" />
        <ListItem icon={IconMegaphone} title="공지사항" />
      </Column>
    </StyledMyInfoList>
  );
};

export default MyInfoList;

const StyledMyInfoList = styled.div`
  width: 100%;
`;

const Spacer = styled.div`
  width: calc(100% + 36px);
  height: 10px;
  background-color: ${color.G10};
  position: relative;
  left: -18px;
  margin-top: 24px;
  margin-bottom: 12px;
`;
