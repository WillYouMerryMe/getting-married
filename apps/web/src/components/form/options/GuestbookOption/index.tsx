import { useIsToggleHandler } from '@/hooks/useIsToggleHandler';
import { useGuestbookStore } from '@/store/form/guestbook';
import { color } from '@merried/design-system';
import { Column, Input, Row, Text, ToggleButton } from '@merried/ui';
import { styled } from 'styled-components';

const GuestbookOption = () => {
  const [guestbook, setGuestbook] = useGuestbookStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuestbook((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = useIsToggleHandler(setGuestbook);

  return (
    <Column gap={28}>
      <Row gap={8}>
        <ToggleButton isOpen={guestbook.isToggle} onToggle={handleToggleChange} />
        <Text fontType="H3" color={color.G900}>
          방명록
        </Text>
      </Row>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          제목
        </Text>
        <Input
          name="title"
          width={384}
          platform="DESKTOP"
          placeholder="제목을 입력해주세요"
          value={guestbook.title}
          onChange={handleChange}
        />
      </Column>
      <Column gap={8}>
        <Text fontType="P3" color={color.G900}>
          마스터 비밀번호<RequiredMark>*</RequiredMark>
        </Text>
        <Input
          name="password"
          width={384}
          platform="DESKTOP"
          placeholder="방명록을 열 비밀번호를 입력해주세요"
          value={guestbook.password}
          onChange={handleChange}
        />
      </Column>
    </Column>
  );
};

export default GuestbookOption;

const RequiredMark = styled.span`
  color: ${color.red};
  font-family: 'Pretendard Variable';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
`;
