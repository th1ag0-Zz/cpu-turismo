import React, { useState } from 'react';
import { Image, ListRenderItem } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import cais from '../../assets/images/cais.png';
import rodoviaria from '../../assets/images/rodoviaria.png';
import praca from '../../assets/images/praca.png';

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
	VerticalScrollContainer,
	VerticalScrollContent,
} from './styles';

interface ItemTeste {
	id: number;
	title: string;
	image: string;
}

export const Home: React.FC = () => {
	const { colors } = useTheme();

	const [arrayParaLoop] = useState<ItemTeste[]>([
		{
			id: 1,
			title: 'Cais',
			image: Image.resolveAssetSource(cais).uri,
		},

		{
			id: 2,
			title: 'Praça',
			image: Image.resolveAssetSource(praca).uri,
		},

		{
			id: 3,
			title: 'Rodoviária',
			image: Image.resolveAssetSource(rodoviaria).uri,
		},
	]);

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
						{arrayParaLoop.map(item => (
							<LocationBox
								key={String(item.id)}
								title={item.title}
								bgImage={item.image}
								style={
									item.id !== arrayParaLoop.length ? { marginRight: 14 } : {}
								}
							/>
						))}
					</HorizontalScrollContent>
				</PlaceSectionContent>

				<SectionTitle>{'Recomendado'}</SectionTitle>

				<VerticalScrollContent
					data={arrayParaLoop}
					keyExtractor={(item, index) => String(index)}
					renderItem={({ item }: { item: ItemTeste }) => (
						<LocationBoxLarge
							title={item.title}
							bgImage={item.image}
							style={
								item.id !== arrayParaLoop.length ? { marginBottom: 14 } : {}
							}
						/>
					)}
				/>
			</Content>
		</Container>
	);
};
