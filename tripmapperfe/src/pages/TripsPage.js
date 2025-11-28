import React from 'react';
import { Container, Title, Text } from '@mantine/core';

const TripsPage = () => {
	return (
		<Container size="lg" style={{ paddingTop: 24 }}>
			<Title order={2}>Trips</Title>
			<Text mt="md">This is the trips page — content is a placeholder for now.</Text>
		</Container>
	);
};

export default TripsPage;
