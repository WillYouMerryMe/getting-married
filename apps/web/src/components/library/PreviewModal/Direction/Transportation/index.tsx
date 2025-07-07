import { TRANSPORT_MAP } from '@/constants/form/constants';
import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import styled from 'styled-components';

interface TransportationProps {
  type: string;
  method: string;
}

const Transportation = ({ type, method }: TransportationProps) => {
  return (
    <div>
      <StyledTransportation>
        <Text fontType="H4" color={color.G900}>
          {TRANSPORT_MAP[type]}
        </Text>
        <Text fontType="P2" color={color.G80} whiteSpace="pre-wrap">
          {method}
        </Text>
      </StyledTransportation>
      <Line />
    </div>
  );
};

export default Transportation;

const StyledTransportation = styled.div`
  ${flex({ flexDirection: 'column', alignItems: 'flex-start' })}
  width: 100%;
  height: 100%;
  padding: 24px 0px;
  gap: 8px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.G40};
`;
