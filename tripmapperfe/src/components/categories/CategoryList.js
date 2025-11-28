import React from 'react';
import { Card, Text, Stack, Group, Badge } from '@mantine/core';

const CategoryList = () => {
  // Placeholder list visual only
  const placeholder = [
    { id: 1, title: 'Food' },
    { id: 2, title: 'Museums' },
    { id: 3, title: 'Parks' },
  ];

  return (
    <Stack spacing="sm">
      {placeholder.map((c) => (
        <Card key={c.id} shadow="xs" padding="sm">
          <Group position="apart">
            <Text weight={500}>{c.title}</Text>
            <Badge color="gray" variant="light">3</Badge>
          </Group>
        </Card>
      ))}
    </Stack>
  );
};

export default CategoryList;
