import CustomText from '@/components/common/CustomText/CustomText';
import { color } from '@merried/design-system';
import { Column } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import GuestSnapShotContent from './GuestSnapShotContent/GuestSnapShotContent';

interface GuestSnapShotProps {
  font: string;
  title: string;
  id: string;
}

const GuestSnapShot = ({ font, title, id }: GuestSnapShotProps) => {
  return (
    <StyledGuestSnapShot>
      <Column gap={12} alignItems="center">
        <CustomText fontType={font} size={24} weight={400} line={100} color={color.G900}>
          {title}
        </CustomText>
        <CustomText fontType={font} size={18} weight={400} line={140} color={color.G80}>
          하나뿐일 특별한 사진을 남겨주세요!
          <br />
          많은 참여 부탁드립니다.
        </CustomText>
      </Column>
      <GuestSnapShotContent id={id} />
    </StyledGuestSnapShot>
  );
};

export default GuestSnapShot;

const StyledGuestSnapShot = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: 100%;
  gap: 20px;
`;
