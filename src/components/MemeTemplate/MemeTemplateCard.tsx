import { useNavigate } from 'react-router-dom';
import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Group, Button, ActionIcon } from '@mantine/core';
import classes from './BadgeCard.module.css';

interface tempalteCardIterface {
  template: {
    blank: string,
    name: string,
    id: string
  }
}

export function MemeTemplateCard({ template }: tempalteCardIterface) {
  const navigate = useNavigate();
  return (
    <Card withBorder radius="md" p="md" className={`${classes.card} template-cards`}>
      <Card.Section>
        <Image src={template.blank} alt={template.name} height={180} />
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1, color: 'white', backgroundColor: 'black' }} onClick={() => navigate(`/templates/${template.id}`)}>
          Use tempalte
        </Button>
        {/* <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon> */}
      </Group>
    </Card>
  );
}
