import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import {
	Container,
	Header,
	HeaderTitle,
	SearchContent,
	SearchInput,
	Content,
} from './styles';

export const Home: React.FC = () => {
	const { colors } = useTheme();

	return (
		<Container>
			<Header>
				<HeaderTitle>{`Descubra${'\n'}Cururupu do Maranhão`}</HeaderTitle>

				<SearchContent>
					<Feather name='search' size={RFValue(20)} color={colors.text_title} />
					<SearchInput placeholder='Pesquise o local' />
				</SearchContent>
			</Header>

			<Content></Content>
		</Container>
	);
};
