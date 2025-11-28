import React from 'react';
import { Card, TextInput, Button, Stack, Title } from '@mantine/core';

const CategoryForm = () => {
  return (
    <Card shadow="xs" padding="md">
      <Stack spacing="sm">
        <Title order={4}>New Category</Title>
        <TextInput placeholder="Category name" />
        <Button>Save</Button>
      </Stack>
    </Card>
  );
};

export default CategoryForm;
