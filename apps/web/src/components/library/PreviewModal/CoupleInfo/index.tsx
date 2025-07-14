import { flex } from '@merried/utils';
import styled from 'styled-components';
import CoupleInfoItem from './CoupleInfoItem';
import { PutCardReq } from '@/types/form/remote';

interface Props {
  data: PutCardReq;
}

const CoupleInfo = ({ data }: Props) => {
  if (!data || !data?.groomProfile || !data?.brideProfile) return null;

  const groom = data.groomProfile;
  const bride = data.brideProfile;
  const { font, pointColor } = data.invitationSetting;

  const coupleList = [
    {
      name: groom.name || 'OOO',
      gender: 'GROOM' as const,
      father: {
        name: groom.fatherName || 'OOO',
        isDeceased: groom.isFatherDeceased || false,
      },
      mother: {
        name: groom.motherName || 'OOO',
        isDeceased: groom.isMotherDeceased || false,
      },
    },
    {
      name: bride.name || 'OOO',
      gender: 'BRIDE' as const,
      father: {
        name: bride.fatherName || 'OOO',
        isDeceased: bride.isFatherDeceased || false,
      },
      mother: {
        name: bride.motherName || 'OOO',
        isDeceased: bride.isMotherDeceased || false,
      },
    },
  ];

  return (
    <StyledCoupleInfo>
      {coupleList.map(({ father, mother, gender, name }, idx) => (
        <CoupleInfoItem
          key={idx}
          father={father}
          mother={mother}
          gender={gender}
          name={name}
          pointColor={pointColor}
          invitationFont={font}
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
