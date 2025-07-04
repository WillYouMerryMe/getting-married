import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import GuestBookModal from '../../GuestBookModal';
import { useGuestbookValueStore } from '@/store/form/guestbook';

interface GuestBookListItemProps {
  name: string;
  content: string;
}

const GuestBookListItem = ({ name, content }: GuestBookListItemProps) => {
  const overlay = useOverlay();
  const { password } = useGuestbookValueStore();

  const handleOpenGuestBookModal = () => {
    overlay.open(({ isOpen, close }) => (
      <GuestBookModal
        isOpen={isOpen}
        onClose={close}
        name={name}
        content={content}
        password={password}
      />
    ));
  };

  return (
    <StyledGuestBookListItem onClick={handleOpenGuestBookModal}>
      <Text fontType="Button3" color={color.G500}>
        {name}님의 방명록
      </Text>
    </StyledGuestBookListItem>
  );
};

export default GuestBookListItem;

const StyledGuestBookListItem = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${color.G10};
  border-radius: 8px;
  padding: 19px 16px;
`;
