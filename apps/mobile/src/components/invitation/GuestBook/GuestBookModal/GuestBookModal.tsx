import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { useGuestBookStepValueStore } from '@/stores/invitation/guestbookStep';
import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { SwitchCase } from '@toss/react';
import styled from 'styled-components';
import ViewGuestBook from './ViewGuestBook/ViewGuestBook';
import MasterPassword from './MasterPassword/MasterPassword';

interface GuestBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  content: string;
  password: string;
}

const GuestBookModal = ({ isOpen, onClose, name, content, password }: GuestBookModalProps) => {
  const guestbook = useGuestBookStepValueStore();

  useBodyScrollLock(isOpen);

  return (
    <BlurBackground $isOpen={isOpen}>
      <StyledGuestBookModal>
        <SwitchCase
          value={guestbook}
          caseBy={{
            '비밀번호 입력': <MasterPassword onClose={onClose} password={password} />,
            '방명록 확인': (
              <ViewGuestBook onClose={onClose} name={name} content={content} />
            ),
          }}
        />
      </StyledGuestBookModal>
    </BlurBackground>
  );
};

export default GuestBookModal;

const BlurBackground = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(5px);
  z-index: 10;
  padding: 0px 12px;
`;

const StyledGuestBookModal = styled.div`
  ${flex({
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  })}
  width: 100%;
  height: auto;
  background-color: ${color.G0};
  border-radius: 16px;
  padding: 24px 16px;
`;
