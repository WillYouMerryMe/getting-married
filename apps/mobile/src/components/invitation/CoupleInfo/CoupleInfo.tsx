import { flex } from '@merried/utils';
import styled from 'styled-components';
import CoupleInfoItem from './CoupleInfoItem/CoupleInfoItem';

type CoupleInfoProps = {
  coupleList: {
    father: string;
    mother: string;
    gender: 'SON' | 'DAUGHTER';
    name: string;
  }[];
};

const CoupleInfo = ({ coupleList }: CoupleInfoProps) => {
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
