import React from 'react';
import { useNavigation } from '@react-navigation/native';

import homeImage from '../../assets/images/home-image.png';

import {
	Container,
	Content,
	Title,
	Text,
	ButtonNext,
	ButtonNextText,
} from './styles';

export const Welcome: React.FC = () => {
	const { navigate } = useNavigation<any>();

	function handleGoToHomePage() {
		navigate('Home');
	}

	return (
		<Container source={homeImage}>
			<Content>
				<Title>{`Descubra${'\n'}Cururupu do Maranhão`}</Title>

				<Text>
					{
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eveniet sit provident suscipit distinctio consequuntur impedit quos, id deleniti nisi voluptate ea laboriosam aliquam. Temporibus exercitationem non sequi debitis qui.'
					}
				</Text>

				<ButtonNext onPress={handleGoToHomePage} activeOpacity={0.8}>
					<ButtonNextText>Explore</ButtonNextText>
				</ButtonNext>
			</Content>
		</Container>
	);
};
