import { useToast } from '@/utils/useToast';
import { color } from '@merried/design-system';
import { Button, Column, Text } from '@merried/ui';

interface ShareURLProps {
  id: string;
  pointColor: string;
}

const ShareURL = ({ pointColor, id }: ShareURLProps) => {
  const { show } = useToast();

  const handleCopyUrl = () => {
    const baseUrl = window.location.origin;
    const invitationUrl = `${baseUrl}/invitation/${id}`;
    navigator.clipboard
      .writeText(invitationUrl)
      .then(() => {
        show('복사했습니다', 'SUCCESS');
      })
      .catch(() => {
        show('복사에 실패했습니다', 'ERROR');
      });
  };

  const handleWebShare = () => {
    const url = `${window.location.origin}/invitation/${id}`;

    if (navigator.share) {
      navigator.share({
        url: url,
      });
    } else {
      show('공유 기능을 지원하지 않는 브라우저입니다.', 'ERROR');
    }
  };

  return (
    <Column gap={8} alignItems="center">
      <Button onClick={handleWebShare} size="MEDIUM" pointColor={pointColor} width={185}>
        <Text fontType="Button2">카카오톡으로 공유</Text>
      </Button>
      <Button onClick={handleCopyUrl} size="MEDIUM" styleType="SECOND" width={185}>
        <Text fontType="Button2" color={color.G300}>
          청첩장 링크 복사
        </Text>
      </Button>
    </Column>
  );
};

export default ShareURL;
