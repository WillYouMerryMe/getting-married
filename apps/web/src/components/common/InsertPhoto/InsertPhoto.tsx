import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import { IconCircleAdd } from '@merried/icon';

interface Props {
  size?: 'SMALL' | 'BIG';
  value?: File[] | null;
  onChange?: (file: File | null) => void;
  disabled?: boolean;
}

const InsertPhoto = ({ size = 'SMALL', value, onChange, disabled = false }: Props) => {
  return (
    <StyledInsertPhoto $size={size}>
      <IconCircleAdd />
    </StyledInsertPhoto>
  );
};

export default InsertPhoto;

const StyledInsertPhoto = styled.div<{
  $size: 'SMALL' | 'BIG';
}>`
  ${flex({ justifyContent: 'center', alignItems: 'center' })}
  border-radius: 8px;
  border: 1px dashed ${color.G80};
  background: ${color.G0};
  width: ${({ $size }) => ($size === 'SMALL' ? '140px' : '384px')};
  height: 140px;
`;
