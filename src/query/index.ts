/**
 * 백엔드 서버 주소 단축 변수로 백엔드 서버 주소를 변경하고자 하는 경우
 * -  모든 파일들간의 유기적인 기능을 통일시키기 위하여 `.env`파일에서 변경
 * -  만약 .env 가 안되는 경우 하드코딩으로 여기에 적을 것
 */
export const API_URL = process.env.REACT_APP_BACKEND_SERVER_URL;
