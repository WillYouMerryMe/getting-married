import { useIsToggleHandler } from '@/hooks/useIsToggleHandler';
import { useCoupleIntroStore } from '@/store/form/coupleIntro';
import { color } from '@merried/design-system';
import { CheckBox, Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { styled } from 'styled-components';

const CoupleIntroOption = () => {
  const [coupleIntro, setCoupleIntro] = useCoupleIntroStore();

  const handleInputChange =
    (section: 'groom' | 'bride') => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setCoupleIntro((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value,
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

  const handleToggleChange = useIsToggleHandler(setCoupleIntro);

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={coupleIntro.isToggle} onToggle={handleToggleChange} />
        <Text fontType="H3" color={color.G900}>
          신랑측•신부측 소개
        </Text>
      </Row>

      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          신랑 이름<RequiredMark>*</RequiredMark>
        </Text>
        <Input
          name="name"
          width={384}
          platform="DESKTOP"
          placeholder="신랑 이름을 입력해주세요"
          value={coupleIntro.groom.name}
          onChange={handleInputChange('groom')}
        />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          아버지
        </Text>
        <Input
          name="fatherName"
          width={384}
          platform="DESKTOP"
          placeholder="아버지 이름을 입력해주세요"
          value={coupleIntro.groom.fatherName}
          onChange={handleInputChange('groom')}
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
          name="motherName"
          width={384}
          platform="DESKTOP"
          placeholder="어머니 이름을 입력해주세요"
          value={coupleIntro.groom.motherName}
          onChange={handleInputChange('groom')}
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
          name="name"
          width={384}
          platform="DESKTOP"
          placeholder="신부 이름을 입력해주세요"
          value={coupleIntro.bride.name}
          onChange={handleInputChange('bride')}
        />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          아버지
        </Text>
        <Input
          name="fatherName"
          width={384}
          platform="DESKTOP"
          placeholder="아버지 이름을 입력해주세요"
          value={coupleIntro.bride.fatherName}
          onChange={handleInputChange('bride')}
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
          name="motherName"
          width={384}
          platform="DESKTOP"
          placeholder="어머니 이름을 입력해주세요"
          value={coupleIntro.bride.motherName}
          onChange={handleInputChange('bride')}
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
