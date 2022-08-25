/**
 * 아이콘의 기본 Props를 정의한 인터페이스
 *
 * - width: 아이콘의 너비. 너비를 조정하면 height도 바뀐다
 * - color: 아이콘의 색상 hex값. 설정하지 않으면 기본 컬러로 자동설정된다. 다크모드/라이트모드 고려했을 때 굳이 색상을 정하면 골치 아파질 수도 있다
 */

export interface IconProps {
	width?: number;
	color?: string;
}
