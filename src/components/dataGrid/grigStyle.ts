import { Palette } from "@mui/material";

export const gridStyles = (palette: Palette) => {
	const { background, divider, text, action, primary } = palette;
	return {
		selection: {
			background: background.paper,
		},
		scrollbar: {
			background: background.paper,
			border: divider,
			emptySpace: background.paper,
			thumb: divider,
			active: divider,
		},
		row: {
			hover: {
				background: background.default,
			},
		},
		area: {
			header: {
				border: divider,
				background: background.paper,
			},
			body: {
				background: background.paper,
			},
			// summary: {},
		},
		cell: {
			normal: {
				background: background.paper,
				text: text.primary,
				border: divider,
				showVerticalBorder: true,
			},
			disabled: {
				background: action.disabledBackground,
			},
			header: {
				background: background.paper,
				border: divider,
				text: text.primary,
				showVerticalBorder: true,
				showHorizontalBorder: true,
			},
			selectedHeader: {
				background: background.default,
			},
			selectedRowHeader: {
				background: background.default,
			},
			rowHeader: {
				background: background.paper,
				border: divider,
				text: text.primary,
			},
			editable: {
				background: background.paper,
			},
			focused: {
				background: primary.main,
			},
		},
		frozenBorder: {
			border: divider,
		},
		heightResizeHandle: {
			background: background.paper,
			border: divider,
		},
		pagination: {},
		outline: {
			border: divider,
			showVerticalBorder: false,
		},
	};
};
