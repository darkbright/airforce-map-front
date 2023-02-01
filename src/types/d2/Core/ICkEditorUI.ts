/**
 * CKEEditor Method
 */

import { IEditor } from "./ITextEditorPopupUI";

export interface ICKEditorUIMethod {
	getInstance: () => IEditor;
	setSelectObject: (object: any) => void;
	unsetSelectObject: () => void;
}

interface ICKEConstructor {
	new (className: string): ICKEditorUIMethod;
}

export declare const ICKEditorUI: ICKEConstructor;
