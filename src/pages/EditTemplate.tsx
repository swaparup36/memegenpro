import { useEffect } from 'react';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { GetInTouch } from '@/components/MemeTemplateEdit/GetInTouch';

export function EditTemplate() {
  useEffect(() => {
    document.title = 'Memegen Pro | Edit Template';
  });
  return (
    <>
      <HeaderMenu />
      <GetInTouch />
      <FooterSocial />
    </>
  );
}
