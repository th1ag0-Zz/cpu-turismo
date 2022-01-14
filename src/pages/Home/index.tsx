import React, { useState } from 'react';
import { Image, FlatList, ImageSourcePropType } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import locationsList from '../../utils/locationsList';

import { LocationBox } from '../../components/LocationBox';
import { LocationBoxLarge } from '../../components/LocationBoxLarge';

import {
	Container,
	Header,
	HeaderTitle,
	SearchContent,
	SearchInput,
	Content,
	PlaceSectionContent,
	SectionTitle,
	HorizontalScrollContent,
} from './styles';

interface LocationProps {
	id: number;
	title: string;
	description: string;
	images: ImageSourcePropType[];
}

export const Home: React.FC = () => {
	const { navigate } = useNavigation();
	const { colors } = useTheme();

	const [locationsDefault] = useState<LocationProps[]>(locationsList);
	const [locationsRecomended] = useState<LocationProps[]>(locationsList);

	function goToLocationInfoPage(location: LocationProps) {
		navigate('LocationInfo', location);
	}

	return (
		<Container>
			<Header>
				<HeaderTitle>{`Descubra${'\n'}Cururupu do Maranhão`}</HeaderTitle>

				<SearchContent>
					<Feather name='search' size={RFValue(20)} color={colors.text_title} />
					<SearchInput placeholder='Pesquise o local' />
				</SearchContent>
			</Header>

			<Content>
				<PlaceSectionContent>
					<SectionTitle>{'Lugares'}</SectionTitle>

					<HorizontalScrollContent>
						{locationsDefault.map(item => (
							<LocationBox
								key={String(item.id)}
								location={item}
								style={
									item.id !== locationsDefault.length ? { marginRight: 14 } : {}
								}
								onPress={() => goToLocationInfoPage(item)}
							/>
						))}
					</HorizontalScrollContent>
				</PlaceSectionContent>

				<SectionTitle>{'Recomendado'}</SectionTitle>

				<FlatList
					data={locationsRecomended}
					keyExtractor={item => String(item.id)}
					renderItem={({ item }) => (
						<LocationBoxLarge
							location={item}
							style={
								item.id !== locationsRecomended.length
									? { marginBottom: 14 }
									: {}
							}
							onPress={() => goToLocationInfoPage(item)}
						/>
					)}
					contentContainerStyle={{
						paddingHorizontal: RFValue(24),
						paddingBottom: RFValue(24),
					}}
					showsVerticalScrollIndicator={false}
				/>
			</Content>
		</Container>
	);
};
