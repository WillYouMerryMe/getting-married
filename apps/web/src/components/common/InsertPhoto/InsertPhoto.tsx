import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import { IconCircleAdd, IconDelete } from '@merried/icon';
import { useRef, useState } from 'react';

interface Props {
  size?: 'SMALL' | 'BIG';
  disabled?: boolean;
}

const InsertPhoto = ({ size = 'SMALL', disabled = false }: Props) => {
  const [image, setImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImage(null);
  };

  return (
    <StyledInsertPhoto onClick={() => inputRef.current?.click()} $size={size}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      {image ? (
        <>
          <StyledImage src={image} alt="preview" />
          <IconDelete onClick={handleRemove} style={{ position: 'absolute' }} />
        </>
      ) : (
        <IconCircleAdd />
      )}
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

  cursor: pointer;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  border-radius: 8px;
`;
