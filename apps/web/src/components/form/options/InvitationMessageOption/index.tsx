import { color } from '@merried/design-system';
import { IconDragHandle } from '@merried/icon';
import { Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';

const InvitationMessageOption = () => {
  return (
    <StyledInvitationMessageOption>
      <Column gap={28}>
        <Column gap={8}>
          <Row gap={8}>
            <ToggleButton isOpen={false} />
            <Text fontType="H3" color={color.G900}>
              초대 글귀
            </Text>
          </Row>
          <Text fontType="P3" color={color.G80}>
            청첩장을 보시는 분들이 메인 화면 이후 처음으로 보시게 될 글귀입니다.
          </Text>
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            제목<RequiredMark>*</RequiredMark>
          </Text>
          <Input width={384} platform="DESKTOP" placeholder="제목을 입력해주세요" />
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            내용<RequiredMark>*</RequiredMark>
          </Text>
          <Input width={384} platform="DESKTOP" placeholder="내용을 입력해주세요" />
        </Column>
      </Column>
      <IconDragHandle />
    </StyledInvitationMessageOption>
  );
};

export default InvitationMessageOption;

const StyledInvitationMessageOption = styled.div`
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
