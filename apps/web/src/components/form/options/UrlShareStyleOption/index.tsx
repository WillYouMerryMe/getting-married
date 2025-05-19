import { color } from '@merried/design-system';
import { Column, Row, ToggleButton, Text, Input, InsertPhoto } from '@merried/ui';
import { flex } from '@merried/utils';
import { IconDragHandle } from '@merried/icon';
import { useState } from 'react';
import { styled } from 'styled-components';

const UrlShareStyleOption = () => {
  const [image, setImage] = useState<string[] | null>(null);

  return (
    <StyledUrlShareStyleOption>
      <Column gap={28}>
        <Row gap={8}>
          <ToggleButton isOpen={false} />
          <Text fontType="H3" color={color.G900}>
            URL 공유 스타일 설정
          </Text>
        </Row>
        <Column gap={12}>
          <Column gap={8}>
            <Text fontType="P3" color={color.G900}>
              썸네일
            </Text>
            <InsertPhoto size="SMALL" value={image} onChange={setImage} />
          </Column>
          <Column gap={4}>
            <Text fontType="P3" color={color.G80}>
              · URL 공유 수정 시 반영까지{' '}
              <Text fontType="P3" color={color.primary}>
                1시간 이상
              </Text>{' '}
              소요됩니다.
            </Text>
            <Text fontType="P3" color={color.G80}>
              · 썸네일은 100MB이내로 첨부바랍니다.
            </Text>
          </Column>
        </Column>
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
      </Column>
      <IconDragHandle />
    </StyledUrlShareStyleOption>
  );
};

export default UrlShareStyleOption;

const StyledUrlShareStyleOption = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-start' })}
  padding: 28px 20px;
  width: 548px;
  border-radius: 8px;
  background: ${color.G0};
`;
