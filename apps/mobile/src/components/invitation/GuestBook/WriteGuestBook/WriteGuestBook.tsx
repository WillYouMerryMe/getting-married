import { GuestBookSchema } from '@/schemas/GuestBookSchema';
import { useGuestBookCreate } from '@/services/guestbook/mutations';
import { PostGuestBookCreateReq } from '@/types/guestbook/remote';
import { useToast } from '@/utils/useToast';
import { Button, Column, Input, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import styled from 'styled-components';

interface WriteGuestBookProps {
  pointColor: string;
  id: string;
}

const WriteGuestBook = ({ pointColor, id }: WriteGuestBookProps) => {
  const [guestbook, setGuestbook] = useState<PostGuestBookCreateReq>({
    cardId: id,
    name: '',
    content: '',
  });
  const { guestBookCreate } = useGuestBookCreate();
  const queryClient = useQueryClient();
  const { show } = useToast();

  const handleGuestBookCreate = () => {
    const result = GuestBookSchema.safeParse(guestbook);

    if (result.success) {
      guestBookCreate(guestbook, {
        onSuccess: () => {
          setGuestbook({ cardId: id, name: '', content: '' });
          queryClient.invalidateQueries({ queryKey: ['guestbook', id] });
        },
      });
    } else {
      show('방명록 작성에 실패했습니다', 'ERROR');
    }
  };

  return (
    <StyledWriteGuestBook>
      <Column gap={12} width="100%">
        <Input
          width="100%"
          label="이름"
          placeholder="이름을 입력해주세요"
          name="name"
          value={guestbook.name}
          onChange={(e) => setGuestbook((prev) => ({ ...prev, name: e.target.value }))}
        />
        <Input
          width="100%"
          label="방명록 글귀"
          placeholder="글귀를 입력해주세요"
          name="content"
          value={guestbook.content}
          onChange={(e) => setGuestbook((prev) => ({ ...prev, content: e.target.value }))}
        />
      </Column>
      <Button
        onClick={handleGuestBookCreate}
        width="100%"
        size="VERY_LARGE"
        pointColor={pointColor}
      >
        <Text fontType="Button3">작성완료</Text>
      </Button>
    </StyledWriteGuestBook>
  );
};

export default WriteGuestBook;

const StyledWriteGuestBook = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'center' })}
  width: 100%;
  height: 100%;
  gap: 24px;
`;
