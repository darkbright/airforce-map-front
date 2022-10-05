// 기본부호는 MapSymbolType에서 정의한 바와 같이
// - 간략부호(simplified)
// - 일반부호(basic)
// - 군대부호(military)
// 로 나뉘며, 여기서는 그 중 일반부호를 SVG 형태로 이미지화 한 것들임.
// 일반부호란, 공군에서만 쓰는 것 같은 군대부호가 아닌 조금 더 심플한(?) 형태의 그림으로 표현되는 형식으로, 그 종류가 많지는 않음.
// 기존 소스파일에서 일반부호는 특정한 로직에 의하여 정리가 되어 있지 않고 하드코딩화 되어 있었으므로,
// 금번 프로젝트에서는 data/constants/symbolListByCoord에 정의된 좌표값에 따라 부호를 렌더링할 것임. 상세 내용은 해당 내용 참고

// 아래의 심볼들에서 fill:#FFFFFF 로 흰색으로 스타일링 된 부분만 프로그래밍틱하게 해당 그림의 색상을 변경할 수 있음.
// 나머지 색상은 고정임.
// 따라서 개별 부호들을 렌더링할 때 database에서 받은 색상코드 값(utils/milColorHandler에 정의됨)을 가지고 그 하얀 색상을 바꿔주는 식으로 표출되겠음.

/**
 * 기본부호 중 기지를 나타내는 부호로 동그라미에 가로 줄 모양 (토성모양) 🪐 으로 생김
 */
export const baseSymbol = `
<svg version="1.1" width="100" height="100"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 100 100">
<circle style="fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;" cx="26.2" cy="26.2" r="17.5"/>
<rect x="4.9" y="23.2" style="fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;" width="42.6" height="6.1"/>
</svg>
`;

/**
 * 기본심볼 중 로켓 모양의 심볼 🚀
 */
export const rocketSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<path style="fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;" d="M38.2,44.5l-6.8-4.9c-0.1-3.2-0.3-6.6-0.6-10.1h5
	c2.2,0,2.7-3,0.6-3.8l-6.3-2.2c-1-7.6-2.5-14.2-4-19.7c-1.5,5.5-3,12.2-4,19.7l-6.3,2.2c-2.1,0.7-1.5,3.8,0.6,3.8h5
	c-0.3,3.6-0.5,7-0.6,10.1l-6.8,4.9c-1.8,1.3-0.9,4.2,1.3,4.2h21.3C39.1,48.7,40,45.8,38.2,44.5z"/>
</svg>
`;

/**
 * 기본심볼 중 위성 수신기 모양 📡
 */
export const satelliteDishSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<g>
	<path style="fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;" d="M28.2,40.7c-14,0-22.6-14.5-16.8-26.7c0.7-1.6,1.2-1.7,2.4-0.4
		c3.1,3.4,6.2,6.6,9.3,9.9c0.7,0.8,1.2,1,1.9,0c1-1.3,2.5-2.2,2.6-4.3c0.1-1.3,1.3-2.1,2.6-1.9c1.3,0.2,2.1,1.1,2.1,2.6
		c0,1.4-0.8,2.5-2.1,2.5c-2.3,0-3,2.1-4.3,3.3c-0.7,0.6,0.3,1,0.6,1.4c2.9,3.1,5.8,6.2,8.8,9.3c1.1,1.1,0.9,1.7-0.4,2.3
		C32.6,39.9,30,40.6,28.2,40.7z"/>
	<path style="fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;" d="M10.4,48.5c0-0.2,0-0.4,0.1-0.6c1.5-3.4,3.1-6.7,4.7-10.2
		c3,2.2,6.1,3.9,9.7,4.2c0.4,0,0.6,0.2,0.7,0.6c0.7,2,1.9,3.8,2.2,6C22.1,48.5,16.2,48.5,10.4,48.5z"/>
</g>
<path style="fill:#FFFFFF;stroke:#000000;stroke-miterlimit:10;" d="M35.1,23.7c-0.2,0-0.5-0.1-0.7-0.2c-0.5-0.4-0.6-1.1-0.2-1.7
	l4.5-6.2L32,14.7l7.8-10.4c0.4-0.5,1.1-0.6,1.6-0.2C42,4.6,42,5.4,41.6,5.9l-5.3,7l6.5,0.9L36,23.3C35.8,23.6,35.4,23.7,35.1,23.7z"
	/>
</svg>
`;

/**
 * 기본심볼 중 이동형 위성 모양
 */
export const movableSatelliteDishSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
y="0px">
<g>
<path style="fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;" d="M33.8,28.9c-12.1,0-19.6-12.6-14.6-23.1
   c0.6-1.4,1.1-1.5,2.1-0.4c2.6,2.9,5.4,5.7,8.1,8.6c0.6,0.7,1.1,0.8,1.7,0c0.9-1.2,2.2-1.9,2.3-3.7c0.1-1.1,1.1-1.8,2.3-1.6
   c1.1,0.2,1.8,1,1.8,2.2c0,1.2-0.7,2.2-1.8,2.2c-2,0-2.6,1.8-3.8,2.9c-0.6,0.5,0.2,0.9,0.5,1.2c2.5,2.7,5,5.4,7.6,8
   c1,1,0.8,1.4-0.3,2C37.6,28.3,35.3,28.9,33.8,28.9z"/>
