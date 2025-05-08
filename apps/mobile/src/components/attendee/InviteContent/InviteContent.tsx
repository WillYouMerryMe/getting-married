import ButtonGroup from '@/components/common/ButtonGroup/ButtonGroup';
import { Button, Column, Input } from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import styled from 'styled-components';

const InviteContent = () => {
  const [name, setName] = useState('');
  return (
    <StyledInviteContent>
      <Column gap={28}>
        <Input
          label="이름"
          placeholder="이름을 입력해주세요"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <Column gap={24}>
          <ButtonGroup
            title="참석 여부"
            buttons={[
              { label: '참석', onClick: () => {} },
              { label: '불참석', onClick: () => {} },
            ]}
          />
          <ButtonGroup
            title="축의금 여부"
            buttons={[
              { label: 'O', onClick: () => {} },
              { label: 'X', onClick: () => {} },
            ]}
          />
          <ButtonGroup
            title="식사 여부"
            buttons={[
              { label: 'O', onClick: () => {} },
              { label: 'X', onClick: () => {} },
            ]}
          />
        </Column>
      </Column>
      <Button width="100%" onClick={() => {}} styleType={name ? 'DEFAULT' : 'DISABLED'}>
        추가
      </Button>
    </StyledInviteContent>
  );
};

export default InviteContent;

const StyledInviteContent = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 100%;
  gap: 82px;
`;
