import { FormEvent, useRef, useState } from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import { GetTouchCustom } from './GetTouchCustom';

export function DropzoneButton() {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  const [templateBg, setTemplateBg] = useState('');
  const [isTemplateBgSet, setIsTemplateBgSet] = useState(false);

  const handleSubmitTemplate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsTemplateBgSet(true);
  };

  return (
    <>
      {!isTemplateBgSet && (
        <form style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} onSubmit={handleSubmitTemplate}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
            <label htmlFor="templateBg" style={{ margin: '0.8rem 0' }}>Custom background image link</label>
            <input id="templateBg" type="text" placeholder="Enter the background image link" style={{ padding: '8px' }} value={templateBg} onChange={(e) => setTemplateBg(e.target.value)} />
          </div>
          <div style={{ margin: '1rem 0' }}>
            <Button type="submit">Done</Button>
          </div>
        </form>
      )}
      {
        isTemplateBgSet &&
        <div style={{ width: '100%' }}>
            <GetTouchCustom templateBg={templateBg} />
        </div>
      }
    </>
  );
}
