import { color } from '@merried/design-system';
import { Text } from '@merried/ui';
import { flex } from '@merried/utils';
import { ComponentType } from 'react';
import styled from 'styled-components';

interface BadgeProps {
  icon: ComponentType<{ width: number; height: number }>;
  title: string;
  onClick: () => void;
}

const Badge = ({ icon: Icon, title, onClick }: BadgeProps) => {
  return (
    <StyledBadge onClick={onClick}>
      <Icon width={14} height={14} />
      <Text fontType="P4" color={color.primary}>
        {title}
      </Text>
    </StyledBadge>
  );
};

export default Badge;

const StyledBadge = styled.button`
  ${flex({ flexDirection: 'row', alignItems: 'center' })}
  width: auto;
  height: 26px;
  background-color: ${color.primary2};
  border-radius: 6px;
  padding: 6px 8px;
  gap: 4px;

  svg {
    flex-shrink: 0;
    width: 14px !important;
    height: 14px !important;
  }
`;
