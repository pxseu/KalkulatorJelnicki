import React, { FC } from "react";
import styled from "styled-components/native";

export const BaseButton = styled.TouchableWithoutFeedback<{ span?: number }>`
	border: solid #00000080 4px;
	border-radius: 8px;
	margin: 5px;
	flex-grow: ${({ span }) => span ?? 1};
	padding: 35px;
	height: 100%;
	width: 100%;
	background-color: #ffffff;
`;

const ButtonText = styled.Text`
	font-size: 25px;
	color: #000000;
`;

interface KeypadBUttonProps {
	title: string;
	onPress: () => void;
	span?: number;
}

export const KeypadButton: FC<KeypadBUttonProps> = ({ title, onPress, span }) => (
	<BaseButton onPress={onPress} span={span}>
		<ButtonText>{title}</ButtonText>
	</BaseButton>
);
