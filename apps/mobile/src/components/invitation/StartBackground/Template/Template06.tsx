import CustomText from '@/components/common/CustomText/CustomText';
import { formatTemplate05Date } from '@/utils/formatTemplate05Date';
import { IconShortArrow } from '@merried/icon';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Template06Props {
  date: string;
  letteringColor: string;
  lettering: string[];
  font: string;
}

const Template06 = ({ date, letteringColor, lettering, font }: Template06Props) => {
  return (
    <StyledTemplate06>
      <CenterBox>
        <CustomText
          fontType={font}
          color={letteringColor}
          size={40}
          weight={700}
          line={110}
        >
          {lettering}
        </CustomText>
      </CenterBox>
      <BottomBox>
        <CustomText
          fontType="Paperlogy"
          color={letteringColor}
          size={14}
          weight={400}
          line={120}
        >
          {formatTemplate05Date(date)}
        </CustomText>
        <Circle>
          <IconShortArrow width={16} height={16} />
        </Circle>
      </BottomBox>
    </StyledTemplate06>
  );
};

export default Template06;

const StyledTemplate06 = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100vh;
`;

const Circle = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 44px;
  height: 44px;
  border-radius: 99px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  background: rgba(255, 255, 255, 0.21);
  backdrop-filter: blur(14.699999809265137px);
`;

const CenterBox = styled.div`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  flex: 1;
  width: 100%;
`;

const BottomBox = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  gap: 23px;
  margin-bottom: 24px;
`;
