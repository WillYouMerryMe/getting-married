import { color, font } from '@merried/design-system';
import styled from 'styled-components';

interface Props {
  errorMessage?: string;
}

const ErrorMessage = ({ errorMessage }: Props) => {
  return errorMessage ? (
    <div style={{ position: 'relative' }}>
      <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
    </div>
  ) : null;
};

export default ErrorMessage;

const StyledErrorMessage = styled.p`
  ${font.P4};
  color: ${color.red};
  margin-top: 8px;
`;
