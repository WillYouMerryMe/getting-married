import { color } from '@merried/design-system';
import { Column, Row, ToggleButton, Text, Input, InsertPhoto } from '@merried/ui';
import { useState } from 'react';

const GalleryOption = () => {
  const [image, setImage] = useState<string[] | null>(null);

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={false} />
        <Text fontType="H3" color={color.G900}>
          갤러리
        </Text>
      </Row>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          제목
        </Text>
        <Input width={384} platform="DESKTOP" placeholder="제목을 입력해주세요" />
      </Column>
      <Column gap={16}>
        <InsertPhoto size="BIG" value={image} onChange={setImage} />
        <Column gap={4}>
          <Text fontType="P3" color={color.G80}>
            · 1장당 100MB까지 업로드 가능합니다.
          </Text>
          <Text fontType="P3" color={color.G80}>
            · 최대 20장 업로드 가능합니다.
          </Text>
        </Column>
      </Column>
    </Column>
  );
};

export default GalleryOption;
