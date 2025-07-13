import Badge from '@/components/common/Badge/Badge';
import { ROUTES } from '@/constants/common/constant';
import { color } from '@merried/design-system';
import { IconBoldLetter, IconBoldList, IconBoldShare, IconFolder } from '@merried/icon';
import { ActionButton, Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useOverlay } from '@toss/use-overlay';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import PasswordModal from '../PasswordModal/PasswordModal';
import { getDate } from '@/utils/getDate';
import { getHour } from '@/utils/getHour';
import { useCardDetailQuery } from '@/services/card/queries';
import { useToast } from '@/utils/useToast';
import { OpenGraph } from '@toss/react';

interface InvitationItemProps {
  id: string;
  title: string;
  picture: string;
  updateAt: string;
}

const InvitationItem = ({ id, title, updateAt, picture }: InvitationItemProps) => {
  const router = useRouter();
  const overlay = useOverlay();
  const { data } = useCardDetailQuery(id);
  const { show } = useToast();

  const weddingDate = dayjs().isSame(
    dayjs(data?.weddingInfo?.date).add(9, 'hour'),
    'day'
  );

  const handleMoveGuestBook = () => {
    overlay.open(({ isOpen, close }) => (
      <PasswordModal
        isOpen={isOpen}
        onClose={close}
        password={data?.guestBook?.masterPassword ?? ''}
        id={id}
      />
    ));
  };

  const handleMoveInvitation = () => {
    router.push(`${ROUTES.INVITATION}/${id}`);
  };

  const handleCopyUrl = () => {
    const baseUrl = window.location.origin;
    const invitationUrl = `${baseUrl}/invitation/${id}`;
    navigator.clipboard
      .writeText(invitationUrl)
      .then(() => {
        show('복사했습니다', 'SUCCESS');
      })
      .catch(() => {
        show('복사에 실패했습니다', 'ERROR');
      });
  };

  const handleMoveAttendee = () => {
    router.push(`${ROUTES.INVITE}/${id}`);
  };

  return (
    <StyledInvitationItem>
      <Background src={picture} alt="초대장 배경" />
      <IconFolder width="100%" height={194.38} stroke={color.G30} />
      <ItemContent>
        <Row width="100%" justifyContent="space-between">
          <Column gap={4}>
            <Text fontType="H4" color={color.G900}>
              {title}
            </Text>
            <Row gap={4}>
              <Text fontType="P3" color={color.G80}>
                {getDate(updateAt)}
              </Text>
              <Text fontType="P3" color={color.G80}>
                {getHour(updateAt)}
              </Text>
            </Row>
          </Column>
          <ActionButton
            onClick={handleMoveAttendee}
            width={100}
            background={color.primary2}
          >
            <Text fontType="Button3" color={color.primary}>
              참석자 추가
            </Text>
          </ActionButton>
        </Row>
        <Row alignItems="center" gap={8}>
          <Badge
            icon={IconBoldLetter}
            title="청첩장 확인"
            onClick={handleMoveInvitation}
          />
          <Badge icon={IconBoldShare} title="URL 복사" onClick={handleCopyUrl} />
          {weddingDate && (
            <Badge
              icon={IconBoldList}
              title="방명록 확인"
              onClick={handleMoveGuestBook}
            />
          )}
        </Row>
      </ItemContent>
    </StyledInvitationItem>
  );
};

export default InvitationItem;

const StyledInvitationItem = styled.div`
  width: 100%;
  height: 194.38px;
  margin-bottom: 14px;
  position: relative;

  svg {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ItemContent = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  })}
  width: 100%;
  height: 100%;
  padding: 60px 16px 20.38px;
  position: absolute;
  z-index: 2;
  top: 0;
`;

const Background = styled.img`
  width: calc(100% - 14px);
  max-width: calc(100% - 14px);
  height: 137px;
  position: absolute;
  z-index: 0;
  top: 18.2px;
  left: 0;
  object-fit: fill;
`;
