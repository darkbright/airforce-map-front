![logo](./public/logo192.png)

# 공군 상황도 시스템 FrontEnd

<br>
<br>

> 본 문서를 편하게 보시려면, `VsCode` 좌측 패널의 디렉터리에서 본 파일명을 우클릭하시고
> `Open Preview` 버튼을 눌러 보시길 바랍니다.

<br>
<br>

---

## 개발환경세팅

<br>
<br>

> 본 세팅에서는 윈도우즈 10만을 다룹니다.

<br>
<br>

### 준비물

1. 필수

- 소스코드(폴더명 Airforce-map-front)
- node.js 설치파일
- yarn 설치파일
- VsCode(Visual Studio Code) 설치파일
- VsCode Extensions (EsLint, Prettier)
- Chrome 브라우저

2. 옵션

- VsCode Extensions (기타 프로그램들 - 아래에서 설명)
- Chrome 브라우저 확장 프로그램 (React Developer Tools)

<br>
<br>

<br>
<br>

1. node.js 설치

먼저 node.js 버전 v16 이상을 설치해주세요. (다운로드 파일은 Nas에서 획득하시기 바랍니다.) node.js가 잘 설치되었는지 확인하시려면 Windows Powershell 또는 cmd을 켜시고 다음과 같이 입력하시길 바랍니다.

```
  node --version
```

아울러 node가 설치되어 있다면 node의 패키지 매니저인 `npm` 역시 설치되어 있어야 합니다. `npm`은 node.js가 설치되면 함께 설치됩니다. 잘 설치되었는지 버전을 확인해보세요.

```
  npm --version
```

<br>
<br>

2. yarn 설치

yarn은 NPM 대신 사용할 node/자바스크립트 패키지 매니저입니다. yarn은 npm 대비 속도 및 보안성에서 더 우수하기 때문에 본 프로젝트에서는 yarn을 사용합니다. Nas에서 Yarn 설치 파일을 획득해주세요. 설치 파일을 실행하여 설치해주세요. 상기와 동일하게 yarn이 잘 깔렸는지 powershell 또는 cmd에서 yarn의 버전을 확인해주세요.

```
  yarn --version
```

<br>
<br>

3. VsCode 설치

본 프로젝트에서는 IDE로 Visual Studio Code를 사용합니다. Nas에서 VsCode 설치 파일을 다운받아주세요.

<br>
<br>

4. VsCode Extension 설치

Nas에서 `EsLint` 및 `Prettier`을 다운받으신 후 **\*** 폴더에 붙여 넣으세요. 설치가 되었다면 Vscode를 켜시고 좌측 패널에서 큐빅 모양으로 생긴 아이콘(아마도 위에서부터 5번째에 위치)를 누르시면 INSTALLED에 해당 Extension이 설치되어 있을 것입니다.
<br>
본 외로 다음과 같은 Extension을 추가로 설치하실 수도 있습니다. 필요하시다면 폴더에 넣어주시면 됩니다.

- colorize : 소스코드에서 CSS 등 색상을 선택하실 때 그 색상 자체를 소스코드 내에서 hex/rgba 코드가 아닌 실제 색상을 보여줌. 컬러피커가 열려 코드 내에서 색상을 자유롭게 변경할 수 있음.
- atom one dark theme: vscode 테마 중 하나로, 기본 테마가 싫으시다면 실행
- eslint: 하기에서 상세히 설명. Javascript/Typescript Linter
- prettier: 하기에서 상세히 설명. 코드 저장 시 예쁘게 자동 정렬됨
- ES7_React/Redux/React-native snippets: React 관련 신규 파일 생성 시 default로 사용해야 하는 코드를 자동으로 생성해주어 귀찮게 똑같은 코드를 입력하는 것을 방지해줌
- Live Server: d2 Map Sample을 보시고자 하시는 분들에게 해당함.
- Material Icon Theme: 디렉토리 트리에서 각 파일 확장명에 맞는 해당 언어/파일의 로고를 보여주어 보다 빨리 파일을 찾을 수 있음.

<br>
<br>

5. 소스코드 파일 실행

먼저 소스코드를 적당한 디렉토리에 다운 받으신 후, 그 위치를 Powershell 또는 cmd로 열어주세요. 그런 뒤 다음과 같이 입력합니다.

```
code .
```

상기 명령어는 VsCode를 여는 명령어입니다.

