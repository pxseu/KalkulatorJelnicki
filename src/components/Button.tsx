import React, { FC } from "react";
import styled from "styled-components/native";

type ButtonType = "number" | "sign" | "function";

const getVariant = (variant: ButtonType) => {
	switch (variant) {
		case "number":
			return "background-color: #e6e6e6;color: #000000;";
		case "sign":
			return "background-color: #cccccc;color: #000000;";
		case "function":
			return "background-color: #0080ff;color: #ffffff;";
		default:
			return "";
	}
};

const ButtonWrapper = styled.TouchableOpacity<{ type: ButtonType; span?: number }>`
	display: flex;
	border-radius: 8px;
	margin: 5px;
	justify-content: center;
	align-items: center;
	${({ span }) => `flex-grow: ${span ? span * 1.55 : 1};`}
	${({ type }) => getVariant(type)}
`;

const ButtonText = styled.Text<{ type: ButtonType }>`
	font-size: 30px;
	text-align: center;
	width: 40px;
	${({ type }) => getVariant(type)}
	background-color: transparent;
`;

interface ButtonProps {
	variant: ButtonType;
	onPress: () => void;
	children: string;
	span?: number;
}

const KeypadButton: FC<ButtonProps> = ({ variant, onPress, children, span }) => {
	return (
		<ButtonWrapper type={variant} onPress={onPress} span={span}>
			<ButtonText type={variant}>{children}</ButtonText>
		</ButtonWrapper>
	);
};

export default KeypadButton;
