import { useGuestBookValueStore } from '@/stores/guestbook/guestBook';
import { useSetGuestBookStepStore } from '@/stores/invitation/guestbookStep';
import { color, font } from '@merried/design-system';
import { IconDelete } from '@merried/icon';
import { Button, Column, Row, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface ViewGuestBookProps {
  onClose: () => void;
  name: string;
  id: string;
}

const ViewGuestBook = ({ onClose, name, id }: ViewGuestBookProps) => {
  const setGuestBookStep = useSetGuestBookStepStore();
  const guestBook = useGuestBookValueStore();
  const matched = guestBook.find((item) => item.id === id);

  const handleCloseModal = () => {
    onClose();
    setGuestBookStep('비밀번호 입력');
  };

  return (
    <StyledViewGuestBook>
      <Row width="100%" alignItems="center" justifyContent="space-between">
        <Text fontType="H3" color={color.G900}>
          {name}님의 방명록
        </Text>
        <div onClick={handleCloseModal}>
          <IconDelete width={20} height={20} stroke={color.G80} />
        </div>
      </Row>
      <Column gap={32} width="100%">
        <StyledContent>{matched?.content}</StyledContent>
        <Button onClick={handleCloseModal} size="LARGE" styleType="SECOND" width="100%">
          <Text fontType="Button3" color={color.G300}>
            닫기
          </Text>
        </Button>
      </Column>
    </StyledViewGuestBook>
  );
};

export default ViewGuestBook;

const StyledViewGuestBook = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: auto;
  gap: 20px;
`;

const StyledContent = styled.div`
  ${font.P3_160per}
  color: ${color.G100};
  width: 100%;
  height: 160px;
  overflow-y: auto;
  white-space: pre-wrap;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
