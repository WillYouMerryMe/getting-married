import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { useOverlay } from '@toss/use-overlay';
import styled from 'styled-components';
import GuestBookModal from '../../GuestBookModal/GuestBookModal';

interface GuestBookListItemProps {
  id: string;
  name: string;
  password: string;
  cardId: string;
}

const GuestBookListItem = ({ name, password, cardId, id }: GuestBookListItemProps) => {
  const overlay = useOverlay();

  const handleOpenGuestBookModal = () => {
    overlay.open(({ isOpen, close }) => (
      <GuestBookModal
        id={id}
        cardId={cardId}
        isOpen={isOpen}
        onClose={close}
        password={password}
        name={name}
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
