import { ROUTES } from '@/constants/common/constant';
import { flex } from '@merried/utils';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  preview: ReactNode;
  title: string;
}

const TemplateItem = ({ preview, title }: Props) => {
  const router = useRouter();
  const handleMoveFormPage = () => {
    router.push(ROUTES.FORM);
  };

  return (
    <StyledTemplateItem onClick={handleMoveFormPage}>
      {preview}
      {title}
    </StyledTemplateItem>
  );
};

export default TemplateItem;

const StyledTemplateItem = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  gap: 24px;
  cursor: pointer;
`;
