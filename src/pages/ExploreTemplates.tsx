import { useEffect, useState } from 'react';
import { FooterSocial } from '@/components/Footer/FooterSocial';
import { HeaderMenu } from '@/components/Header/HeaderMenu';
import { MemeTemplateCard } from '@/components/MemeTemplate/MemeTemplateCard';

interface tempalteterface {
  blank: string,
  name: string,
  id: string
}

export function ExploreTemplates() {
  const [templates, setTemplates] = useState<tempalteterface[]>([]);

  const fetchAllTemplates = async () => {
    try {
      const response = await fetch('https://api.memegen.link/templates');
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setTemplates(data);
      } else {
        console.log('error occured while fetching templates');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllTemplates();
    document.title = 'Memegen Pro | Explore';
  }, []);
  return (
    <>
      <HeaderMenu />
      <div className="template-container">
        {
          templates.map((template) => <MemeTemplateCard key={template.id} template={template} />)
        }
      </div>
      <FooterSocial />
    </>
  );
}
