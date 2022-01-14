import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ImageBackground`
	flex: 1;
	padding: 0 ${RFValue(24)}px;
	justify-content: flex-end;

	padding-bottom: ${RFValue(32)}px;
`;

export const Content = styled.View`
	align-items: flex-start;
`;

export const Title = styled.Text`
	font-size: ${RFValue(30)}px;
	color: #fff;
	font-family: ${({ theme }) => theme.fonts.bold};
	margin-bottom: ${RFValue(24)}px;
`;

export const Text = styled.Text`
	font-size: ${RFValue(16)}px;
	color: #fff;
	line-height: ${RFValue(22)}px;
	font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const ButtonNext = styled.TouchableOpacity`
	padding: ${RFValue(8)}px ${RFValue(24)}px;
	background-color: ${({ theme }) => theme.colors.primary};
	margin-top: 24px;
	border-radius: 8px;
`;

export const ButtonNextText = styled.Text`
	font-size: ${RFValue(18)}px;
	color: #fff;
	font-family: ${({ theme }) => theme.fonts.bold};
`;
