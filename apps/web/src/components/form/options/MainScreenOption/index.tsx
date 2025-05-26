import { LETTERING_COLORS_OPTIONS, SETUP_FONT_OPTIONS } from '@/constants/form/constants';
import { getLetteringTextsById } from '@/utils';
import { color } from '@merried/design-system';
import { Column, Dropdown, InsertPhoto, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';

interface Props {
  id: string;
}

const MainScreenOption = ({ id }: Props) => {
  const letteringOptions = useMemo(() => getLetteringTextsById(id), [id]);
  const [image, setImage] = useState<string[] | null>(null);
  const [letteringColor, setLetteringColor] = useState<string>(color.letterYellow);
  const [letteringFont, setLetteringFont] = useState<string>('Ownglyph Kundo');
  const [letteringText, setLetteringText] = useState<string>(letteringOptions[0] || '');

  useEffect(() => {
    setLetteringText(letteringOptions[0] || '');
  }, [letteringOptions]);

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
            폰트(메인 화면 적용)
          </Text>
          <Dropdown
            option="FONT"
            name="letering-font"
            value={letteringFont}
            data={SETUP_FONT_OPTIONS}
            onChange={setLetteringFont}
          />
        </Column>
        <Column gap={8}>
          <Text fontType="P3" color={color.G900}>
            레터링 문구(화면 중앙에 위치한 문구입니다)
          </Text>
          <Dropdown
            option="DEFAULT"
            name="letering-text"
            value={letteringText}
            data={letteringOptions}
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
            data={LETTERING_COLORS_OPTIONS}
            onChange={setLetteringColor}
          />
        </Column>
        <Column gap={4}>
          <Text fontType="P3" color={color.G80}>
            · 예식 날짜는 예식 정보에서 입력됩니다.
          </Text>
          <Text fontType="P3" color={color.G80}>
            · 신랑•신부의 이름은 신랑•신부측 소개에서 입력됩니다.
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