<path style="fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;" d="M18.4,35.6c0-0.2,0-0.3,0.1-0.5c1.3-2.9,2.7-5.8,4-8.8
   c2.6,1.9,5.3,3.4,8.4,3.6c0.3,0,0.5,0.2,0.6,0.5c0.6,1.7,1.6,3.3,1.9,5.2C28.5,35.6,23.4,35.6,18.4,35.6z"/>
</g>
<rect x="8" y="34" style="fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;" width="35.5" height="7.8"/>
<circle style="fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;" cx="17" cy="43.9" r="4.8"/>
<circle style="fill:#FFFFFF;stroke:#231815;stroke-miterlimit:10;" cx="34.5" cy="43.9" r="4.8"/>
</svg>

`;

/**
 * 기본 심볼 중 뭔가 연필처럼 생긴 마사일 모양인듯
 */

export const pencilShapedMissileSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
y="0px">
<style type="text/css">
.st0{fill:#FFFFFF;stroke:#221714;stroke-miterlimit:10;}
.st1{fill:none;stroke:#221714;stroke-miterlimit:10;}
</style>
<polygon class="st0" points="38,46.9 34.9,43.8 34.9,13.3 26.1,5.6 17.2,13.3 17.2,43.8 14.1,46.9 "/>
<path class="st1" d="M17.2,14.5c4.4-0.2,6.8,1,8.3,2.2c1.1,0.9,1.6,1.7,2.8,2.2c2.3,0.9,4.8-0.2,6.7-1.3"/>
<path class="st1" d="M17.2,27c4.4-0.2,6.8,1,8.3,2.2c1.1,0.9,1.6,1.7,2.8,2.2c2.3,0.9,4.8-0.2,6.7-1.3"/>
<path class="st1" d="M17.2,40.8c4.4-0.2,6.8,1,8.3,2.2c1.1,0.9,1.6,1.7,2.8,2.2c2.3,0.9,4.8-0.2,6.7-1.3"/>
</svg>


`;

/**
 * 기본부호 중 45도 꺾인 날라가는 기본 전투기 모양 심볼
 */
export const JetSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
y="0px">
<path style="fill:#FFFFFF;stroke:#221714;stroke-miterlimit:10;" d="M28.4,43.7c0.9-0.9,1.8-1.9,2.7-2.8c0.4-0.3,0.5-0.7,0.5-1.2
c0-2.2,0-4.4,0-6.6l4.9-0.5l-0.7-7.1L31.5,26c0-0.2,0.1-0.5,0.2-0.7c1-1.3,2-2.5,3.1-3.8c1.1-1.3,2.2-2.7,3.2-4
c1.1-1.4,2.3-2.8,3.4-4.2c0.8-0.9,1.6-1.8,2.3-2.8c0.9-1.2,1.8-2.6,2.2-4.1c0,0-0.1-0.1-0.1-0.1c-1.6,0.3-3,1.1-4.3,1.9
c-0.8,0.5-1.5,1.1-2.3,1.6c-1.5,1-3,2-4.4,3c-0.9,0.6-1.8,1.3-2.8,1.9c-1.1,0.8-2.3,1.5-3.4,2.3c-0.9,0.6-1.8,1.3-2.7,1.8
c-0.2,0.1-0.4,0.2-0.6,0.2l0.8-4.1l-7-1.3l-0.9,4.8c-2.2-0.2-4.5-0.4-6.7-0.6c-0.5,0-0.8,0.1-1.2,0.4c-1,0.8-2,1.6-2.9,2.4
c-0.1,0.1-0.3,0.3-0.4,0.4c0.2,0.1,0.4,0.2,0.6,0.3c1.3,0.7,2.5,1.4,3.8,2.2c1.5,0.8,3,1.6,4.4,2.4c0.1,0.1,0.2,0.3,0.1,0.4
c-0.3,0.4-0.6,0.8-1.2,0.8c-2.2,0-4.3,0-6.5,0c-0.3,0-0.5,0.1-0.6,0.4c-0.2,0.8-0.4,1.6-0.6,2.4c0,0.1,0,0.4,0.2,0.5
c1,0.9,2,1.7,3.1,2.6c0.6,0.5,1.2,1,1.8,1.5c0.1,0.1,0.2,0.4,0.1,0.6c-0.6,1.1-1.2,2.1-1.7,3.1c-0.2,0.4-0.4,0.8-0.7,1.3
c0.1,0,0.2,0,0.2,0c1.4-0.6,2.8-1.2,4.2-1.9c0.5-0.2,0.7,0,1,0.3c1.1,1.6,2.3,3.3,3.4,4.9c0.2,0.2,0.4,0.3,0.6,0.3
c0.7-0.1,1.4-0.3,2.2-0.3c0.4,0,0.6-0.2,0.6-0.6c0.2-2.1,0.4-4.1,0.6-6.2c0-0.5,0.2-0.9,0.7-1.2c0.3-0.2,0.5-0.2,0.6,0.2
c0.3,0.7,0.6,1.4,0.9,2.1c0.6,1.4,1.3,2.8,1.9,4.2c0.4,0.9,0.8,1.8,1.3,2.8C28.2,43.9,28.3,43.8,28.4,43.7z"/>
</svg>


