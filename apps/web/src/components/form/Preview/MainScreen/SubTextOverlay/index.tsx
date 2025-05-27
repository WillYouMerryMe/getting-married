import { StyleConfig } from '@/types/form/client';
import { formatWeddingDate, getWeddingPosition } from '@/utils';
import { color, getTemplateFontStyle } from '@merried/design-system';
import styled from 'styled-components';

interface Props {
  id: string;
  groomName: string;
  brideName: string;
  dateStr: string;
}

const SubTextOverlay = ({ id, groomName, brideName, dateStr }: Props) => {
  const [groom, bride, date] = getWeddingPosition(id);

  return (
    <div className="container">
      {groom && (
        <TextElement $id={id} config={groom}>
          {groomName}
        </TextElement>
      )}
      {bride && (
        <TextElement $id={id} config={bride}>
          {brideName}
        </TextElement>
      )}
      {date && (
        <TextElement $id={id} config={date}>
          {formatWeddingDate(id, dateStr)}
        </TextElement>
      )}
    </div>
  );
};

export default SubTextOverlay;

const TextElement = styled.div<{ $id: string; config: StyleConfig }>`
  position: absolute;
  top: ${({ config }) => config.top};
  ${({ config }) => config.left && `left: ${config.left};`}
  ${({ config }) => config.right && `right: ${config.right};`}
  ${({ config }) =>
    config.center &&
    `
      left: 50%;
      transform: translateX(-50%);
    `}
  ${({ $id, config }) => getTemplateFontStyle(`template${$id}`, config.font)}
  color: ${color.G0}
`;
