import { flex } from '@merried/utils';
import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface Props {
  filed: ReactNode;
  title: string;
}

const TemplateItem = ({ filed, title }: Props) => {
  return (
    <StyledTemplateItem>
      {filed}
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
