import { FormEvent, useEffect, useState } from 'react';
import { Paper, Text, TextInput, Button, Group } from '@mantine/core';
import { saveAs } from 'file-saver';
import classes from './GetInTouch.module.css';

interface memeFormInterface {
  template_id: string;
  text: string[];
  redirect: boolean;
}

interface memeTemplateInterface {
  id: string,
  name: string,
  lines: number,
  overlays: number,
  styles: string[],
  blank: string,
  example: {
    text: string[],
    url: string
  },
  source: string,
  keywords: string[],
  _self: string,
}

interface memeResultInterface {
  url: string,
}

export function GetInTouch() {
  const [result, setResult] = useState<memeResultInterface | null>(null);
  const [template, setTemplate] = useState<memeTemplateInterface | null>(null);
  const fetchTemplateById = async () => {
    try {
      const response = await fetch(
        `https://api.memegen.link/templates/${window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]}`
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setTemplate(data);
        if (!template) return;
        for (let i = 0; i < template.lines; i++) {
          memeForm.text.push('');
        }
      } else {
        console.log('error occured while fetching templates');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [memeForm, setMemeForm] = useState<memeFormInterface>({
    template_id:
      window.location.pathname.split('/')[window.location.pathname.split('/').length - 1],
    text: [],
    redirect: false,
  });

  const handleGenerateMeme = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('https://api.memegen.link/images', {
        method: 'POST',
        body: JSON.stringify(memeForm),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log('Meme genrated succesfuly');
        setResult(data);
        let allYourMemes: string[] = [];
        const your_memes = localStorage.getItem('memegenpromemes');
        console.log('your_memes: ', your_memes);
        if (your_memes) {
          allYourMemes = JSON.parse(your_memes);
          console.log(allYourMemes);
          allYourMemes.push(data.url);
          localStorage.setItem('memegenpromemes', JSON.stringify(allYourMemes));
        } else {
          allYourMemes.push(data.url);
          localStorage.setItem('memegenpromemes', JSON.stringify(allYourMemes));
        }
      } else {
        console.log('error occured while generating meme from template');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const downloadImage = (url: string) => {
    saveAs(url, 'meme.png'); // Put your image URL here.
  };

  useEffect(() => {
    fetchTemplateById();
  }, []);
  return (
    <>
      <Paper shadow="md" radius="lg">
        <div className={`${classes.wrapper} template-edit-container`}>
          <div className={classes.contacts}>
            <img
              src={template ? template.blank : ''}
              alt=""
              style={{ padding: '25px', maxWidth: '500px' }}
            />
          </div>
          <form className={`${classes.form} template-edit-form`} onSubmit={handleGenerateMeme}>
            <Text fz="lg" fw={700} className={classes.title} style={{ color: 'black' }}>
              Edit Template
            </Text>

            <div className={classes.fields}>
              {template &&
                template.example.text.map((element, i: number) => (
                  <TextInput
                    key={i}
                    mt="md"
                    value={memeForm.text[i]}
                    onChange={(e) => {
                      const tempTextArray = memeForm.text;
                      tempTextArray[i] = e.target.value;
                      setMemeForm({ ...memeForm, text: tempTextArray });
                    }}
                    placeholder={`text ${i + 1}`}
                    required
                  />
                ))}

              <Group justify="flex-end" mt="md">
                <Button type="submit" className={classes.control} style={{ width: '100%' }}>
                  Generate
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
      {result && (
        <Paper shadow="md" radius="lg">
          <div className={`${classes.wrapper} template-result-container`}>
            <div className={classes.contacts}>
              <img
                src={result && result.url}
                alt=""
                style={{ padding: '25px', maxWidth: '500px' }}
              />
            </div>
            <div>
              <div style={{ marginBottom: '2rem', width: '100%' }}>
                <p style={{ color: 'gray' }}>Download your meme here.</p>
                <img src="../download_image.png" alt="" style={{ width: '30%' }} />
              </div>
              <Button className={classes.control} style={{ width: '80%' }} onClick={() => downloadImage(result.url)}>
                Download
              </Button>
            </div>
          </div>
        </Paper>
      )}
    </>
  );
}
