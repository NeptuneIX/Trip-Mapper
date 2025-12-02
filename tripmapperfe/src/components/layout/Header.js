import React from 'react';
import { Group, Anchor, Text, useMantineTheme, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { IconHome, IconMapPin, IconCategory, IconLogin, IconDoorEnter } from '@tabler/icons-react';

const Header = () => {
  const small = useMediaQuery('(max-width: 768px)');
  const theme = useMantineTheme();
  // Replace this with user authentication logic, probably with useContext instead of useState
  const [user, setUser] = React.useState(null);

  return (
    <Box
      h={60}
      px="md"
      style={{
        backgroundColor: theme.colors.gray[0],
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Group
        w="100%"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Group spacing="sm">
          <Text fw={700}>Trip-Mapper</Text>

          {!small && (
            <Group spacing="xs">
              <Anchor component={Link} to="/" style={{ display: 'flex', alignItems: 'center', color: theme.colors.gray[8] }}>
                <IconHome size={16} style={{ marginRight: 6 }} /> Home
              </Anchor>

              <Anchor component={Link} to="/trips" style={{ display: 'flex', alignItems: 'center', color: theme.colors.gray[8] }}>
                <IconMapPin size={16} style={{ marginRight: 6 }} /> Trips
              </Anchor>

              <Anchor component={Link} to="/categories" style={{ display: 'flex', alignItems: 'center', color: theme.colors.gray[8] }}>
                <IconCategory size={16} style={{ marginRight: 6 }} /> Categories
              </Anchor>
            </Group>
          )}
        </Group>


        {user ? <Text backgroundColor={theme.colors.gray[6]}>Welcome, {user}</Text> :
          <Group spacing="xs">
            <Anchor component={Link} to="/login" style={{ display: 'flex', alignItems: 'center', color: theme.colors.green[6] }}>
              <IconLogin size={16} style={{ marginRight: 6 }} /> Log in
            </Anchor>
            <Anchor component={Link} to="/register" style={{ display: 'flex', alignItems: 'center', color: theme.colors.green[6] }}>
              <IconDoorEnter size={16} style={{ marginRight: 6 }} /> Register
            </Anchor>
          </Group>
        }
      </Group>
    </Box>
  );
};

export default Header;
