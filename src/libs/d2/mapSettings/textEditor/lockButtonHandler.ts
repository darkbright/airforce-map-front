import { IGraphicObject } from "../../../../types/d2/Graphic";

/**
 * 텍스트 에디터 내 버튼 중 잠금/잠금풀기 버튼의 이미지 핸들링
 * @param object IGraphicObject
 */
export const lockButtonHandler = (object: IGraphicObject) => {
	const unlockIconButton = document.querySelector(".cke_button__unlock_icon") as HTMLElement;

	const lockIcon = document.querySelector(".cke_button__justifyblock_icon") as HTMLElement;

	unlockIconButton.style.backgroundImage =
		object._prop.editorScale === "lock"
			? `url("${window.lockPluginPath}icons/lock.png?${
					lockIcon.style.backgroundImage.split("?")[1]
			  }`
			: `url("${window.lockPluginPath}icons/unlock.png?${
					lockIcon.style.backgroundImage.split("?")[1]
			  }`;
};
