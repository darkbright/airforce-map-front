import { createTheme } from "@mui/material";
import { blueGrey, lightBlue, lime, grey, red, yellow, green } from "@mui/material/colors";

// noto sans kr load
import "@fontsource/noto-sans-kr/300.css";
import "@fontsource/noto-sans-kr/400.css";
import "@fontsource/noto-sans-kr/500.css";
import "@fontsource/noto-sans-kr/700.css";

// noto serif kr load
import "@fontsource/noto-serif-kr/300.css";
import "@fontsource/noto-serif-kr/400.css";
import "@fontsource/noto-serif-kr/500.css";
import "@fontsource/noto-serif-kr/700.css";

declare module "@mui/material/styles" {
	interface Palette {
		percentageRemarks: {
			verylow: string;
			middle: string;
			middleHigh: string;
			high: string;
		};
		armyColor: {
			land: string;
			navy: string;
			airforce: string;
		};
	}
	interface PaletteOptions {
		// 범례 시 숫자 100 - 75%: 그린, 74-60% 옐로우, 59-50% 레드, 49% 이하 블랙
		percentageRemarks?: {
			verylow: string;
			middle: string;
			middleHigh: string;
			high: string;
		};
		// 육해공 대표 컬러
		armyColor?: {
			land: string;
			navy: string;
			airforce: string;
		};
	}
}

export type PaletteMode = "light" | "dark";

const baseTheme = {
	typography: {
		fontSize: 11,
		fontFamily: "Noto Sans KR",
		h1: {
			fontSize: "3rem",
			lineHeight: 1.167,
			fontWeight: 600,
		},
		h2: {
			fontSize: "2.4rem",
			lineHeight: 1.167,
			fontWeight: 600,
		},
		h3: {
			fontSize: "2rem",
			lineHeight: 1.167,
			fontWeight: 600,
		},
		h4: {
			fontSize: "1.7rem",
			lineHeight: 1.167,
			fontWeight: 600,
		},
		h5: {
			fontSize: "1.2rem",
			lineHeight: 1.167,
			fontWeight: 600,
		},
		h6: {
			fontSize: "1rem",
			lineHeight: 1,
			fontWeight: 600,
		},
		body1: {
			lineHeight: 1,
		},
		subtitle2: {
			fontSize: ".5rem",
			fontWeight: 400,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					padding: "8px 22px",
				},
				sizeLarge: {
					fontSize: ".9rem",
				},
			},
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					width: "100%",
					paddingBottom: "2%",
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					minWidth: 30,
				},
			},
		},
	},
};

const darkTheme = {
	primary: {
		main: "#00c8ff",
	},
	secondary: {
		main: lime[200],
	},
	background: {
		default: blueGrey[900],
		paper: blueGrey[800],
	},
	text: {
		secondary: "rgba(255, 255, 255, 0.8)",
	},
	percentageRemarks: {
		verylow: grey[900],
		middle: red[500],
		middleHigh: yellow[500],
		high: green[600],
	},
	armyColor: {
		land: "#3d5114",
		navy: "#001B69",
		airforce: "#3399FF",
	},
	error: {
		main: red[700],
	},
};

const lightTheme = {
	primary: {
		main: lightBlue[800],
	},
	secondary: {
		main: "#19857b",
	},
	background: {
		default: "#eef6fa",
	},
	text: {
		secondary: "rgba(0, 0, 0, 0.8)",
	},
	percentageRemarks: {
		verylow: grey[900],
		middle: red[500],
		middleHigh: yellow[500],
		high: green[600],
	},
	armyColor: {
		land: "#3d5114",
		navy: "#001B69",
		airforce: "#3399FF",
	},
};

const getDesignTokens = (mode: PaletteMode) => ({
	...baseTheme,
	palette: {
		mode,
		...(mode === "light" ? lightTheme : darkTheme),
	},
});

export const theme = (mode: PaletteMode) => createTheme(getDesignTokens(mode));
