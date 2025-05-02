import { color } from '@merried/design-system';
import { flex } from '@merried/utils';
import styled from 'styled-components';
import FooterItem from './FooterItem/FooterItem';
import { IconBag, IconLetter, IconList, IconProfile } from '@merried/icon';
import { ROUTES } from '@/constants/common/constant';

const NAVIGATION_LIST = [
  { icon: IconLetter, name: '청첩장', route: ROUTES.HOME },
  { icon: IconList, name: '참석자 관리', route: ROUTES.MANAGE },
  { icon: IconBag, name: '답례품', route: ROUTES.SHOP },
  { icon: IconProfile, name: '마이페이지', route: ROUTES.MY },
];

const Footer = () => (
  <StyledFooter>
    {NAVIGATION_LIST.map(({ icon, name, route }) => (
      <FooterItem key={route} icon={icon} name={name} route={route} />
    ))}
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.div`
  ${flex({ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' })}
  width: 100%;
  height: 105px;
  background-color: ${color.G0};
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  padding: 12px 32px calc(env(safe-area-inset-bottom) + 46px);
`;