`;

/**
 * 기본 심볼 중  대화력전표적?
 */

export const AAAMissileSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<rect x="4.7" y="4.7" style="fill:none;stroke:#221714;stroke-miterlimit:10;" width="43" height="43"/>
<g>
	<path d="M24.8,14.5h-3.2L20.8,17h-1.6L22,8.1h2.4l2.8,8.9h-1.7L24.8,14.5z M24.4,13.2l-1.1-3.7h-0.2L22,13.2H24.4z"/>
	<path d="M33.2,14.5h-3.2L29.2,17h-1.6l2.8-8.9h2.4l2.8,8.9h-1.7L33.2,14.5z M32.8,13.2l-1.1-3.7h-0.2l-1.1,3.7H32.8z"/>
	<path d="M41.5,14.5h-3.2L37.6,17H36l2.8-8.9h2.4l2.8,8.9h-1.7L41.5,14.5z M41.1,13.2L40,9.4h-0.2l-1.1,3.7H41.1z"/>
</g>
<path d="M42.7,40.1l-1.2,0.8l-1.8-3.8h1.8h0.2v-11h-2.6c0-0.2,0.1-0.3,0.1-0.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5
	c0,0.2,0,0.3,0.1,0.5h-2.6v1.3l-1.5-1.1L29,27.5l-6.5-5.8l-1,1l-6-5.2l-1.1,1.3L13,18.1l-1,1.7l2.7,1.5l0.9-1l6,5.1l1-1l6.5,5.7
	l1.4-1.3l1.3,1v5.2H10.5v2h1.8l-1.7,3.5l-1.2-0.8l-1.2,1.6l3.1,2.2l1.2-1.6l-0.2-0.2l2.3-4.7h17.2h5.7l2.4,5l-0.2,0.2l1.2,1.6
	l3.1-2.2L42.7,40.1z"/>
</svg>
`;

/**
 * 기본심볼 중 N/A 심볼. 매칭되는 심볼이 없을 때 사용함
 */
export const notApplicableSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.5;stroke-miterlimit:10;" d="M4.4,15.4h3.1l9.3,15.7h0.1V15.4h2.4v20.2
	h-2.7L6.9,19.1H6.9v16.5H4.4V15.4z"/>
<path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.5;stroke-miterlimit:10;" d="M28.9,13.7h2.3l-7,25H22L28.9,13.7z"/>
<path style="fill:#FFFFFF;stroke:#000000;stroke-width:0.5;stroke-miterlimit:10;" d="M38.1,15.4h2.6L48,35.6h-2.8l-2-5.7h-7.9
	l-2,5.7h-2.5L38.1,15.4z M36,27.7h6.3L39.2,19h-0.1L36,27.7z"/>
</svg>
`;

///////////////////////////////////////////////
//적군
///////////////////////////////////////////////

/**
 * 기본부호 중 적 지상군 관련 부호로 꼭대기에 XX 두개가 있고 ❖ 같은 모양이 있음
 */

export const enemyGroundBaseNormalXX = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<rect x="13.5" y="17.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0267 27.686)" style="fill:#231815;" width="25.8" height="25.8"/>
<path style="fill:#231815;" d="M23.9,9.4L26.4,7c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5l-2.5-2.5
	c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4l-2.5,2.4c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
	c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L23.9,9.4z"/>
<path style="fill:#231815;" d="M33.1,9.4L35.6,7c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5l-2.5-2.5
	c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4l-2.5,2.4c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
	c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L33.1,9.4z"/>
<rect x="14.8" y="19.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0267 27.686)" style="fill:#E85130;" width="23.2" height="23.2"/>
<polygon style="fill:#231815;" points="35.5,21.9 34.9,21.3 26.8,29.8 18.8,21.7 18.2,22.3 26.2,30.5 18.1,39 18.7,39.6 26.8,31.1 
	34.8,39.2 35.4,38.6 27.4,30.5 "/>
</svg>

`;

/**
 * 기본부호 중 적 지상군 관련 부호로 꼭대기에 XXX 세개가 있고 ❖ 같은 모양이 있음
 */

