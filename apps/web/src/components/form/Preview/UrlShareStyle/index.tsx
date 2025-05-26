import { useInvitationSetupValueStore } from '@/store/form/invitationSetup';
import { useUrlShareStyleValueStore } from '@/store/form/urlShareStyle';
import { color } from '@merried/design-system';
import { Button, Column, Text } from '@merried/ui';

const UrlShareStyle = () => {
  const { isToggle } = useUrlShareStyleValueStore();
  const { pointColor } = useInvitationSetupValueStore();

  if (!isToggle) return null;

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
