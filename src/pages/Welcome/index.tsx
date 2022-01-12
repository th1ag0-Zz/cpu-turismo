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
						'Cururupu é um município do estado do Maranhão, no Brasil. Sua população era de 30.805 habitantes conforme estimativa IBGE de 2016. O município é sede da Região de Planejamento do Litoral Ocidental (Lei Complementar 108/2007), sendo centro regional de outros oito municípios.'
					}
				</Text>

				<ButtonNext onPress={handleGoToHomePage} activeOpacity={0.8}>
					<ButtonNextText>Explore</ButtonNextText>
				</ButtonNext>
			</Content>
		</Container>
	);
};