VsCode 좌측 맨 위 문서모양 아이콘을 클릭하여 디렉토리가 제대로 나타나는지 확인하세요. `AIRFORCE_MAP_FRONT`가 폴더 명이고 node_modules, public, src 등 폴더가 보여야 정상적으로 진입한 것입니다.
<br>
이제 VsCode의 상단 메뉴바에서 Terminal을 클릭하시고 New Terminal을 클릭하세요. IDE 하단에 Terminal 패널이 열립니다. Terminal 패널에 다음과 같이 입력하세요.

```
yarn start
```

구동이 시작되고 자주 사용하는 브라우저에 `localhost:3000`에 프로젝트가 열립니다. 원활한 디버깅을 위하여 Chrome으로 여는 것을 추천 드립니다.
만약 3000번 포트를 사용 중이어서 에러가 뜨거나 특정 이유로 포트를 변경하고자 하시는 경우, 다음과 같이 합니다.<br>
우선 프로젝트를 중단해주세요. 프로젝트를 중단하시려면 터미널 활성화(마우스 커서가 깜빡이도록 클릭 한번 ) 후 `ctrl` + `c`를 입력합니다. 프로젝트가 종료됩니다.

root 폴더에서 `package.json` 파일을 열어주세요. 그리고 다음과 같이 "scripts"의 내용을 고쳐주세요.

```
"scripts": {
  "start": "set PORT=3001 && react-scripts start",
  ...
}
```

저장 후 `yarn start`를 다시 해보세요. 해당 포트에서 프로젝트가 열립니다.

<br>
<br>

---

## 디렉터리 구조

React로 작성된 현 프로젝트는 일반적인 React 프로젝트의 디렉토리 구조와 유사합니다. 크게 보면 `public`, `src` 및 설정 파일들로 구성되어 있으며, 아래의 내용과 같이 정리됩니다.
<br>
<br>

1. `public` Directory

- React에서 따로 빌드를 거치지 않는 Static한 파일들을 담고 있습니다.
- 일반적인 웹사이트가 렌더링되기 위하여 필요한 `index.html`파일이 본 프로젝트의 시작 파일이며 전체 자바스크립트 모듈을 로드하기 위한 ` <div id="root"></div>`가 핵심이 되는 태그입니다.
- 이 외 파비콘 및 추후 `Progressive Web App`을 구축하거나 브라우저에서 보다 본 프로젝트를 잘 이해하기 할 수 있도록 도움을 주는 `manifest.json`, 외부망인 경우 서치엔진이 프로젝트를 Indexing하는 설정 값인 `Robots.txt`(본 프로젝트에서는 당연히 사용하지 않습니다) 등이 포함되어 있습니다.
  <br>
  <br>

2.  `src` Directory

- 이 부분은 아래에서 별도로 설명드리겠습니다.
  <br>
  <br>

3. `package.json` File

- `package.json`은 `node_modules` 관리 및 쉘스크립트 명령어 단축키, 버전 등 프로젝트 전반 정보 관리를 할 수 있도록 하는 파일로, `nodejs`를 사용하는 모든 프로젝트들은 해당 파일을 반드시 필요로 합니다. 해당 파일에 대한 상세한 설명을 인터넷을 참조하시길 바랍니다.
- `node_modules`에 포함될 다양한 library들의 설치 여부는 `dependencies` 항목에서 그 리스트를 찾아볼 수 있습니다.
  <br>
  <br>

4. `.eslintrc.json` File

- `Eslint`는 Javascript 및 Typescript 의 문법적 오류 및 문법 컨벤션 등을 `VsCode` 내에서 사전에 감지할 수 있는 라이브러리로, `Java`를 포함한 컴파일 언어들의 IDE들이 파일 작성 중에 오류를 확인할 수 있는 것과 유사한 효과를 낼 수 있습니다.
- 또한 `Eslint`는 ES6 이후 보다 엄격해진 Javascript의 문법을 최대한 반영하여 예컨대 `var`과 같이 전역으로 쓰이며 Scope Hoisting을 일으키거나 클로저에 혼란을 가할 수 있는 변수를 사용하지 못하게 사전에 차단함에 따라 보다 견고한 프로젝트를 만드는데 도움을 줍니다.
- 또한 코딩 스타일(줄간격, Indentation, Destructuring, arrow Function style....등)을 통일할 수 있어 다수의 개발자들이 한 사람이 쓴 것처럼 깔끔한 코드를 구현할 수 있게 도움을 줍니다.
- 해당 파일은 Linter의 설정 값을 정의한 파일입니다.
  <br>
  <br>

5. `prettierrc` File

- `Eslint`와 함께 짝을 이루는 `VsCode` 전용 줄맞춤, 띄워쓰기 등을 도와주는 `Prettier`의 스펙을 정의한 파일입니다. `Prettier`가 있음으로 인해 어지럽게 작성된 코드도 파일 저장을 하는 순간 모조리 예쁘게 정렬됩니다.
  <br>
  <br>

