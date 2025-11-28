import React from 'react';
import { Container, Grid, Title } from '@mantine/core';
import CategoryList from '../components/categories/CategoryList';
import CategoryForm from '../components/categories/CategoryForm';

const CategoriesPage = () => {
	return (
		<Container size="lg" style={{ paddingTop: 24 }}>
			<Title order={2} mb="md">Categories</Title>
			<Grid gutter="md">
				<Grid.Col span={8}>
					<CategoryList />
				</Grid.Col>
				<Grid.Col span={4}>
					<CategoryForm />
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default CategoriesPage;
