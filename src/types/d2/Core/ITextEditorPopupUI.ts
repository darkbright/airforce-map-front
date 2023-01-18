export interface ITextEditorPopupUI {
	_editor: _Editor;
}

interface _Editor extends IEditor {
	/**
	 * default is 10000
	 */
	_maxTextLength: number;
	_offsetX: number;
	_offsetY: number;
}

interface ActiveFilter {
	allowedContent: EditorContent[];
	customConfig: boolean;
	disabled: boolean;
	disallowedContent: EditorContent[];
	editor: IEditor;
	elementCallbacks: any;
	id: number;
	_: {
		allowedRules: EditorRules;
		cachedChecks: any;
		cachedTests: any;
		disallowedRules: EditorRules;
		transformations: any;
	};
}

export interface IEditor {
	activeEnterMode: number;
	activeFilter: ActiveFilter;
	activeShiftEnterMode: number;
	blockless: boolean;
	commands: any;
	config: {
		delayIfDetached: boolean;
		delayIfDetached_callback: any;
		delayIfDetached_interval: number;
	};
	dataProcessor: any;
	element: {
		$: string;
		getName: () => string;
		elementMode: number;
		enterMode: number;
	};
	filter: {
		allowedContent: EditorContent[];
		customConfig: boolean;
		disabled: boolean;
		disallowedContent: EditorContent[];
		editor: IEditor;
		elementCallbacks: any;
		id: number;
		_: {
			allowedRules: EditorRules;
			cachedChecks: any;
			cachedTests: any;
			disallowedRules: EditorRules;
			transformations: any;
		};
	};
	focusManager: {
		currentActive: any;
		hasFocus: boolean;
		_: {
			editor: IEditor;
		};
	};
	id: string;
	keystrokeHandler: {
		blockedKeystrokes: any;
		keystrokes: any;
		_: {
			editor: IEditor;
		};
	};
	name: string;
	readOnly: boolean;
	shiftEnterMode: number;
	status: string;
	tabIndex: number;
	templates: any;
	ui: {
		editor: IEditor;
		instances: any;
		items: any;
		_: {
			handlers: any;
		};
		get: any;
	};
	_: {
		data: string;
		events: any;
	};
	getData: () => string;
	setData: (value: string) => void;
	resetUndo: () => void;
}

interface EditorContent {
	attributes: any;
	classes: any;
	elements: {
		p: boolean;
		br: boolean;
	};
	featureName: string;
	match: any;
	propertiesOnly: boolean;
	requiredAttributes: any;
	requiredClasses: any;
	requiredStyles: any;
	styles: any;
}

interface EditorRules {
	elements: {
		br: EditorContent[];
		p: EditorContent[];
	};
	generic: any[];
}
