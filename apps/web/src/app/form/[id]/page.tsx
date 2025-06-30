'use client';

import { color } from '@merried/design-system';
import { styled } from 'styled-components';
import { flex } from '@merried/utils';
import { Options, Preview } from '@/components/form';
import AppLayout from '@/layouts/AppLayout';

const Form = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <AppLayout>
      <StyledForm>
        <Preview templateId={id} />
        <Options templateId={id} />
      </StyledForm>
    </AppLayout>
  );
};

export default Form;

const StyledForm = styled.div`
  position: relative;
  ${flex({ flexDirection: 'row', justifyContent: 'space-between' })}
  gap: 130px;
  width: 100%;
  min-height: 100vh;
  padding: 120px 120px 0px 230px;
  background: ${color.G10};
`;
