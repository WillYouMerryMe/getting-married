import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import { IconCircleAdd } from '@merried/icon';
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
        <img
          src={image}
          alt="preview"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
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
