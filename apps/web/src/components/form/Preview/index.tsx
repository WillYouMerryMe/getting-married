import { flex } from '@merried/utils';
import { styled } from 'styled-components';

interface Props {
  id?: string;
}

const Preview = ({ id }: Props) => {
  return (
    <StyledPreview>
      <ImageLayer />
    </StyledPreview>
  );
};
export default Preview;

const StyledPreview = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 375px;
  gap: 20px;
`;

const ImageLayer = styled.div`
  ${flex({ flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' })}
  background-image: url('/templateFull1.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  width: 100%;
  height: 812px;
`;
