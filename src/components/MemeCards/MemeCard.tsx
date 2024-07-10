import { useNavigate } from 'react-router-dom';
import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Group, Button, ActionIcon } from '@mantine/core';
import { saveAs } from 'file-saver';
import classes from './BadgeCard.module.css';

interface tempalteCardIterface {
  meme: string
}

export function MemeCard({ meme }: tempalteCardIterface) {
  const navigate = useNavigate();
  const downloadImage = (url) => {
    saveAs(url, 'meme.png'); // Put your image URL here.
  };
  return (
    <Card withBorder radius="md" p="md" className={classes.card} style={{ width: '20%', margin: '2rem' }}>
      <Card.Section>
        <Image src={meme} alt="" height={180} />
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1, color: 'white', backgroundColor: 'black' }} onClick={() => downloadImage(meme)}>
          Download
        </Button>
        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
  );
}
