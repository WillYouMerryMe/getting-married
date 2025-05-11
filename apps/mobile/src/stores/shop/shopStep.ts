import { ShopStep } from '@/types/shop/client';
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

const shopStepAtomState = atom<ShopStep>({
  key: 'shop-step',
  default: '답례품목록',
});

export const useShopStepStore = () => useRecoilState(shopStepAtomState);
export const useSetShopStepStore = () => useSetRecoilState(shopStepAtomState);
export const useShopStepValueStore = () => useRecoilValue(shopStepAtomState);
