import { color } from '@merried/design-system';
import { IconDragHandle } from '@merried/icon';
import { Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';

const GuestSnapOption = () => {
  return (
    <StyledGuestSnapOption>
      <Column gap={28}>
        <Column gap={8}>
          <Row gap={8}>
            <ToggleButton isOpen={false} />
            <Text fontType="H3" color={color.G900}>
              게스트 스냅
            </Text>
          </Row>
          <Text fontType="P3" color={color.G80}>
            하객분들이 찍어주신 사진을 올려주실 수 있는 기능입니다.
          </Text>
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            제목
          </Text>
          <Input width={384} platform="DESKTOP" placeholder="제목을 입력해주세요" />
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            마스터 비밀번호<RequiredMark>*</RequiredMark>
          </Text>
          <Input
            width={384}
            platform="DESKTOP"
            placeholder="방명록을 열 비밀번호를 입력해주세요"
          />
        </Column>
      </Column>
      <IconDragHandle />
    </StyledGuestSnapOption>
  );
};

export default GuestSnapOption;

const StyledGuestSnapOption = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-start' })}
  padding: 28px 20px;
  border-radius: 8px;
  background: ${color.G0};
`;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
