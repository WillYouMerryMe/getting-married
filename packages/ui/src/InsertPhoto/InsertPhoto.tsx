import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import { styled } from 'styled-components';
import { IconCircleAdd, IconDelete } from '@merried/icon';
import { useRef } from 'react';

interface Props {
  size?: 'SMALL' | 'BIG';
  value: string[] | null;
  onChange: (image: string[] | null) => void;
  disabled?: boolean;
}

const MAX_FILES = 20;

const InsertPhoto = ({ size = 'SMALL', value, onChange, disabled = false }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (files.length === 0) return;

    if (size === 'SMALL') {
      const file = files[0]!;
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange([reader.result as string]);
      };
      reader.readAsDataURL(file);
      return;
    }

    const current = value ?? [];
    const validFiles = files.slice(0, MAX_FILES - current.length);

    const readers = validFiles.map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((images) => {
      const updated = [...current, ...images];
      onChange(updated);
    });
  };

  const handleRemove = (index: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!value) return;

    const updated = [...value];
    updated.splice(index, 1);

    onChange(updated.length > 0 ? updated : null);
  };

  return (
    <StyledInsertPhoto onClick={() => inputRef.current?.click()} $size={size}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={size === 'BIG'}
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
      {value ? (
        value.map((src, index) => (
          <StyledImageWrapper key={index} $size={size}>
            <StyledImage src={src} alt={`uploaded-${index}`} />
            <StyledDeleteIcon onClick={handleRemove(index)} />
          </StyledImageWrapper>
        ))
      ) : (
        <StyledCircleAddIcon />
      )}
    </StyledInsertPhoto>
  );
};

export default InsertPhoto;

const StyledInsertPhoto = styled.div<{ $size: 'SMALL' | 'BIG' }>`
  position: relative;
  border-radius: 8px;
  border: 1px dashed ${color.G80};
  background: ${color.G0};
  min-height: 140px;

  ${({ $size }) =>
    $size === 'SMALL'
      ? `
        ${flex({ justifyContent: 'center', alignItems: 'center' })};
        width: 140px;
        height: 140px;
      `
      : `
        display: grid;
        width: 384px;
        grid-template-columns: repeat(3, 100px);
        gap: 16px;
        padding: 20px 26px;
        cursor: pointer;
      `}
`;

const StyledImageWrapper = styled.div<{ $size: 'SMALL' | 'BIG' }>`
  position: relative;
  overflow: hidden;
  width: 100%;

  ${({ $size }) =>
    $size === 'SMALL'
      ? `
        height: 140px;
        border-radius: 8px;
      `
      : `
        height: 100px;
        border-radius: 4px;
      `}
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const centerAbsolute = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  cursor: pointer;
`;

const StyledDeleteIcon = styled(IconDelete)`
  ${centerAbsolute}
`;

const StyledCircleAddIcon = styled(IconCircleAdd)`
  ${centerAbsolute}
`;