6. `.gitignore` File

- 깃허브, 깃랩 등 깃 관리 도구에 프로젝트를 등록하는 경우, 민감한 정보 내지는 용량이 너무 큰 파일들을 **제외** 시켜 보다 효율적으로 Git을 관리할 수 있도록 하는 파일입니다.
- 본 프로젝트 개발 기간 동안 우리는 폐쇄망에서 깃랩을 활용하여 버전관리를 하고 있습니다. 필요 시 해당 깃랩을 유지보수팀에서도 사용하실 수 있겠습니다.
- 해당 파일은 어떤 것을 제외시킬지 규정한 파일입니다. 이 파일은 자바스크립트 뿐만 아니라 어느 언어에도 동일하게 적용되는 파일 형식입니다.
  <br>
  <br>

7. `tsconfig.json` File

- `Typescript` 정의 파일입니다.
  <br>
  <br>

8.  `Yarn.lock` File

- 우리 프로젝트는 Package 관리 도구로 `npm` 대신 `yarn`을 사용하고 있습니다.
- 해당 파일은 설치된 Package 로그로 deploy, clone 후 `yarn install` 등에 반드시 필요하므로 절대 건드리면 안됩니다.

<br>
<br>

---

## SRC Directory 설명

1. `index.tsx` File

- 아래의 코드와 같이 `id`값 `root`를 찾은 뒤(`public/index.html`에 정의된 것과 같이) 전체 코드를 `root`에 담는 역할을 하는 시작 파일입니다.

```
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
```

<br>
<br>

2. `App.tsx` File

- `index.tsx`에 정의된 `<App />`이 정의된 파일입니다.
- 본 프로젝트의 실질적인 시작 파일입니다.
  <br>
  <br>

3. `assets` Directory

- 각종 자원이 되는 파일들을 담고 있습니다.
- 본 프로젝트에서는 각종 `svg`, `png`, `jpg/jpeg` 등의 파일을 저장해 두었습니다.
- 주로 프로젝트 로고, 메뉴나 내비게이션, 각종 툴바에 담긴 아이콘들, 지도와 관련된 부호 등이 저장되어 있으니 필요한 파일을 꺼내다가 붙여 넣으면 됩니다.
  <br>
  <br>

4. `components` Directory

- 각종 `UI` 요소들을 사전에 정의하여 조립할 수 있게 만들어놓은 요소 모음입니다.
- 이는 `UI`의 스타일 및 `props`들을 `components`외에서 사용할 수 있도록 그 `원형`을 구조화해놓은 형식으로, 전형적인 React 프로젝트의 개발 구조를 따르는 것입니다.
- 이런 식의 개발은 각종 요소들을 미리 정의하고, 이 것들을 Page 등에서 가져다 쓰는 구조이므로 전체 프로젝트의 스타일 및 사용 함수들을 통일할 수 있고, Publisher를 별도로 필요로 하지 않게 됩니다.
- `components`에서 가져다가 `modules`에서 조립된 `UI` 덩어리는 `Pages`에서 최종 구현됩니다.
  <br>
  <br>

5. `data` Directory

- 하드코딩이 필요한 데이터, 미리 정의해둔 배열 등이 정리된 파일 폴더입니다.
- 메뉴 리스트, 지도 레이어 리스트, 지도 그리드 리스트 등 각종 데이터들이 정리되어 있습니다. 추후 메뉴를 추가하시거나, 지도 레이어 등을 추가/삭제하고자 하시는 경우 해당 파일만 정리해주시면 전체 구현이 자동으로 구현되므로 해당 디렉토리를 유심히 확인해 주시길 바랍니다.
  <br>
  <br>

6. `libs` Directory

- `D2 Map Library` 또는 `Openlayers`와 관련된, 즉 지도 모듈의 구현과 관련된 각종 구동 함수 및 구현 함수들이 포함되어 있는 파일 모음입니다.
  <br>
  <br>

7. `modules` Directory

