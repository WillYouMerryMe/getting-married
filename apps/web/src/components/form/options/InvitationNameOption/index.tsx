import { useMainStore } from '@/store/form/main';
import { color } from '@merried/design-system';
import { Column, Input, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { useEffect } from 'react';
import { styled } from 'styled-components';

interface Props {
  id: string;
}

const InvitationNameOption = ({ id }: Props) => {
  const [main, setMain] = useMainStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMain((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    setMain((prev) => ({ ...prev, templateId: id }));
  }, []);

  return (
    <StyledInvitationNameOption>
      <Column gap={14}>
        <Text fontType="H3" color={color.G900}>
          청접장 명
          <Text fontType="P2" color={color.red}>
            *
          </Text>
        </Text>
        <Input
          name="title"
          width={384}
          platform="DESKTOP"
          placeholder="청첩장별로 구별할 수 있는 이름을 적어주세요"
          value={main.title}
          onChange={handleChange}
        />
      </Column>
    </StyledInvitationNameOption>
  );
};

export default InvitationNameOption;

const StyledInvitationNameOption = styled.div`
  ${flex({ justifyContent: 'space-between', alignItems: 'flex-start' })}
  padding: 28px 20px;
  width: 548px;
  border-radius: 8px;
  background: ${color.G0};
`;