export const enemyGroundBaseNormalXXX = `
 <svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
 y="0px">
<path style="fill:#231815;" d="M18,10.2l2.5-2.4c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L13.7,6
c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4l-2.5,2.4c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L18,10.2z"/>
<rect x="13.3" y="17.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#231815;" width="25.8" height="25.8"/>
<rect x="14.6" y="19.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#E85130;" width="23.2" height="23.2"/>
<polygon style="fill:#231815;" points="35.3,21.9 34.7,21.3 26.6,29.8 18.6,21.7 18,22.3 26,30.5 17.9,39 18.5,39.6 26.6,31.1 
34.6,39.2 35.2,38.6 27.2,30.5 "/>
<path style="fill:#231815;" d="M28,10.2l2.5-2.4C31,7.3,31,6.5,30.5,6c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L23.7,6
c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4L22,12.6c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L28,10.2z"/>
<path style="fill:#231815;" d="M38,10.2l2.5-2.4C41,7.3,41,6.5,40.5,6c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L33.7,6
c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4L32,12.6c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L38,10.2z"/>
</svg>
 `;

/**
 *  기본부호 중 적 지상군 관련 부호로 꼭대기에 XX 두개가 있고 중간 45도 회전한 사각형 안에 반창고 같이 생긴게(기계화부대 모양) 있음.
 */
export const enemyGroundBaseMechanizedXX = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<path style="fill:#231815;" d="M23,9.2l2.5-2.4c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L18.7,5
	c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4l-2.5,2.4c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
	c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L23,9.2z"/>
<rect x="13.3" y="17.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#231815;" width="25.8" height="25.8"/>
<rect x="14.6" y="19.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#E85130;" width="23.2" height="23.2"/>
<polygon style="fill:#231815;" points="35.3,21.9 34.7,21.3 26.6,29.8 18.6,21.7 18,22.3 26,30.5 17.9,39 18.5,39.6 26.6,31.1 
	34.6,39.2 35.2,38.6 27.2,30.5 "/>
<path style="fill:#231815;" d="M33,9.2l2.5-2.4C36,6.3,36,5.5,35.5,5c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L28.7,5
	c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4L27,11.6c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
	c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L33,9.2z"/>
<path d="M29.5,37.7h-5.9c-1,0-1.8-0.6-2.1-1.5h-5.5c-1.6,0-2.9-1.3-2.9-2.9v-5.4c0-1.6,1.3-2.9,2.9-2.9h5.5c0.3-0.9,1.2-1.5,2.1-1.5
	h5.9c1,0,1.8,0.6,2.1,1.5h5.5c1.6,0,2.9,1.3,2.9,2.9v5.4c0,1.6-1.3,2.9-2.9,2.9h-5.5C31.3,37.1,30.5,37.7,29.5,37.7z M15.9,26.5
	c-0.8,0-1.4,0.6-1.4,1.4v5.4c0,0.8,0.6,1.4,1.4,1.4h6.8l0,0.7c0,0.4,0.4,0.8,0.8,0.8h5.9c0.4,0,0.8-0.3,0.8-0.8l0-0.7h6.8
	c0.8,0,1.4-0.6,1.4-1.4v-5.4c0-0.8-0.6-1.4-1.4-1.4h-6.8l0-0.7c0-0.4-0.4-0.8-0.8-0.8h-5.9c-0.4,0-0.8,0.3-0.8,0.8l0,0.7H15.9z"/>
</svg>


`;

/**
 *  기본부호 중 적 지상군 관련 부호로 꼭대기에 XXX 세개가 있고 중간 45도 회전한 사각형 안에 반창고 같이 생긴게(기계화부대 모양) 있음.
 */
export const enemyGroundBaseMechanizedXXX = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<path style="fill:#231815;" d="M18,10.2l2.5-2.4c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L13.7,6
	c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4l-2.5,2.4c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
	c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L18,10.2z"/>
<rect x="13.3" y="17.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#231815;" width="25.8" height="25.8"/>
<rect x="14.6" y="19.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#E85130;" width="23.2" height="23.2"/>
<polygon style="fill:#231815;" points="35.3,21.9 34.7,21.3 26.6,29.8 18.6,21.7 18,22.3 26,30.5 17.9,39 18.5,39.6 26.6,31.1 
	34.6,39.2 35.2,38.6 27.2,30.5 "/>
<path style="fill:#231815;" d="M28,10.2l2.5-2.4C31,7.3,31,6.5,30.5,6c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L23.7,6
	c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4L22,12.6c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
	c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L28,10.2z"/>
<path style="fill:#231815;" d="M38,10.2l2.5-2.4C41,7.3,41,6.5,40.5,6c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L33.7,6
	c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4L32,12.6c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
	c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L38,10.2z"/>
<path d="M29.5,37.7h-5.9c-1,0-1.8-0.6-2.1-1.5h-5.5c-1.6,0-2.9-1.3-2.9-2.9v-5.4c0-1.6,1.3-2.9,2.9-2.9h5.5c0.3-0.9,1.2-1.5,2.1-1.5
	h5.9c1,0,1.8,0.6,2.1,1.5h5.5c1.6,0,2.9,1.3,2.9,2.9v5.4c0,1.6-1.3,2.9-2.9,2.9h-5.5C31.3,37.1,30.5,37.7,29.5,37.7z M15.9,26.5
	c-0.8,0-1.4,0.6-1.4,1.4v5.4c0,0.8,0.6,1.4,1.4,1.4h6.8l0,0.7c0,0.4,0.4,0.8,0.8,0.8h5.9c0.4,0,0.8-0.3,0.8-0.8l0-0.7h6.8
	c0.8,0,1.4-0.6,1.4-1.4v-5.4c0-0.8-0.6-1.4-1.4-1.4h-6.8l0-0.7c0-0.4-0.4-0.8-0.8-0.8h-5.9c-0.4,0-0.8,0.3-0.8,0.8l0,0.7H15.9z"/>
</svg>


`;

