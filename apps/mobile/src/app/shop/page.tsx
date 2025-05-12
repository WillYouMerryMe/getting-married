'use client';

import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import styled from 'styled-components';
import Choose from './choose/choose';
import Send from './send/send';
import { SwitchCase } from '@toss/react';
import { useShopStepValueStore } from '@/stores/shop/shopStep';

const Shop = () => {
  const shopStep = useShopStepValueStore();

  return (
    <AppLayout footer backgroundColor={color.G0}>
      <StyledShop>
        <SwitchCase
          value={shopStep}
          caseBy={{
            답례품목록: <Choose />,
            답례품전송: <Send />,
          }}
        />
      </StyledShop>
    </AppLayout>
  );
};

export default Shop;

const StyledShop = styled.div`
  width: 100%;
  padding: 71px 12px 142px;
`;
