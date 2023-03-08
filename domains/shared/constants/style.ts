export const COLOR = {
	PrimaryRed: "#B51D29",
	PrimaryBeige: "#D4AA71",

	White100: "#fff",

	Gray50: "#FAFAFA",
	Gray100: "#F5F5F5",
	Gray200: "#EEEEEE",
	Gray300: "#E0E0E0",
	Gray400: "#E0E0E0",
	Gray500: "#9E9E9E",
	Gray600: "#757575",
	Gray700: "#616161",
	Gray800: "#424242",
	Gray900: "#212121",

	Beige400: "#D5B483",
	Beige100: "#d9c6ac",
	Beige200: "#CEA163",
	Beige300: "#7a5728",

	Red100: "#7c0811",
} as const;

export const FONT_SIZE = {
	xSmall: "12px",
	small: "14px",
	medium: "16px",
	large: "18px",
	xLarge: "20px",
	xxLarge: "24px",
} as const;

export const BUTTON_COLOR = {
	Red: COLOR.PrimaryRed,
	Beige: COLOR.PrimaryBeige,
};

export type ColorType = keyof typeof COLOR;

export type FontSizeType = keyof typeof FONT_SIZE;

export type ButtonColorType = keyof typeof BUTTON_COLOR;
