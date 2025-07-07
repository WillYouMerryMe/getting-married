import { color } from '@merried/design-system';
import { Button, Column, Text } from '@merried/ui';
import { useCardsQuery } from '@/services/form/queries';

interface Props {
  id: string;
}

const UrlShareStyle = ({ id }: Props) => {
  const { data } = useCardsQuery(id);

  if (!data || !data?.shareUrlStyle) return null;

  const pointColor = data.invitationSetting.pointColor;

  return (
    <Column gap={8} alignItems="center">
      <Button onClick={() => {}} size="MEDIUM" pointColor={pointColor} width={185}>
        <Text fontType="Button2">카카오톡으로 공유</Text>
      </Button>
      <Button onClick={() => {}} size="MEDIUM" styleType="SECOND" width={185}>
        <Text fontType="Button2" color={color.G300}>
          청첩장 링크 복사
        </Text>
      </Button>
    </Column>
  );
};

export default UrlShareStyle;
