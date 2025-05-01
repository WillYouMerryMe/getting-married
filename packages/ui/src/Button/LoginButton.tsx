import { IconKakao, IconNaver } from '@merried/icon';
import Button from './Button';
import Row from '../Flex/Row';
import Text from '../Text/Text';

interface LoginButtonProps {
  type: 'KAKAO' | 'NAVER';
  onClick: () => void;
}

const LOGIN_TYPE = {
  KAKAO: {
    pointColor: '#FAE100',
    icon: <IconKakao width={20} height={18.75} />,
    label: '카카오로 시작하기',
    textColor: '#3C1D1E',
  },
  NAVER: {
    pointColor: '#04C75B',
    icon: <IconNaver width={16} height={16} />,
    label: '네이버로 시작하기',
    textColor: '#FFFFFF',
  },
} as const;

const LoginButton = ({ type, onClick }: LoginButtonProps) => {
  const { pointColor, icon, label, textColor } = LOGIN_TYPE[type];

  return (
    <Button pointColor={pointColor} width="100%" onClick={onClick}>
      <Row gap={11} alignItems="center">
        {icon}
        <Text fontType="Button1" color={textColor}>
          {label}
        </Text>
      </Row>
    </Button>
  );
};

export default LoginButton;
