'use client';

import { color, getTemplateFontStyle } from '@merried/design-system';
import { styled } from 'styled-components';
import { flex } from '@merried/utils';
import { Options, Preview } from '@/components/form';
import AppLayout from '@/layouts/AppLayout';

const Form = () => {
  return (
    <AppLayout>
      <StyledForm>
        <Preview />
        <Options />
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
  padding: 40px 120px 0px 230px;
  background: ${color.G10};
`;
