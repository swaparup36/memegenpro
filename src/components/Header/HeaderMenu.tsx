import { Group, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/your-memes', label: 'Your memes' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    console.log('first');

    return (
      <Link
        key={link.label}
        to={link.link}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header} style={{ marginBottom: '1rem' }}>
      <Container size="md">
        <div className={classes.inner}>
          {/* <MantineLogo style={{ cursor: 'pointer' }} size={28} onClick={() => navigate('/')} /> */}
          <div style={{ width: '20%' }}>
            <img src="./memegenpro_logo.png" alt="" style={{ width: '100%' }} />
          </div>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
