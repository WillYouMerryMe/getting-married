import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

const Greeting = () => {
  return (
    <StyledGreeting>
      <CustomText
        fontType="YUniverse-B"
        color={color.pointYellow}
        size={32}
        weight={700}
        line={100}
      >
        븿
      </CustomText>
      <Column gap={16} alignItems="center">
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.pointYellow}
          size={24}
          weight={400}
          line={100}
        >
          소중한 여러분을 초대합니다
        </CustomText>
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.G900}
          size={18}
          weight={400}
          line={140}
        >
          오랜 기다림 속에서 저희 두 사람,
          <br />한 마음 되어 참된 사랑의 결실을
          <br />
          맺게 되었습니다.
          <br />
          <br />
          오셔서 축복해 주시면 큰 기쁨이겠습니다.
        </CustomText>
      </Column>
    </StyledGreeting>
  );
};

export default Greeting;

const StyledGreeting = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 32px;
`;
