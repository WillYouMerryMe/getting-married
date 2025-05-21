import { useWeddingIntroStore } from '@/store/form/CoupleIntro';
import { color } from '@merried/design-system';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { styled } from 'styled-components';

const GroomIntroOption = () => {
  const [weddingIntro, setWeddingIntro] = useWeddingIntroStore();

  const handleGroomInputChange =
    (key: keyof typeof weddingIntro.groom) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWeddingIntro((prev) => ({
        ...prev,
        groom: { ...prev.groom, [key]: e.target.value },
      }));
    };

  const handleGroomCheckChange =
    (key: keyof typeof weddingIntro.groom) => (checked: boolean) => {
      setWeddingIntro((prev) => ({
        ...prev,
        groom: { ...prev.groom, [key]: checked },
      }));
    };

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={false} />
        <Text fontType="H3" color={color.G900}>
          신랑측 소개
        </Text>
      </Row>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          신랑 이름<RequiredMark>*</RequiredMark>
        </Text>
        <Input
          width={384}
          platform="DESKTOP"
          placeholder="신랑 이름을 입력해주세요"
          value={weddingIntro.groom.name}
          onChange={handleGroomInputChange('name')}
        />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          아버지
        </Text>
        <Input
          width={384}
          platform="DESKTOP"
          placeholder="아버지 이름을 입력해주세요"
          value={weddingIntro.groom.fatherName}
          onChange={handleGroomInputChange('fatherName')}
        />
        <CheckBox
          checked={weddingIntro.groom.isFatherDeceased}
          onChange={handleGroomCheckChange('isFatherDeceased')}
          label="고인"
        />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          어머니
        </Text>
        <Input
          width={384}
          platform="DESKTOP"
          placeholder="어머니 이름을 입력해주세요"
          value={weddingIntro.groom.motherName}
          onChange={handleGroomInputChange('motherName')}
        />
        <CheckBox
          checked={weddingIntro.groom.isMotherDeceased}
          onChange={handleGroomCheckChange('isMotherDeceased')}
          label="고인"
        />
      </Column>
    </Column>
  );
};

export default GroomIntroOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
