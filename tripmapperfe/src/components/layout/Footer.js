import React from 'react';
import { Text, Group, useMantineTheme, Box } from '@mantine/core';

const Footer = () => {
  const theme = useMantineTheme();

  return (
    <Box
      h={30}
      px="md"
      style={{
        background: theme.colors.gray[1],
        borderTop: `1px solid ${theme.colors.gray[3]}`
      }}
    >
      <Group align="center" justify="center" h="100%">
        <Text size="sm">© {new Date().getFullYear()} Trip-Mapper</Text>
      </Group>
    </Box>
  );
};

export default Footer;