/**
 *기본부호 중 적 지상군 관련 부호로 꼭대기에 X 한개가 있고 중간 45도 회전한 사각형 안에 반창고 같이 생긴게(장사정포  모양) 있음.
 */
export const enemyGroundBaseJangSaJungPoX = `
 <svg version="1.1" width="100" height="100"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
 y="0px">
<rect x="13.3" y="17.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#231815;" width="25.8" height="25.8"/>
<rect x="14.6" y="19.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#E85130;" width="23.2" height="23.2"/>
<polygon style="fill:#231815;" points="35.3,21.9 34.7,21.3 26.6,29.8 18.6,21.7 18,22.3 26,30.5 17.9,39 18.5,39.6 26.6,31.1 
34.6,39.2 35.2,38.6 27.2,30.5 "/>
<path style="fill:#E85130;" d="M37.1,25.6h-6.2c0-0.8-0.7-1.5-1.6-1.5h-6c-0.9,0-1.5,0.7-1.6,1.5h-6.2c-1.2,0-2.2,1-2.2,2.2v5.6
c0,1.2,1,2.2,2.2,2.2h6.2c0,0.8,0.7,1.5,1.6,1.5h6c0.9,0,1.5-0.7,1.6-1.5h6.2c1.2,0,2.2-1,2.2-2.2v-5.6
C39.2,26.6,38.3,25.6,37.1,25.6z"/>
<path style="fill:#231815;" d="M28,9.2l2.5-2.4c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L23.7,5
c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4l-2.5,2.4c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L28,9.2z"/>
<path d="M29.2,37.7h-5.9c-1,0-1.8-0.6-2.1-1.5h-5.5c-1.6,0-2.9-1.3-2.9-2.9v-5.4c0-1.6,1.3-2.9,2.9-2.9h5.5c0.3-0.9,1.2-1.5,2.1-1.5
h5.9c1,0,1.8,0.6,2.1,1.5h5.5c1.6,0,2.9,1.3,2.9,2.9v5.4c0,1.6-1.3,2.9-2.9,2.9h-5.5C31,37.1,30.2,37.7,29.2,37.7z M15.7,26.4
c-0.8,0-1.4,0.6-1.4,1.4v5.4c0,0.8,0.6,1.4,1.4,1.4h6.8l0,0.7c0,0.4,0.4,0.8,0.8,0.8h5.9c0.4,0,0.8-0.3,0.8-0.8l0-0.7h6.8
c0.8,0,1.4-0.6,1.4-1.4v-5.4c0-0.8-0.6-1.4-1.4-1.4H30l0-0.7c0-0.4-0.4-0.8-0.8-0.8h-5.9c-0.4,0-0.8,0.3-0.8,0.8l0,0.7H15.7z"/>
<path style="fill:#231815;" d="M28.2,34h-3.4c-1,0-1.8-0.8-1.8-1.8v-3.4c0-1,0.8-1.8,1.8-1.8h3.4c1,0,1.8,0.8,1.8,1.8v3.4
C30,33.2,29.2,34,28.2,34z"/>
</svg>
 
 
 `;

/**
 *기본부호 중 적 지상군 관련 부호로 꼭대기에 XX 두개가 있고 중간 45도 회전한 사각형 안에 반창고 같이 생긴게(장사정포  모양) 있음.
 */
