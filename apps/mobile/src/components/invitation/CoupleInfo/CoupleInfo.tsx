import { flex } from '@merried/utils';
import styled from 'styled-components';
import CoupleInfoItem from './CoupleInfoItem/CoupleInfoItem';

type CoupleInfoProps = {
  coupleList: {
    fatherName: string;
    isFatherDeceased: boolean;
    motherName: string;
    isMotherDeceased: boolean;
    gender: 'SON' | 'DAUGHTER';
    name: string;
  }[];
  pointColor: string;
  font: string;
};

const CoupleInfo = ({ coupleList, pointColor, font }: CoupleInfoProps) => {
  return (
    <StyledCoupleInfo>
      {coupleList.map(
        ({
          fatherName,
          isFatherDeceased,
          motherName,
          isMotherDeceased,
          gender,
          name,
        }) => (
          <CoupleInfoItem
            key={`${gender}-${name}-${fatherName}-${motherName}`}
            fatherName={fatherName}
            isFatherDeceased={isFatherDeceased}
            motherName={motherName}
            isMotherDeceased={isMotherDeceased}
            gender={gender}
            name={name}
            pointColor={pointColor}
            font={font}
          />
        )
      )}
    </StyledCoupleInfo>
  );
};

export default CoupleInfo;

const StyledCoupleInfo = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  gap: 12px;
`;
