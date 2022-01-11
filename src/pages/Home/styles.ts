import { StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ItemTeste {
	id: number;
	title: string;
	image: string;
}

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.shape_bg};
	flex: 1;
`;

export const Header = styled.View`
	width: 100%;
	height: ${RFValue(160)}px;
	background-color: ${({ theme }) => theme.colors.primary};
	padding: 0 ${RFValue(24)}px;
	padding-top: ${StatusBar.currentHeight}px;

	justify-content: center;
	position: relative;
`;

export const HeaderTitle = styled.Text`
	font-size: ${RFValue(24)}px;
	color: #fff;
	font-family: ${({ theme }) => theme.fonts.bold};
	margin-bottom: ${RFValue(24)}px;
`;

export const SearchContent = styled.View`
	position: absolute;
	width: 100%;
	height: ${RFValue(48)}px;

	background-color: #fff;
	bottom: -${RFValue(24)}px;
	left: ${RFValue(24)}px;

	flex-direction: row;
	align-items: center;

	border-radius: ${RFValue(8)}px;
	padding: 0 ${RFValue(12)}px;
`;

export const SearchInput = styled.TextInput`
	flex: 1;
	margin-left: ${RFValue(12)}px;

	font-size: ${RFValue(14)}px;
	color: ${({ theme }) => theme.colors.text_title};
	font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Content = styled.View`
	padding: ${RFValue(40)}px 0 0;
	flex: 1;
`;

export const PlaceSectionContent = styled.View``;

export const SectionTitle = styled.Text`
	font-size: ${RFValue(18)}px;
	color: ${({ theme }) => theme.colors.text_title};
	font-family: ${({ theme }) => theme.fonts.semibold};

	margin-left: ${RFValue(24)}px;
	margin-bottom: ${RFValue(16)}px;
`;

export const HorizontalScrollContent = styled.ScrollView.attrs({
	contentContainerStyle: {
		paddingHorizontal: RFValue(24),
	},
	horizontal: true,
	showsHorizontalScrollIndicator: false,
})`
	margin-bottom: ${RFValue(24)}px;
`;

export const VerticalScrollContainer = styled.View``;

export const VerticalScrollContent = styled.FlatList.attrs({
	contentContainerStyle: {
		paddingHorizontal: RFValue(24),
		paddingBottom: RFValue(24),
	},
	showsVerticalScrollIndicator: false,
})`
	flex: 1;
`;
