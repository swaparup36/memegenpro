import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { HeroBullets } from '@/components/Hero/HeroBullets';

export function HomePage() {
  return (
    <>
      <HeaderMenu />
      <HeroBullets />
      <FooterSocial />
    </>
  );
}
