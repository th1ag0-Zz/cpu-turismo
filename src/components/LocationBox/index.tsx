import React from 'react';
import {
	ViewStyle,
	TouchableOpacityProps,
	ImageSourcePropType,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';

import {
	ButtonContainer,
	Container,
	Title,
	LocationTextContainer,
	LocationText,
} from './styles';

export interface LocationProps {
	id: number;
	title: string;
	description: string;
	images: ImageSourcePropType[];
}

interface LocationBoxProps extends TouchableOpacityProps {
	location: LocationProps;
	locationText?: string;
	style?: ViewStyle;
}

export const LocationBox: React.FC<LocationBoxProps> = ({
	location,
	locationText = 'Cururupu-MA',
	style,
	...rest
}) => {
	return (
		<ButtonContainer activeOpacity={0.8} {...rest}>
			<Container source={location.images[0]} style={style}>
				<Title>{location.title}</Title>

				<LocationTextContainer>
					<FontAwesome name='map-marker' size={RFValue(16)} color='white' />
					<LocationText>{locationText}</LocationText>
				</LocationTextContainer>
			</Container>
		</ButtonContainer>
	);
};