export const enemyGroundBaseJangSaJungPoXX = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
y="0px" >
<rect x="13.3" y="17.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#231815;" width="25.8" height="25.8"/>
<rect x="14.6" y="19.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -14.0871 27.5403)" style="fill:#E85130;" width="23.2" height="23.2"/>
<polygon style="fill:#231815;" points="35.3,21.9 34.7,21.3 26.6,29.8 18.6,21.7 18,22.3 26,30.5 17.9,39 18.5,39.6 26.6,31.1 
34.6,39.2 35.2,38.6 27.2,30.5 "/>
<path style="fill:#E85130;" d="M37.1,25.6h-6.2c0-0.8-0.7-1.5-1.6-1.5h-6c-0.9,0-1.5,0.7-1.6,1.5h-6.2c-1.2,0-2.2,1-2.2,2.2v5.6
c0,1.2,1,2.2,2.2,2.2h6.2c0,0.8,0.7,1.5,1.6,1.5h6c0.9,0,1.5-0.7,1.6-1.5h6.2c1.2,0,2.2-1,2.2-2.2v-5.6
C39.2,26.6,38.3,25.6,37.1,25.6z"/>
<path style="fill:#231815;" d="M23,9.2l2.5-2.4c0.5-0.5,0.5-1.3,0-1.8c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L18.7,5
c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4l-2.5,2.4c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L23,9.2z"/>
<path style="fill:#231815;" d="M33,9.2l2.5-2.4C36,6.3,36,5.5,35.5,5c-0.5-0.5-1.3-0.5-1.8,0l-2.5,2.5L28.7,5
c-0.5-0.5-1.3-0.5-1.8,0c-0.5,0.5-0.5,1.3,0,1.8l2.5,2.4L27,11.6c-0.5,0.5-0.5,1.3,0,1.8c0.2,0.2,0.6,0.4,0.9,0.4
c0.3,0,0.6-0.1,0.9-0.4l2.5-2.5l2.5,2.5c0.2,0.2,0.6,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.3,0-1.8L33,9.2z"/>
<path d="M29.2,37.7h-5.9c-1,0-1.8-0.6-2.1-1.5h-5.5c-1.6,0-2.9-1.3-2.9-2.9v-5.4c0-1.6,1.3-2.9,2.9-2.9h5.5c0.3-0.9,1.2-1.5,2.1-1.5
h5.9c1,0,1.8,0.6,2.1,1.5h5.5c1.6,0,2.9,1.3,2.9,2.9v5.4c0,1.6-1.3,2.9-2.9,2.9h-5.5C31,37.1,30.2,37.7,29.2,37.7z M15.7,26.4
c-0.8,0-1.4,0.6-1.4,1.4v5.4c0,0.8,0.6,1.4,1.4,1.4h6.8l0,0.7c0,0.4,0.4,0.8,0.8,0.8h5.9c0.4,0,0.8-0.3,0.8-0.8l0-0.7h6.8
c0.8,0,1.4-0.6,1.4-1.4v-5.4c0-0.8-0.6-1.4-1.4-1.4H30l0-0.7c0-0.4-0.4-0.8-0.8-0.8h-5.9c-0.4,0-0.8,0.3-0.8,0.8l0,0.7H15.7z"/>
<path style="fill:#231815;" d="M28.2,34h-3.4c-1,0-1.8-0.8-1.8-1.8v-3.4c0-1,0.8-1.8,1.8-1.8h3.4c1,0,1.8,0.8,1.8,1.8v3.4
C30,33.2,29.2,34,28.2,34z"/>
</svg>

`;

/**
 * 기본심볼 중 적군의 위성기지 모양 심볼📡. 아군은 둘러싸고 있는 동그라미가 없지만, 얘는 동그라미 안에 둘러쌓여 있는 형태임.
 */
export const enemySatelliteDishSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<ellipse style="fill:#FFFFFF;stroke:#C30D23;stroke-miterlimit:10;" cx="25.7" cy="26.2" rx="21.4" ry="23.7"/>
<path style="stroke:#000000;stroke-miterlimit:10;" d="M24.2,37.2c10.6,0,17.1-11,12.7-20.2c-0.6-1.2-0.9-1.3-1.8-0.3
	c-2.3,2.5-4.7,5-7.1,7.5c-0.6,0.6-0.9,0.7-1.5,0c-0.7-1-1.9-1.6-2-3.2c0-1-1-1.6-2-1.4c-1,0.2-1.6,0.9-1.6,1.9
	c0,1.1,0.6,1.9,1.6,1.9c1.7,0,2.3,1.6,3.3,2.5c0.5,0.5-0.2,0.8-0.5,1c-2.2,2.4-4.4,4.7-6.7,7c-0.8,0.9-0.7,1.3,0.3,1.8
	C20.9,36.6,22.9,37.1,24.2,37.2z"/>
<path style="stroke:#000000;stroke-miterlimit:10;" d="M37.7,43.1c0-0.1,0-0.3-0.1-0.4c-1.2-2.5-2.3-5.1-3.5-7.7
	c-2.2,1.7-4.6,2.9-7.4,3.2c-0.3,0-0.4,0.2-0.5,0.4c-0.5,1.5-1.4,2.9-1.7,4.5C28.9,43.1,33.3,43.1,37.7,43.1z"/>
<path style="stroke:#000000;stroke-miterlimit:10;" d="M19,24.3c0.2,0,0.4-0.1,0.5-0.2c0.4-0.3,0.5-0.9,0.2-1.3l-3.4-4.7l5-0.7
	l-5.9-7.8c-0.3-0.4-0.8-0.5-1.2-0.1c-0.4,0.3-0.4,0.9-0.1,1.3l4,5.3l-5,0.7l5.2,7.2C18.5,24.2,18.7,24.3,19,24.3z"/>
</svg>
`;

/**
 * 기본심볼 중 적항공기 모양
 */
