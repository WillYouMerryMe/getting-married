'use client';

import GuestBookContent from '@/components/guestbook/GuestBookContent/GuestBookContent';
import { ROUTES } from '@/constants/common/constant';
import AppLayout from '@/layouts/AppLayout';
import { useGuestBookValueStore } from '@/stores/guestbook/guestBook';
import { IconDelete } from '@merried/icon';
import { flex } from '@merried/utils';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const GuestBookDetail = () => {
  const router = useRouter();
  const guestBook = useGuestBookValueStore();

  const handleMoveHome = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <AppLayout>
      <StyledGuestBookDetail>
        <div>
          <IconWrapper onClick={handleMoveHome}>
            <IconDelete width={24} height={24} />
          </IconWrapper>
        </div>
        <GuestBookContent guestBookItems={guestBook} />
      </StyledGuestBookDetail>
    </AppLayout>
  );
};

export default GuestBookDetail;

const StyledGuestBookDetail = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  height: 100vh;
  padding: 75px 12px 34px;

  background-image:
    linear-gradient(rgba(26, 26, 26, 0.3), rgba(26, 26, 26, 0.3)), url('/guestbook.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
