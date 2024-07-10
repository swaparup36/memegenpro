import { Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';
import { useNavigate } from 'react-router-dom';

export function HeroBullets() {
  const navigate = useNavigate();
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> Meme <br /> generating website
          </Title>
          <Text c="dimmed" mt="md">
           Create and share memes with our site, using pre-made or custom templates.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Pre available templates</b> – get tons of pre-available popular templates
            </List.Item>
            <List.Item>
              <b>Custom templates</b> – use your own templates to generate custom memes
              any project
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} onClick={() => navigate('/explore-templates')}>
              Explore Templates
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control} onClick={() => navigate('/custom-template')}>
              Custom Template
            </Button>
          </Group>
        </div>
        <img src="https://i.imgflip.com/8vs6s0.jpg" alt="" style={{ width: '30%' }} />
      </div>
    </Container>
  );
}
