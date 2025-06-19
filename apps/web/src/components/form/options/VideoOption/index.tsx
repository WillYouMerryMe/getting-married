import { useIsToggleHandler } from '@/hooks/useIsToggleHandler';
import { useWeddingIntroStore } from '@/store/form/weddingIntro';
import { color } from '@merried/design-system';
import { Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { styled } from 'styled-components';

const VideoOption = () => {
  const [weddingIntro, setWeddingIntro] = useWeddingIntroStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWeddingIntro((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = useIsToggleHandler(setWeddingIntro);

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={weddingIntro.isToggle} onToggle={handleToggleChange} />
        <Text fontType="H3" color={color.G900}>
          영상
        </Text>
      </Row>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          영상 제목
        </Text>
        <Input
          name="title"
          width={384}
          platform="DESKTOP"
          placeholder="제목을 입력해주세요"
          value={weddingIntro.title}
          onChange={handleChange}
        />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          유튜브 URL<RequiredMark>*</RequiredMark>
        </Text>
        <Input
          name="vedioURL"
          width={384}
          platform="DESKTOP"
          placeholder="URL을 입력해주세요"
          value={weddingIntro.vedioURL}
          onChange={handleChange}
        />
      </Column>
    </Column>
  );
};

export default VideoOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
