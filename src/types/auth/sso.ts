// TO_BE_CHECKED
// SSO Server에서 가져오는 UserInfo 정보임.
// 현재 아래 기능들이 어떻게 연결되었는지 명확하게 파악 안되므로 파악 후 고쳐야 함.

export type SSOUserInfoType = {
	id: string; // 사용자 아이디
	name: string; // 사용자 이름
	// clientIP: string; // 사용자 IP
	position: string; // 보직
	// wingunit: any; // 소속단부대 코드 이름정보 객체
	unit: {
		code: string;
		name: string;
	}; // 소속부대코드와 이름정보 객체
	// wingNo: number; // 비행단 번호
	// squadNo: number; //작전부대번호
	// lookupNode: any; //사용자의 작전체계 lookup 시 Switching 기능 제공하기 위함
	// rank: any; // 사용자의 계급코드와 이름정보를 가지고 있는 객체
	// secretGrade: any; // 사용자의 보안등급을 가지고 있는 객체
	// unitNode: any; // 사용자의 노드번호를 가지고 있는 객체
	// serverNode: any; // 사용자의 서버노드를 가지고 있는 객체
	userGroups: string[]; // 사용자가 속한 유저그룹 리스트
	// size: number; // 사용자에게 할당된 사용자 그룹의 개수
	// exerciseCode: string; // 접속한 훈련코드
	modeCode: "real" | "exercise"; //접속한 모드코드 (실제, 연습모드)
	// loginNode: string; // 사용자가 로그인한 노드
	// loginUnitNode: string; // 사용자가 로그인한 부대코드
	// commandYN: "Y" | "N"; // 사령관 여부
	// isWar: boolean; // 전시평시 여부
	// baseUc: string; // 기지방호기지
	// accmdDvsCd: string; // 기지구분
	// baseName: string;
	// baseTypeCd: string;
	// sessionId: string;
};