- `components`에서 필요한 `UI elements`를 가져와 `modules`에서 보다 상세히 구현합니다(이는 반드시 그래야 하는 것이 아니라 본 프로젝트에서 정의한 코딩 규칙의 일환입니다. 결국 모든 내용들은 `Pages`의 형식으로 뭉쳐지게 되는데, 모든 내용을 `Page`에 한번에 담으면 파일이 너무 복잡하고 지저분해지기 때문입니다.). `modules`는 원형이 아닌 특정한 목적으로 특정한 페이지를 구현하기 위한 **semi-built**된 조합물이므로, 특정한 1개의 목적을 위하여 만들어집니다.
- 예컨대, 지도에서 구현할 Grid 요소를 불러오는 `Popup`(여기서는 `Modal`이라고 칭함)을 하기 위해서는 `components` 내에서 `modal`요소, `button` 요소, `form` 요소 등을 가져와 `modules/map/MapGridControlModal.tsx`파일에 조립하여 붙여넣게 됩니다. 해당 파일은 단 한가지의 목적인 Grid의 요소를 불러오는 `Popup`의 역할을 위하여 만들어졌기 때문에, 다른 곳에서 다용도로 사용할 수 없습니다.

<br>
<br>

8. `pages` Directory

- `pages`라고 정의하였지만, 기본적인 React의 컨셉은 `Single Page Application`, 약자로 SPA의 형식을 따릅니다. React와 더불어 `Vue`, `Angular`등도 SPA의 일환입니다.
- 따라서 React에는 별도의 `Page`라는 개념은 없고, 전체 `Application`이 단 하나의 `Page`로 구성되어 있는 셈입니다. 말하자면 이는 일반적인 비웹개발의 구현과 비슷합니다.
- SPA에 대한 상세한 설명은 인터넷을 찾아보시면 되나, 간략히 설명드리면 SPA를 구현함으로써 반복적으로 생산해야내는 유사한 류의 `html`페이지들, 자바인 경우 `jsp`페이지들의 어지러운 나열이 사라지고, 신규 페이지를 로드할 때마다 Network에서 rendered html을 가져오는 일을 줄이게 됩니다. 왜냐하면 SPA는 첫 구동 시 단 한번만 모든 코드를 불러오면 끝이기 때문입니다.
- 따라서 여기서 말하는 `Page`란 일반적인 개념 하에서의 단독 url을 갖는 1개의 html 덩어리를 의미하는 것이 아니라, 특정 url 진입 시 **보여줄** 특정한 요소를 의미하게 됩니다.
- 정리하면 특정 url 진입 시, 그 url에 매칭되는 React 요소를 찾아서 (`React-router-dom`에서 처리), 그 요소를 보여주는 개념이라고 생각할 수 있겠습니다.
- 따라서 `index.html` 내의 `id="root"`는 `src/index.tsx`의 `root`가 되며, 이 `root`는 `src/App.tsx`의 `<App />`으로 대표되며, `<App/>`에는 `<Router>`를 통한 url별 요소들 보여주기의 구조로 뿌리로부터 점차 가지를 펼쳐나가는 전형적인 `tree`구조라고 이해하실 수 있겠습니다.
- `pages` 정의된 개별 파일들은 `<Router />`에서 조건에 따라 화면에 표시될지 여부가 결정됩니다.

<br>
<br>

9. `query` Directory

- `Backend`와 통신할 `API` 목록을 정의하고, `React-query`를 통하여 화면에 뿌리거나, 생성/업데이트 해줄 데이터를 핸들링하게 됩니다.

<br>
<br>

10. `routes` Directory

- `Pages`에서 정의된 파일들을 어떠한 조건 하에서 불러오게 할 것인지가 정의된 디렉토리입니다.
- `React-router-dom`을 이용하여, `Authentication`, 페이지별 `Authorization` 등을 모두 정의합니다.
- 크게보면 라우팅 전략은 로그인/비로그인, 권한있음/권한없음, url 매칭 여부 등에 따라 분기하게 되는데, 이러한 구조를 모두 따르고 있습니다.
- 한편, 상기한 8번 항목에서 설명한 바와 같이, 페이지라는 것은 원래 따로 존재하는 것이 아니라 단 한개의 페이지 즉, SPA라는 개념을 응용하면, 모든 페이지에서 보여줄 요소와 조건부로 보여줄 요소를 구분하여 코딩할 수 있게 됩니다. 이렇게 모든 페이지 내지는 특정 페이지의 묶음에서 공통적으로 보여줄 요소(예를 들면 메뉴나 Header, Footer와 같은 류)들은 `<Outlet />`이라는 개념을 통해 구현됩니다. 해당 내용의 상세한 설명은 인터넷에서 `React-router-dom v6`를 살펴보시길 바랍니다.

<br>
<br>

11. `stores` Directory

- 해당 디렉토리는 전체 프로젝트의 전역변수를 관리하기 위한 디렉토리입니다.
- 전역으로 사용된다고 하는 것은 크게 다음과 같이 나눌 수 있습니다.
  1. 페이지를 여기저기 이동하여도, 다량의 component들을 이곳 저곳에서 사용하여도, 특정한 값이 일관적으로 유지되어야 함.
  2. 브라우저에서 해당 프로젝트를 껐다 키거나, 새로고침을 하여도 특정한 값이 일관적으로 유지되어야 함.
