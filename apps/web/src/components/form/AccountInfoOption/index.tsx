import { color } from '@merried/design-system';
import { IconDragHandle } from '@merried/icon';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import { styled } from 'styled-components';

const AccountInfoOption = () => {
  const [showGroom, setShowGroom] = useState(false);
  const [showBride, setShowBride] = useState(false);
  const [showGroomFather, setShowGroomFather] = useState(false);
  const [showGroomMother, setShowGroomMother] = useState(false);
  const [showBrideFather, setShowBrideFather] = useState(false);
  const [showBrideMother, setShowBrideMother] = useState(false);

  return (
    <StyledAccountInfoOption>
      <Column gap={28}>
        <Row gap={8}>
          <ToggleButton isOpen={false} />
          <Text fontType="H3" color={color.G900}>
            계좌 번호
          </Text>
        </Row>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            제목
          </Text>
          <Input width={384} platform="DESKTOP" placeholder="제목을 입력해주세요" />
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            내용
          </Text>
          <Input width={384} platform="DESKTOP" placeholder="내용을 입력해주세요" />
        </Column>
        <CheckBox label="신랑" checked={showGroom} onChange={setShowGroom} />
        {showGroom && (
          <Column gap={8}>
            <Input width={384} platform="DESKTOP" placeholder="은행을 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="계좌번호를 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="예금주를 입력해주세요" />
          </Column>
        )}
        <CheckBox label="신부" checked={showBride} onChange={setShowBride} />
        {showBride && (
          <Column gap={8}>
            <Input width={384} platform="DESKTOP" placeholder="은행을 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="계좌번호를 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="예금주를 입력해주세요" />
          </Column>
        )}
        <CheckBox
          label="신랑 아버지"
          checked={showGroomFather}
          onChange={setShowGroomFather}
        />
        {showGroomFather && (
          <Column gap={8}>
            <Input width={384} platform="DESKTOP" placeholder="은행을 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="계좌번호를 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="예금주를 입력해주세요" />
          </Column>
        )}
        <CheckBox
          label="신랑 어머니"
          checked={showGroomMother}
          onChange={setShowGroomMother}
        />
        {showGroomMother && (
          <Column gap={8}>
            <Input width={384} platform="DESKTOP" placeholder="은행을 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="계좌번호를 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="예금주를 입력해주세요" />
          </Column>
        )}
        <CheckBox
          label="신부 아버지"
          checked={showBrideFather}
          onChange={setShowBrideFather}
        />
        {showBrideFather && (
          <Column gap={8}>
            <Input width={384} platform="DESKTOP" placeholder="은행을 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="계좌번호를 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="예금주를 입력해주세요" />
          </Column>
        )}
        <CheckBox
          label="신부 어머니"
          checked={showBrideMother}
          onChange={setShowBrideMother}
        />
        {showBrideMother && (
          <Column gap={8}>
            <Input width={384} platform="DESKTOP" placeholder="은행을 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="계좌번호를 입력해주세요" />
            <Input width={384} platform="DESKTOP" placeholder="예금주를 입력해주세요" />
          </Column>
        )}
      </Column>
      <IconDragHandle />
    </StyledAccountInfoOption>
  );
};

export default AccountInfoOption;

const StyledAccountInfoOption = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-start' })}
  padding: 28px 20px;
  border-radius: 8px;
  background: ${color.G0};
`;
