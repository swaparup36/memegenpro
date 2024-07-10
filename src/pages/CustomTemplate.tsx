import { DropzoneButton } from '@/components/CustomUpload/DropzoneButton';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeaderMenu } from '@/components/Header/HeaderMenu';

export function CustomTemplate() {
  return (
    <>
      <HeaderMenu />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75svh' }}>
        <DropzoneButton />
      </div>
      <FooterSocial />
    </>
  );
}
