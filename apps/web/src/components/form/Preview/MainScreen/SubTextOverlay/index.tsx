import { StyleConfig } from '@/types/form/client';
import { formatWeddingDate, getWeddingPosition } from '@/utils';
import { color, getTemplateFontStyle } from '@merried/design-system';
import styled from 'styled-components';

interface Props {
  id: string;
  groomName: string;
  brideName: string;
  dateStr: string;
  color: string;
}

const SubTextOverlay = ({ id, groomName, brideName, dateStr, color }: Props) => {
  const [groom, bride, date, subTitle] = getWeddingPosition(id);

  return (
    <div className="container">
      {groom && (
        <TextElement $id={id} config={groom} $color={color}>
          {groomName}
        </TextElement>
      )}
      {bride && (
        <TextElement $id={id} config={bride} $color={color}>
          {brideName}
        </TextElement>
      )}
      {date && (
        <TextElement $id={id} config={date} $color={color}>
          {formatWeddingDate(id, dateStr)}
        </TextElement>
      )}
      {subTitle && (
        <TextElement $id={id} config={subTitle} $center $color={color}>
          {`가장 아름다울 날, \n 여러분을 초대합니다.`}
        </TextElement>
      )}
    </div>
  );
};

export default SubTextOverlay;

const TextElement = styled.div<{
  $id: string;
  config: StyleConfig;
  $center?: boolean;
  $color: string;
}>`
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
  ${({ $color }) => `color: ${$color};`}
  white-space: pre;
  ${({ $center }) => $center && 'text-align: center;'}
`;
