import CustomText from '@/components/common/CustomText/CustomText';
import { GENDER_MAP } from '@/constants/invitation/constants';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface CoupleInfoItme {
  mother: string;
  father: string;
  gender: 'SON' | 'DAUGHTER';
  name: string;
}

const CoupleInfoItem = ({ mother, father, gender, name }: CoupleInfoItme) => {
  return (
    <StyledCoupleInfoItem>
      <CustomText
        fontType="Ownglyph Kundo"
        color={color.G900}
        size={20}
        weight={400}
        line={100}
      >
        {father} • {mother}의 {GENDER_MAP[gender]}
      </CustomText>
      <CustomText
        fontType="Ownglyph Kundo"
        color={color.pointYellow}
        size={20}
        weight={400}
        line={100}
      >
        {name}
      </CustomText>
    </StyledCoupleInfoItem>
  );
};

export default CoupleInfoItem;

const StyledCoupleInfoItem = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' })}
  width: 100%;
  gap: 12px;
`;
