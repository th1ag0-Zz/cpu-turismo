import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ImageBackground`
	width: ${RFValue(140)}px;
	height: ${RFValue(140)}px;
	border-radius: ${RFValue(8)}px;

	overflow: hidden;
	padding: ${RFValue(12)}px;

	justify-content: space-between;
`;

export const Title = styled.Text`
	font-size: ${RFValue(18)}px;
	color: #fff;
	font-family: ${({ theme }) => theme.fonts.bold};
`;

export const LocationTextContainer = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const LocationText = styled.Text`
	font-size: ${RFValue(14)}px;
	color: #fff;
	font-family: ${({ theme }) => theme.fonts.bold};
	margin-left: ${RFValue(8)}px;
`;
