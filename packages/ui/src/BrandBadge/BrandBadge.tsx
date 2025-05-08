import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import Text from '../Text/Text';

interface BrandBadgeProps {
  type: 'KAKAO' | 'NAVER';
}

const BrandBadge = ({ type }: BrandBadgeProps) => {
  return (
    <StyledBrandBadge $badgeType={type}>
      <Text fontType="P4" color={type === 'NAVER' ? color.G0 : color.G400}>
        {type === 'NAVER' ? '네이버' : '카카오'}
      </Text>
    </StyledBrandBadge>
  );
};

export default BrandBadge;

const StyledBrandBadge = styled.div<{ $badgeType: BrandBadgeProps['type'] }>`
  ${flex({ alignItems: 'center', justifyContent: 'center' })}
  width: 60px;
  height: 28px;
  background: ${({ $badgeType }) =>
    $badgeType === 'NAVER' ? 'rgba(4, 199, 91, 0.6)' : 'rgba(250, 225, 0, 0.6)'};
  border-radius: 999px;
  border: 1px solid
    ${({ $badgeType }) => ($badgeType === 'NAVER' ? '#04C75B' : '#fae100')};
`;
