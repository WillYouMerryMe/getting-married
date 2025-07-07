import ButtonGroup from '@/components/common/ButtonGroup/ButtonGroup';
import DesktopButtonGroup from '@/components/common/ButtonGroup/DesktopButtonGroup';
import { Button, Column, Input } from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import styled from 'styled-components';
import { useInput } from './InviteContent.hooks';

const InviteContent = () => {
  const { handleCountChange, handleCountBlur, count } = useInput();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <StyledInviteContent>
      <Column gap={28}>
        <ButtonGroup
          buttons={[
            { label: '신랑측', onClick: () => {} },
            { label: '신부측', onClick: () => {} },
          ]}
        />
        <Input
          label="이름"
          placeholder="이름을 입력해주세요"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <Input
          label="전화번호"
          placeholder="전화번호를 입력해주세요"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          name="phoneNumber"
        />
        <Input
          label="참석인원"
          size="LARGE"
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min={1}
          step={1}
          value={count}
          onChange={handleCountChange}
          onBlur={handleCountBlur}
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
          <DesktopButtonGroup
            title="식사 여부"
            buttons={[
              { label: '예정', onClick: () => {} },
              { label: '안함', onClick: () => {} },
              { label: '미정', onClick: () => {} },
            ]}
            height="52px"
          />
        </Column>
        <Button width="100%" onClick={() => {}} styleType={name ? 'DEFAULT' : 'DISABLED'}>
          참석자 추가하기
        </Button>
      </Column>
    </StyledInviteContent>
  );
};

export default InviteContent;

const StyledInviteContent = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'space-between' })}
  width: 100%;
  height: 100%;
`;