- 전통적으로 React에서는 `Redux`를 사용하였으나, 여기서는 보다 간편하게 전역관리를 도와줄 `Zustand`를 사용합니다.
- 상기의 1번의 경우, 로그인과 같은 경우가 해당됩니다. `useAuth`파일을 참고해보세요.
- 상기의 2번의 경우, 프로젝트의 스타일 중 다크모드/라이트모드, 즐겨찾기 페이지 등이 해당됩니다. 사이트를 종료한 후 다시 켰을 때 유저가 설정해둔 값은 유지가 되어야 합니다. 이러한 경우 굳이 DB까지 거치지 않더라도, 브라우저의 LocalStorage 내 그닥 중요하지 않은 간단한 정보를 저장해 둘 수 있습니다. `useThemeStore`나 `useFavoritePageStore`파일을 참고해보세요.

<br>
<br>

12. `styles` Directory

- 일반적인 방식의 `css`를 활용하여 전체 프로젝트 스타일링을 관리할 수도 있지만, 프로그래밍틱하게 css를 제어하는 것이 여간 번거로운 일이 아닙니다. 그리하여 css 자체를 자바스크립트로 생성하고 컨트롤하는 방식의 `css-in-js`와 같은 방식이 널리 퍼지게 되었고, 본 프로젝트는 그와 유사한 `material-ui`의 styling 방식을 이용합니다. 더 구체적으로는 `styled-components`와 매우 유사한 방식입니다.
- `material-ui`(줄여서 `MUI`)란, 구글에서 고안한 `Material-design`의 원칙에 기반하여 제작된 UI 라이브러리로, React 전용입니다. 마치 옛날에 많이 쓰였던 부트스트랩 등과 유사하지만 `jQuery`가 아닌 React를 위한 디자인 component로 이해해야 합니다. (논외로, React나 vue 등을 사용하는 경우 jQuery는 사용하지 않아야 합니다. 혼합하는 경우 DOM에 더 많은 혼란을 줍니다.)
- `theme.ts` 파일이 기본적인 규격을 정의한 파일입니다. 해당 파일 + MUI 규격이 합쳐저 전체 디자인 기본 요소가 되며, `components` 디렉토리에서 정의된 각각의 UI 요소들에 본 프로젝트를 위한 스타일링이 더해집니다.
- 그러나, 외부 라이브러리 또는 D2 제작 지도 속성 등은 기존에 쓰인 CSS를 그대로 따라야 하므로 필요 시 CSS를 추가하거나 수정하여 사용할 수 있도록 css 파일도 구성되어 있습니다.

<br>
<br>
13. `types` Directory

- 타입스크립트 전용 타입들을 적어놓은 디렉토리입니다.
- 타입스크립트는 자바스크립트의 고질적인 단점인 명시된 `형` 또는 `Type`이 없음에 착안하여 마이크로소프트에서 개발한 자바스크립트 상위 호환 언어입니다. 현재 이 글을 보시고 계시는 VsCode도 타입스크립트로 만들엇습니다.
- 따라서 필요로 하는 type들을 정리해 둔 파일들입니다.

<br>
<br>

14. `utils` Directory

- 자주 사용되는 유용한 함수들을 모아둔 디렉토리입니다.
- `consonant`와 같은 경우, 한글 받침의 여부에 따라 "을를" 등과 같이 조사가 바뀌는 것을 자동으로 감지해주는 기능입니다.
- `coordConversion`의 경우 Database에서 받은 좌표 형식을 경위도 형식으로 뱉어줍니다.
- `reorder`은 배열의 순서를 바꿀 때 사용합니다
- `time`은 다양한 형식의 날짜시간관련 내용을 원하는 방식으로 바꿔 출력해주는 함수입니다.

<br>
<br>

<br>
<br>

## 할 일 중 해소해야 할 것을 적어놓은 주석 시작 문구

`TO_BE_CHECKED`

## Acronyms

- OGC: Open Geospatial Consortium (맵서비스 인증 컨소시움으로 map 표준 인증 담당)
- WMS: Web Map Service
- MVT: Mapbox Vector Tiles
- TMS: Tile Map Service
- FDB: Feature Database
- OSM: OpenStreetMap ?
- COP: Common Operation map (공통작전 지도)
- MGRS: 좌표계의 한 형식
- GARS: Global Area Reference System
