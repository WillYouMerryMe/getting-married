import { CustomText } from '@/components/common';
import { GENDER_MAP } from '@/constants/form/constants';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface Parent {
  name: string;
  isDeceased: boolean;
}

interface CoupleInfoItemProps {
  mother: Parent;
  father: Parent;
  gender: 'BRIDE' | 'GROOM';
  name: string;
}

const CoupleInfoItem = ({ mother, father, gender, name }: CoupleInfoItemProps) => {
  const renderParentName = (parent: Parent) => {
    return (
      <>
        {parent.isDeceased && (
          <CustomText
            fontType="Ownglyph Kundo"
            color={color.G100}
            size={20}
            weight={400}
            line={100}
          >
            고
          </CustomText>
        )}
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.G900}
          size={20}
          weight={400}
          line={100}
        >
          {parent.name}
        </CustomText>
      </>
    );
  };

  return (
    <StyledCoupleInfoItem>
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        {renderParentName(father)}
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.G900}
          size={20}
          weight={400}
          line={100}
        >
          •
        </CustomText>
        {renderParentName(mother)}
        <CustomText
          fontType="Ownglyph Kundo"
          color={color.G900}
          size={20}
          weight={400}
          line={100}
        >
          의 {GENDER_MAP[gender]}
        </CustomText>
      </div>

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
