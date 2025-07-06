import CustomText from '@/components/common/CustomText/CustomText';
import { GENDER_MAP } from '@/constants/invitation/constants';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface CoupleInfoItemProps {
  motherName?: string;
  isMotherDeceased?: boolean;
  fatherName?: string;
  isFatherDeceased?: boolean;
  gender: 'SON' | 'DAUGHTER';
  name: string;
  font: string;
  pointColor: string;
}

const CoupleInfoItem = ({
  motherName,
  isMotherDeceased,
  fatherName,
  isFatherDeceased,
  gender,
  name,
  font,
  pointColor,
}: CoupleInfoItemProps) => {
  return (
    <StyledCoupleInfoItem>
      <CustomText fontType={font} color={color.G900} size={20} weight={400} line={100}>
        {isFatherDeceased ? '고' : ''} {fatherName} • {isMotherDeceased ? '고' : ''}{' '}
        {motherName}의 {GENDER_MAP[gender]}
      </CustomText>
      <CustomText fontType={font} color={pointColor} size={20} weight={400} line={100}>
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
