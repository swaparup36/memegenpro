import { useEffect, useState } from 'react';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { MemeCard } from '@/components/MemeCards/MemeCard';

export function YourMemes() {
  const [memes, setMemes] = useState<string[]>([]);

  useEffect(() => {
    const your_memes = localStorage.getItem('memegenpromemes');
    if (your_memes) {
      setMemes(JSON.parse(your_memes));
    }

    document.title = 'Memegen Pro | Your memes';
  }, []);
  return (
    <>
      <HeaderMenu />
      <div className="template-container">
        {
          memes.map((meme, i) => <MemeCard key={i} meme={meme} />)
        }
      </div>
      <FooterSocial />
    </>
  );
}
