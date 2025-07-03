import { Storage } from '@/apis/storage/storage';
import { TOKEN } from '@/constants/common/constant';
import { useLogoutMutation } from '@/services/auth/mutations';
import { useUser } from '@/services/user/queries';
import { color } from '@merried/design-system';
import { BrandBadge, Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const MyInfo = () => {
  const { data } = useUser();
  const { logoutMutate } = useLogoutMutation();

  const handleLogout = () => {
    logoutMutate(Storage.getItem(TOKEN.REFRESH) ?? '');
  };

  return (
    <StyledMyInfo>
      <Column gap={4}>
        <Row gap={8} alignItems="center">
          <Text fontType="H3" color={color.G900}>
            {data?.nickname}님
          </Text>
          <BrandBadge type={data?.provider ?? 'KAKAO'} />
        </Row>
        <Text fontType="P3" color={color.G60}>
          {data?.email}
        </Text>
      </Column>
      <div onClick={handleLogout}>
        <Text fontType="P3" color={color.G100}>
          로그아웃
        </Text>
      </div>
    </StyledMyInfo>
  );
};

export default MyInfo;

const StyledMyInfo = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 51px;
`;
