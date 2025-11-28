import React from 'react';
import { NavLink, Stack, Text, useMantineTheme, Box } from '@mantine/core';
import { Link } from 'react-router-dom';
import { IconHome, IconMapPin, IconCategory } from '@tabler/icons-react';

const Sidebar = () => {
  const theme = useMantineTheme();

  return (
    <Box
      w={200}
      px="sm"
      py="md"
      style={{
        background: theme.colors.gray[0],
        height: '100%',
      }}
    >
      <Stack spacing="xs">
        <NavLink
          component={Link}
          to="/"
          icon={<IconHome size={16} />}
          label={<Text>Home</Text>}
        />

        <NavLink
          component={Link}
          to="/trips"
          icon={<IconMapPin size={16} />}
          label={<Text>Trips</Text>}
        />

        <NavLink
          component={Link}
          to="/categories"
          icon={<IconCategory size={16} />}
          label={<Text>Categories</Text>}
        />
      </Stack>
    </Box>
  );
};

export default Sidebar;
