import { CustomText } from '@/components/common';
import { GENDER_MAP } from '@/constants/form/constants';
import { CustomFontType } from '@/types/form/client';
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
  pointColor: string;
  invitationFont: string;
}

const CoupleInfoItem = ({
  mother,
  father,
  gender,
  name,
  pointColor,
  invitationFont,
}: CoupleInfoItemProps) => {
  const renderParentName = (parent: Parent) => {
    return (
      <>
        {parent.isDeceased && (
          <CustomText
            fontType={invitationFont as CustomFontType}
            color={color.G100}
            size={20}
            weight={400}
            line={100}
          >
            고
          </CustomText>
        )}
        <CustomText
          fontType={invitationFont as CustomFontType}
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
          fontType={invitationFont as CustomFontType}
          color={color.G900}
          size={20}
          weight={400}
          line={100}
        >
          •
        </CustomText>
        {renderParentName(mother)}
        <CustomText
          fontType={invitationFont as CustomFontType}
          color={color.G900}
          size={20}
          weight={400}
          line={100}
        >
          의 {GENDER_MAP[gender]}
        </CustomText>
      </div>

      <CustomText
        fontType={invitationFont as CustomFontType}
        color={pointColor}
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
