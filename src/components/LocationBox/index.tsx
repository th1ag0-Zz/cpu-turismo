import React from 'react';
import { View, ViewStyle } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

import {
	Container,
	Title,
	LocationTextContainer,
	LocationText,
} from './styles';

interface LocationBoxProps {
	bgImage: string;
	title: string;
	locationText?: string;
	style?: ViewStyle;
}

export const LocationBox: React.FC<LocationBoxProps> = ({
	bgImage,
	title,
	locationText = 'Cururupu-MA',
	style,
}) => {
	return (
		<Container source={{ uri: bgImage }} style={style}>
			<Title>{title}</Title>

			<LocationTextContainer>
				<FontAwesome name='map-marker' size={RFValue(16)} color='white' />
				<LocationText>{locationText}</LocationText>
			</LocationTextContainer>
		</Container>
	);
};
