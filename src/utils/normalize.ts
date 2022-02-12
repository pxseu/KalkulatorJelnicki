const VISUAL_UPDATE_MAP = {
	"**": "^",
	"-": "\u2212",
	"*": "\u00D7",
	"/": "\u00F7",
};

export const normalize = (value: string): string => {
	if (Object.keys(VISUAL_UPDATE_MAP).includes(value))
		return VISUAL_UPDATE_MAP[value as keyof typeof VISUAL_UPDATE_MAP];
	return value;
};
