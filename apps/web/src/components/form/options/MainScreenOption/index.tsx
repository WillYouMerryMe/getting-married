import { LETTERING_COLORS } from '@/constants/form/constants';
import { color } from '@merried/design-system';
import { Column, Dropdown, InsertPhoto, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useState } from 'react';
import { styled } from 'styled-components';

const MainScreenOption = () => {
  const [image, setImage] = useState<string[] | null>(null);
  const [letteringText, setLetteringText] = useState<string>('THE START OF OUR FOREVER');
  const [letteringColor, setLetteringColor] = useState<string>(color.letterYellow);

  return (
    <StyledMainScreenOption>
      <Column gap={28}>
        <Text fontType="H3" color={color.G900}>
          메인 화면 설정
          <Text fontType="P3_160per" color={color.red}>
            *
          </Text>
        </Text>
        <Column gap={12}>
          <Column gap={8}>
            <Text fontType="P3" color={color.G900}>
              사진
            </Text>
            <InsertPhoto size="SMALL" value={image} onChange={setImage} />
          </Column>
          <Text fontType="P3" color={color.G80}>
            · 썸네일은 100MB이내로 첨부바랍니다.
          </Text>
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            레터링 문구(화면 중앙에 위치한 문구입니다)
          </Text>
          <Dropdown
            option="DEFAULT"
            name="letering-text"
            value={letteringText}
            data={['THE START OF OUR FOREVER']}
            onChange={setLetteringText}
          />
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            레터링 색상
          </Text>
          <Dropdown
            option="COLOR"
            name="letering-color"
            value={letteringColor}
            data={LETTERING_COLORS}
            onChange={setLetteringColor}
          />
        </Column>
        <Column gap={4}>
          <Text fontType="P3" color={color.G80}>
            · 1장당 100MB까지 업로드 가능합니다.
          </Text>
          <Text fontType="P3" color={color.G80}>
            · 최대 20장 업로드 가능합니다.
          </Text>
        </Column>
      </Column>
    </StyledMainScreenOption>
  );
};

export default MainScreenOption;

const StyledMainScreenOption = styled.div`
  ${flex({ alignItems: 'flex-start' })}
  padding: 28px 20px;
  width: 548px;
  border-radius: 8px;
  background: ${color.G0};
`;
