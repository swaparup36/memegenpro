import { useEffect } from 'react';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { HeroBullets } from '@/components/Hero/HeroBullets';

export function HomePage() {
  useEffect(() => {
    document.title = 'Memegen Pro';
  });
  return (
    <>
      <HeaderMenu />
      <HeroBullets />
      <FooterSocial />
    </>
  );
}
