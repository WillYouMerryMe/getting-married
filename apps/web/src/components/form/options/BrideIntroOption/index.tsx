import { color } from '@merried/design-system';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { useState } from 'react';
import { styled } from 'styled-components';

const BrideIntroOption = () => {
  const [isFatherDeceased, setIsFatherDeceased] = useState(false);
  const [isMotherDeceased, setIsMotherDeceased] = useState(false);

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={false} />
        <Text fontType="H3" color={color.G900}>
          신부측 소개
        </Text>
      </Row>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          신부 이름<RequiredMark>*</RequiredMark>
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="신부 이름을 입력해주세요" />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          아버지
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="아버지 이름을 입력해주세요" />
        <CheckBox
          checked={isFatherDeceased}
          onChange={setIsFatherDeceased}
          label="고인"
        />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          어머니
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="어머니 이름을 입력해주세요" />
        <CheckBox
          checked={isMotherDeceased}
          onChange={setIsMotherDeceased}
          label="고인"
        />
      </Column>
    </Column>
  );
};

export default BrideIntroOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
