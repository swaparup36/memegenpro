import { useEffect, useState } from 'react';
import { Paper, Text, TextInput, Button, Group } from '@mantine/core';
import { saveAs } from 'file-saver';
import classes from './GetInTouchCustom.module.css';

interface memeFormInterface {
  background: string;
  text: string[];
  extension: string;
  redirect: boolean;
}

export function GetTouchCustom({ templateBg }) {
  const [result, setResult] = useState(null);

  const [memeForm, setMemeForm] = useState<memeFormInterface>({
    background: templateBg,
    text: [],
    extension: 'png',
    redirect: false,
  });

  const [textFields, setTextFilelds] = useState([0]);

  const handleGenerateMeme = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://api.memegen.link/templates/custom', {
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
          allYourMemes.push(data.url);
          localStorage.setItem('memegenpromemes', JSON.stringify(allYourMemes));
        } else {
          allYourMemes.push(data.url);
          console.log('before pushing: ', allYourMemes);
          localStorage.setItem('memegenpromemes', JSON.stringify(allYourMemes));
        }
      } else {
        console.log('error occured while generating meme from template');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const downloadImage = (url) => {
    saveAs(url, 'meme.png'); // Put your image URL here.
  };

  return (
    <>
      <Paper shadow="md" radius="lg" style={{ boxShadow: 'none' }}>
        <div className={`${classes.wrapper} template-edit-container-custom`}>
          <div className={classes.contacts}>
            <img src={templateBg} alt="" style={{ padding: '25px', maxWidth: '500px' }} />
          </div>
          <form className={`${classes.form} template-edit-form`} onSubmit={handleGenerateMeme}>
            <Text fz="lg" fw={700} className={classes.title} style={{ color: 'black' }}>
              Edit Template
            </Text>

            <div className={classes.fields}>
              {textFields.map((element, i) => (
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
              <Button
                style={{ width: '20%', marginTop: '0.5rem' }}
                onClick={() => {
                  setTextFilelds([...textFields, 0]);
                }}
                type="button"
              >
                Add
              </Button>

              <div style={{ margin: '1rem 0' }}>
                <input
                  type="radio"
                  id="option1"
                  value="png"
                  checked={memeForm.extension === 'png'}
                  onChange={() => setMemeForm({ ...memeForm, extension: 'png' })}
                />
                <label htmlFor="option1" style={{ color: 'gray' }}>
                  PNG
                </label>
                <input
                  type="radio"
                  id="option2"
                  value="jpg"
                  checked={memeForm.extension === 'jpg'}
                  onChange={() => setMemeForm({ ...memeForm, extension: 'jpg' })}
                />
                <label htmlFor="option2" style={{ color: 'gray' }}>
                  JPG
                </label>
              </div>

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
              <Button
                className={classes.control}
                style={{ width: '80%' }}
                onClick={() => downloadImage(result.url)}
              >
                Download
              </Button>
            </div>
          </div>
        </Paper>
      )}
    </>
  );
}
