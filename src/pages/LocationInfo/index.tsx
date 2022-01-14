import React from 'react';
import { useRoute } from '@react-navigation/native';

import {
	Container,
	Header,
	ImageContainer,
	DescriptionContainer,
} from './styles';
import { LocationProps } from '../../components/LocationBox';

interface RouteParamsProps {
	params: LocationProps;
	key: string;
	name: string;
	path?: string;
}

export const LocationInfo: React.FC = () => {
	const { params } = useRoute<RouteParamsProps>();
	console.log(params);

	return (
		<Container>
			<Header></Header>

			<ImageContainer source={params.images[0]}></ImageContainer>

			<DescriptionContainer></DescriptionContainer>
		</Container>
	);
};
