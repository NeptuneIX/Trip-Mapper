import React from 'react';
import { Container, Title, Group, Button, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<Container size="md" style={{ paddingTop: 24 }}>
			<Title order={2} mb="md">Welcome to Trip-Mapper</Title>
			<Text mb="md">Quick navigation</Text>
			<Group>
				<Button component={Link} to="/trips">Trips</Button>
				<Button component={Link} to="/categories">Categories</Button>
				<Button component={Link} to="/pins">Pins</Button>
			</Group>
		</Container>
	);
};

export default HomePage;