export const enemyJetSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
	 <ellipse style="fill:#FFFFFF;stroke:#C30D23;stroke-miterlimit:10;" cx="25.7" cy="26.2" rx="21.4" ry="23.7"/>
	 <path d="M26,45.7c0.7-1.1,1-2.3,1.2-3.5c0.2-0.9,0.3-1.9,0.4-2.8c0.2-1.4,0.4-2.9,0.6-4.3c0.2-1.4,0.4-2.7,0.6-4.1
		 c0.2-1.3,0.4-2.6,0.6-3.9c0-0.2,0.2-0.4,0.4-0.6c2.7-2.4,5.3-4.9,8-7.3c0.3-0.3,0.4-0.5,0.5-0.9c0-1,0.1-2,0.2-3.1
		 c0-0.1,0-0.2,0-0.4c-0.8,0.3-1.6,0.5-2.4,0.8c-1.2,0.4-2.3,0.8-3.5,1.1c-0.6,0.2-1.2,0.4-1.8,0.6c-0.3,0.1-0.4,0-0.4-0.3
		 c-0.1-0.4,0.1-0.7,0.4-1.1c1.1-1.2,2.2-2.4,3.3-3.7c0.2-0.2,0.2-0.4,0-0.7c-0.3-0.5-0.7-1-1-1.5c-0.1-0.2-0.3-0.3-0.5-0.2
		 c-1.6,0.2-3.2,0.4-4.7,0.6c-0.3,0-0.6,0-0.7-0.4C26.8,9.1,26.4,8,26,6.8c0,0,0-0.1-0.1-0.2c-0.1,0.4-0.3,0.7-0.4,1.1
		 c-0.3,0.9-0.6,1.8-0.9,2.7c0,0.1-0.3,0.2-0.4,0.2c-0.6,0-1.2-0.1-1.9-0.2c-1.1-0.1-2.1-0.3-3.2-0.4c-0.1,0-0.3,0.1-0.4,0.2
		 c-0.4,0.5-0.7,1.1-1.1,1.6c-0.2,0.2-0.1,0.4,0.1,0.6c1.2,1.3,2.3,2.6,3.5,3.8c0.3,0.4,0.2,0.7,0.2,1.1c0,0.1-0.2,0.1-0.3,0.1
		 c-1.3-0.4-2.6-0.9-3.8-1.3c-1.1-0.4-2.2-0.7-3.3-1.1c-0.2-0.1-0.3-0.1-0.5-0.2c0,0.2,0,0.3,0,0.5c0.1,1,0.1,2,0.2,3
		 c0,0.4,0.1,0.6,0.4,0.9c2.3,2.1,4.6,4.2,6.9,6.3c0.4,0.4,0.8,0.7,1.2,1.1c0.1,0.1,0.3,0.4,0.3,0.5c0.2,0.9,0.3,1.7,0.4,2.6
		 c0.2,1.1,0.3,2.1,0.5,3.2c0.1,0.9,0.3,1.8,0.4,2.7c0.2,1.4,0.4,2.8,0.6,4.2c0.1,0.7,0.2,1.5,0.3,2.2c0.2,1.3,0.5,2.5,1.2,3.6
		 C25.9,45.7,26,45.7,26,45.7z"/>
	 </svg>

`;

/**
 * 기본 심볼 중 적 SAM 기지 모양
 */
export const enemySAMBaseSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
	<ellipse style="fill:#FFFFFF;stroke:#C30D23;stroke-miterlimit:10;" cx="25.4" cy="26.7" rx="21.4" ry="23.7"/>
	<path d="M38.6,15.6c-0.6-0.4-1.3-0.4-2-0.2l2.4-3c0.7-0.8,0.5-2-0.5-2.6c-0.9-0.6-2.2-0.4-2.9,0.4l-1.6,2c0-0.5-0.3-1.1-0.8-1.4
		c-0.9-0.6-2.2-0.4-2.9,0.4l-1.6,2c-0.2-0.2-0.4-0.4-0.6-0.6c-1-0.6-2.3-0.4-3.1,0.4L8.9,31.8c-0.7,0.8-0.5,2,0.5,2.6
		c0.4,0.2,0.8,0.4,1.3,0.4c0.2,0,0.3,0,0.5-0.1l-0.9,1.1c-0.7,0.8-0.5,2,0.5,2.6c0.4,0.2,0.8,0.4,1.2,0.4c0.6,0,1.3-0.3,1.7-0.8l0,0
		c0,0.5,0.3,1.1,0.8,1.4c0.4,0.2,0.8,0.4,1.2,0.4c0.3,0,0.5-0.1,0.8-0.1l-2.1,2.6c0,0,0,0,0,0c-0.1,0.1-0.1,0.1-0.1,0.2
		c0,0,0,0.1-0.1,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0c0,0,0,0.1,0,0.1
		c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.1
		c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1c0.1,0,0.2,0.1,0.2,0.1
		c0,0,0.1,0,0.1,0c0.1,0,0.2,0.1,0.2,0.1c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3,0c0,0,0,0,0.1,0L31,45.4c0,0,0,0,0,0
		c1.1,0,2.1-0.8,2.1-1.8c0-1-0.9-1.9-2-1.9l-10.4-0.1l16-17.8c0.7-0.7,0.6-1.8-0.1-2.5l2.5-3.1C39.7,17.4,39.5,16.3,38.6,15.6z"/>
	<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-49.1" y1="39.6" x2="-74.6" y2="74.7"/>
	<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-miterlimit:10;" x1="-56" y1="32.8" x2="-80.1" y2="65.8"/>
	<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-49.1" y1="31.8" x2="-75.1" y2="67.5"/>
	<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-56" y1="32.8" x2="-80.1" y2="65.8"/>
	<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-62.3" y1="33.7" x2="-80.7" y2="59"/>
	<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-74.6" y1="74.7" x2="-56.7" y2="75"/>
	<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-51.9" y1="46.9" x2="-71.9" y2="71.6"/>
</svg>

`;

