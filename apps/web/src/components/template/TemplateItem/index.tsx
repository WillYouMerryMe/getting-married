import { ROUTES } from '@/constants/common/constant';
import { color } from '@merried/design-system';
import { DesktopButton, Text } from '@merried/ui';
import { flex } from '@merried/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';

interface Props {
  id: number;
  path: string;
  title: string;
}

const TemplateItem = ({ id, path, title }: Props) => {
  const router = useRouter();

  const handleMoveFormPage = () => {
    router.push(`${ROUTES.FORM}/${id}`);
  };

  return (
    <StyledTemplateItem>
      <ImageWrapper>
        <Image src={path} width={284} height={615} alt={title} />
        <Overlay>
          <DesktopButton
            styleType="DEFAULT"
            size="SMALL"
            width={136}
            onClick={handleMoveFormPage}
          >
            템플릿 선택
          </DesktopButton>
          <Text fontType="P3" color={color.G0}>
            또는
          </Text>
          <Text fontType="P3" color={color.G0} underline={true}>
            청첩장 미리보기
          </Text>
        </Overlay>
      </ImageWrapper>
      {title}
    </StyledTemplateItem>
  );
};

export default TemplateItem;

const StyledTemplateItem = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  gap: 24px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 284px;
  height: 615px;
  cursor: pointer;
`;

const Overlay = styled.div`
  ${flex({ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' })}
  position: absolute;
  top: 0;
  left: 0;
  width: 284px;
  height: 615px;
  gap: 12px;

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(25px);

  ${ImageWrapper}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;
