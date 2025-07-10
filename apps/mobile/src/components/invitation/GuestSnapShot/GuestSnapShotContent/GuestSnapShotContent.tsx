import { color } from '@merried/design-system';
import { Button, Column, InsertPhoto, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import { usePostGuestSnapShot } from './GuestSnapShotContent.hooks';
import { useGusetSnapShotMutation } from '@/services/snapshot/mutations';
import { useCallback } from 'react';

const MAX_FILES = 19;

interface GuestSnapShotContentProps {
  id: string;
}

const GuestSnapShotContent = ({ id }: GuestSnapShotContentProps) => {
  const { image, handleImageChange, buildParams } = usePostGuestSnapShot(id);
  const { guestSnapShotMutate } = useGusetSnapShotMutation();

  const count = image?.length ?? 0;

  const handeleUpload = useCallback(async () => {
    const param = await buildParams();

    guestSnapShotMutate(param);
  }, [buildParams, guestSnapShotMutate]);

  return (
    <StyledGuestSnapShotContent>
      <Column gap={14} alignItems="stretch" width="100%">
        <InsertPhoto
          size="BIG"
          value={image}
          onChange={handleImageChange}
          maxFiles={MAX_FILES}
        />
        <Column gap={4}>
          <Text fontType="P3" color={color.G80}>
            · 1장당 100MB까지 업로드 가능합니다.
          </Text>
          <Text fontType="P3" color={count >= MAX_FILES ? color.red : color.G80}>
            · 최대 20장 업로드 가능합니다.
          </Text>
        </Column>
      </Column>
      <Button
        onClick={handeleUpload}
        size="VERY_LARGE"
        width="100%"
        disabled={count === 0}
        pointColor={count ? color.pointYellow : color.G40}
      >
        <Text fontType="Button3" color={count ? color.G900 : color.G100}>
          스냅 사진 보내기
        </Text>
      </Button>
    </StyledGuestSnapShotContent>
  );
};

export default GuestSnapShotContent;

const StyledGuestSnapShotContent = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 100%;
  height: 100%;
  gap: 40px;
`;
