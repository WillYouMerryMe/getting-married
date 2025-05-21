import { useCoupleIntroStore } from '@/store/form/coupleIntro';
import { color } from '@merried/design-system';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { styled } from 'styled-components';

const CoupleIntroOption = () => {
  const [coupleIntro, setCoupleIntro] = useCoupleIntroStore();

  const handleInputChange =
    (section: 'groom' | 'bride', key: keyof (typeof coupleIntro)['groom']) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCoupleIntro((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: e.target.value,
        },
      }));
    };

  const handleCheckChange =
    (section: 'groom' | 'bride', key: keyof (typeof coupleIntro)['groom']) =>
    (checked: boolean) => {
      setCoupleIntro((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: checked,
        },
      }));
    };

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={false} />
        <Text fontType="H3" color={color.G900}>
          신랑측•신부측 소개
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
          value={coupleIntro.groom.name}
          onChange={handleInputChange('groom', 'name')}
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
          value={coupleIntro.groom.fatherName}
          onChange={handleInputChange('groom', 'fatherName')}
        />
        <CheckBox
          checked={coupleIntro.groom.isFatherDeceased}
          onChange={handleCheckChange('groom', 'isFatherDeceased')}
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
          value={coupleIntro.groom.motherName}
          onChange={handleInputChange('groom', 'motherName')}
        />
        <CheckBox
          checked={coupleIntro.groom.isMotherDeceased}
          onChange={handleCheckChange('groom', 'isMotherDeceased')}
          label="고인"
        />
      </Column>

      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          신부 이름<RequiredMark>*</RequiredMark>
        </Text>
        <Input
          width={384}
          platform="DESKTOP"
          placeholder="신부 이름을 입력해주세요"
          value={coupleIntro.bride.name}
          onChange={handleInputChange('bride', 'name')}
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
          value={coupleIntro.bride.fatherName}
          onChange={handleInputChange('bride', 'fatherName')}
        />
        <CheckBox
          checked={coupleIntro.bride.isFatherDeceased}
          onChange={handleCheckChange('bride', 'isFatherDeceased')}
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
          value={coupleIntro.bride.motherName}
          onChange={handleInputChange('bride', 'motherName')}
        />
        <CheckBox
          checked={coupleIntro.bride.isMotherDeceased}
          onChange={handleCheckChange('bride', 'isMotherDeceased')}
          label="고인"
        />
      </Column>
    </Column>
  );
};

export default CoupleIntroOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