/**
 * 기본 심볼 중 적 TAM 모양 (총알 모양)
 */
export const enemyTAMSymbol = `
<svg version="1.1" width="100" height="100"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
y="0px">
<ellipse style="fill:#FFFFFF;stroke:#C30D23;stroke-miterlimit:10;" cx="26.2" cy="26.2" rx="21.4" ry="23.7"/>
<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-49.1" y1="39.6" x2="-74.6" y2="74.7"/>
<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-miterlimit:10;" x1="-56" y1="32.8" x2="-80.1" y2="65.8"/>
<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-49.1" y1="31.8" x2="-75.1" y2="67.5"/>
<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-56" y1="32.8" x2="-80.1" y2="65.8"/>
<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-62.3" y1="33.7" x2="-80.7" y2="59"/>
<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-74.6" y1="74.7" x2="-56.7" y2="75"/>
<line style="fill:none;stroke:#C30D23;stroke-width:5;stroke-linecap:round;stroke-miterlimit:10;" x1="-51.9" y1="46.9" x2="-71.9" y2="71.6"/>
<g>
<path d="M33.2,22.2c1,0,1.6-1.1,1.1-2l-7-12.2c-0.5-0.9-1.8-0.9-2.3,0l-7,12.2c-0.5,0.9,0.1,2,1.1,2h-1.3V42h16.6V22.2H33.2z"/>
<rect x="17.9" y="42.7" width="16.6" height="2.2"/>
</g>
</svg>

`;

/**
 * 기본 부호 중 적군 해군의 앵커 모양
 */
export const enemyAnchorSymbol = `
<svg version="1.1" width="100" height="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<ellipse style="fill:#FFFFFF;stroke:#C30D23;stroke-miterlimit:10;" cx="26.3" cy="26.9" rx="21.4" ry="23.7"/>
<g id="uMZgDw.tif">
	<g>
		<path d="M27.5,23.7c0.7,0,1.4,0,2.1,0c0.9,0.1,2.3-0.4,2.3,1c0,1.4-1.4,1-2.2,1.1c-0.7,0.1-1.4,0-2.3,0c0,4.7,0,9.1,0,13.5
			c3-0.1,5.7-1.6,7.6-4.3c-0.7-0.3-1.4-0.6-2.3-1c1.8-1.6,3.4-3.1,5.3-4.9c0.5,2.5,1,4.6,1.6,7.1c-1.9-0.9-2.7-0.1-3.6,1
			c-5,5.9-14.5,5.8-19.5-0.2c-1.2-1.4-1.2-1.4-3.4-1c0.5-2.3,0.9-4.4,1.5-7c1.9,1.7,3.5,3.2,5.3,4.8c-0.9,0.4-1.5,0.7-2.4,1.1
			c1.9,2.6,4.3,4,7.6,4.4c0-4.5,0-9,0-13.7c-1,0-2,0.1-3,0c-0.5-0.1-1-0.6-1.5-1c0.5-0.3,0.9-0.9,1.4-1c1-0.2,2,0,3.1,0
			c0.3-1.9,0.5-3.3-1.4-4.3c-2-1.1-2-4.3-0.4-6.1c1.5-1.7,4.6-1.7,6.2,0c1.6,1.8,1.6,4.9-0.4,6.1C27.1,20.5,27.2,21.9,27.5,23.7z
			 M26.8,18.5c0.4-0.5,1.3-1.3,1.5-2.1c0.3-1.3-0.7-2.2-2-2.2c-1.2,0-2.1,0.8-2.1,2C24.1,17.5,24.9,18.2,26.8,18.5z"/>
	</g>
</g>
</svg>

`;

/**
 * 기본 부호 중 적군 해군 미사일 발사대
 */

export const enemyMissileLauncher = `
<svg version="1.1" width="100" height="100"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px">
<ellipse style="fill:#FFFFFF;stroke:#C30D23;stroke-miterlimit:10;" cx="27.1" cy="26.1" rx="21.4" ry="23.7"/>
<path d="M35.6,33.3l3.4-3.4l-1.2-1.2l-4.6,4.6h-0.8l5-5L26.2,17.1l-0.5,0.5c0.4-0.4,0-1.2-0.7-1.5l-9.4-4.3
	c-0.7-0.3-1.1,0.1-0.8,0.8l4.3,9.4c0.3,0.7,1.2,1.1,1.5,0.7l-0.5,0.5l5.6,5.6l-4.6,4.6h-8v7.2h28v-7.2H35.6z M26.9,29.9l3.5,3.5h-7
	L26.9,29.9z"/>
</svg>

`;
