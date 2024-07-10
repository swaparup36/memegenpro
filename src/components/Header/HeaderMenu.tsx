import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Link, useNavigate } from 'react-router-dom';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/your-memes', label: 'Your memes' },
];

export function HeaderMenu() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link
              to={link.link}
              className={classes.link}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

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
