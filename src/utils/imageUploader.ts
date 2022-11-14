import { ChangeEvent } from "react";
import { toastShow } from "../components/alert/ToastMessage";

interface ImageUploaderProps {
	event: ChangeEvent<HTMLInputElement>;
	/**
	 * mb 단위, 1메가 2메가 등으로 설정할 수 있음 1이나 2 등을 입력할 것
	 */
	imageSize: number;
}

interface UploadedImageProps {
	name: string;
	size: number;
	type: string;
	base64: string | ArrayBuffer | null;
}

/**
 * 1개의 이미지를 브라우저에 업로드하여 그것의 base64 result 및 파일의 이름, 사이즈, 종류 등을 리턴함.
 * @param ImageUploaderProps ImageUploaderProps
 * @returns UploadedImageProps
 */
export const imageUploader = ({ event, imageSize }: ImageUploaderProps) => {
	const files = event.target.files;
	//수용 가능한 이미지 종류
	const validImageTypes = ["image/jpeg", "image/png", "image/jpg", "image/bmp"];

	// 이미지 사이즈 limit
	// 기본은 1mb
	const validImageSize = 1024 * 1024 * imageSize;

	if (files && files.length > 0) {
		const file = files[0];
		const { name, size, type } = file;
		if (!validImageTypes.includes(file.type)) {
			toastShow({
				type: "error",
				message: "JPG, JPEG, PNG, BMP만 업로드할 수 있습니다.",
				title: "올바른 이미지 형식이 아님",
			});
		}
		if (file.size > validImageSize) {
			toastShow({
				type: "error",
				message: "이미지는 1mb를 초과할 수 없습니다.",
				title: "이미지 용량이 너무 큽니다",
			});
		}

		const reader = new FileReader();

		return new Promise<UploadedImageProps>((resolve, reject) => {
			reader.readAsDataURL(file);
			reader.onerror = () => {
				reject(new DOMException("이미지 추출 에러"));
			};
			reader.onload = () => {
				resolve({ name, size, type, base64: reader.result });
			};
		});
	}
};
