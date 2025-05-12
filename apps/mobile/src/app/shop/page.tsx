'use client';

import AppLayout from '@/layouts/AppLayout';
import { color } from '@merried/design-system';
import styled from 'styled-components';
import Choose from './choose/choose';
import Send from './send/send';
import { SwitchCase } from '@toss/react';
import { useShopStepStore } from '@/stores/shop/shopStep';

const Shop = () => {
  const [shopStep, setShopStep] = useShopStepStore();

  const handleBackPage = () => {
    setShopStep('답례품목록');
  };

  return (
    <AppLayout
      header={shopStep === '답례품전송'}
      onClick={handleBackPage}
      footer
      backgroundColor={color.G0}
    >
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
