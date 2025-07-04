import { useLogoutMutation } from '@/services/auth/mutations';
import { color } from '@merried/design-system';
import { IconLongArrow } from '@merried/icon';
import { BrandBadge, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';

interface Props {
  nickname: string;
  email: string;
  provider: 'KAKAO' | 'NAVER';
}

const ProfileInfo = ({ nickname, email, provider }: Props) => {
  const { logoutMutate } = useLogoutMutation();

  const handleLogoutButtonClick = () => {
    logoutMutate();
  };

  return (
    <StyledProfileInfo>
      <ProfileBox>
        <Row gap={64} alignItems="center">
          <Row gap={8} alignItems="center">
            <Text fontType="H3" color={color.G900}>
              {nickname}님
            </Text>
            <BrandBadge type={provider} />
          </Row>
          <LogoutButton onClick={handleLogoutButtonClick}>
            <Text fontType="Button4" color={color.G400}>
              로그아웃
            </Text>
            <IconLongArrow direction="right" stroke={color.G400} width={14} height={14} />
          </LogoutButton>
        </Row>
        <Text fontType="P3" color={color.G80}>
          {email}
        </Text>
      </ProfileBox>
      <WithdrawButton>
        <Text fontType="Button3" color={color.red}>
          회원탈퇴
        </Text>
      </WithdrawButton>
    </StyledProfileInfo>
  );
};

export default ProfileInfo;

const StyledProfileInfo = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  padding: 22px 16px 12px 16px;
  gap: 8px;

  border-radius: 8px;
  border: 1px solid ${color.G50};
  background: ${color.G0};

  box-shadow:
    0px 21px 6px 0px rgba(194, 194, 194, 0),
    0px 14px 6px 0px rgba(194, 194, 194, 0.01),
    0px 8px 5px 0px rgba(194, 194, 194, 0.05),
    0px 3px 3px 0px rgba(194, 194, 194, 0.09),
    0px 1px 2px 0px rgba(194, 194, 194, 0.1);
`;

const ProfileBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  padding-bottom: 12px;
  gap: 2px;

  border-bottom: 1px solid ${color.G30};
`;

const LogoutButton = styled.div`
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
  height: 32px;
  padding: 9px 12px 9px 14px;
  gap: 4px;

  border-radius: 99px;

  border: 1px solid ${color.G40};
  background: ${color.G0};
  cursor: pointer;
`;

const WithdrawButton = styled.div`
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
  padding: 4px 0px;
  cursor: pointer;
`;
