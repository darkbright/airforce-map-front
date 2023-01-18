/**
 * d2  버전 업되면서 생겨난 객체인데, 버전 업 시 충돌 발생하여 일단 안쓰겠음
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
