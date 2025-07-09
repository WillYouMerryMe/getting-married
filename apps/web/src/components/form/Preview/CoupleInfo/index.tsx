import { flex } from '@merried/utils';
import styled from 'styled-components';
import CoupleInfoItem from './CoupleInfoItem';
import { useCoupleIntroValueStore } from '@/store/form/coupleIntro';

const CoupleInfo = () => {
  const coupleIntro = useCoupleIntroValueStore();

  const coupleList = [
    {
      name: coupleIntro.groom.name || 'OOO',
      gender: 'GROOM' as const,
      father: {
        name: coupleIntro.groom.fatherName || 'OOO',
        isDeceased: coupleIntro.groom.isFatherDeceased ?? false,
      },
      mother: {
        name: coupleIntro.groom.motherName || 'OOO',
        isDeceased: coupleIntro.groom.isMotherDeceased ?? false,
      },
    },
    {
      name: coupleIntro.bride.name || 'OOO',
      gender: 'BRIDE' as const,
      father: {
        name: coupleIntro.bride.fatherName || 'OOO',
        isDeceased: coupleIntro.bride.isFatherDeceased ?? false,
      },
      mother: {
        name: coupleIntro.bride.motherName || 'OOO',
        isDeceased: coupleIntro.bride.isMotherDeceased ?? false,
      },
    },
  ];

  if (!coupleIntro.isToggle) return null;

  return (
    <StyledCoupleInfo>
      {coupleList.map(({ father, mother, gender, name }, idx) => (
        <CoupleInfoItem
          key={idx}
          father={father}
          mother={mother}
          gender={gender}
          name={name}
        />
      ))}
    </StyledCoupleInfo>
  );
};

export default CoupleInfo;

const StyledCoupleInfo = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 12px;
`;
