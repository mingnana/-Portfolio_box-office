# [Box Office](https://mingnana.github.io/Portfolio_box-office/mainPage.html)


#### 1. 프로젝트 소개
```md
* Javascript를 학습하기 위해 기존의 롯데시네마 페이지를 모티브로 하여 만든 포트폴리오입니다.
* 4가지 해상도에 따라 보이도록 미디어 쿼리를 작성하여 반응형으로 제작하였습니다.
```

#### 2. 프로젝트 기간
```md
* 2022.04.01 ~ 2022.05.25
```

#### 3. 사용 stack 및 tool
```md
1) Front-end stack 
  - HTML5, CSS3, JQuery JavaScript 으로 구현 

2) IDE
  - Visual Studio Code
```

#### 3. 프로젝트 url

1) [mainPage](https://mingnana.github.io/Portfolio_box-office/mainPage.html)
2) [로그인](https://mingnana.github.io/Portfolio_box-office/login.html)
3) [회원가입](https://mingnana.github.io/Portfolio_box-office/signup.html)


#### 5. 프로젝트 설명
```md
* HomePage
  처음 접속하면 나오는 메인페이지로 html과 css만으로 드롭메뉴 구현
* 비쥬얼영역 자동 이미지 슬라이딩
  3초마다 자동으로 이미지가 넘어가는 이미지 슬라이딩 구현
  window.width * 슬라이드의 index 넘버만큼 왼쪽으로 넘어가도록 반복문 설정
  슬라이드가 일정부분 이상 넘어가면, 다시 첫번째 슬라이드로 이동하도록 작성
* 랭크영역 이미지 슬라이딩
  스와이프 방향에 따라 해당방향으로 한칸씩 슬라이드 이동

```
<img src="https://user-images.githubusercontent.com/96216178/171079698-cf8e0820-38a6-4ea7-8b60-1d294ed68a5d.gif">

```md
* 탭메뉴
  버튼을 누르면 아래 영역에 해당 콘텐츠가 보여지는 탭메뉴
  웹접근성을 준수하여 tab키 적용 가능
```
<img src="https://user-images.githubusercontent.com/96216178/171081433-5d96a189-5316-4a0c-9082-2f06e898fe96.gif">

```md
* 유효성 검사
  각 회원정보를 input으로 입력받아 정규표현식을 이용해 체크함
  지정값과 다를 경우 경고창을 띄우고 해당칸으로 포커스됨
```
<img src="https://user-images.githubusercontent.com/96216178/171081683-762ad5af-2303-415b-8f2c-9decfcc830ce.gif">

```md
* 주소찾기 api 적용
  외부 api를 적용하였으며, 사용자로부터 입력된 우편번호, 도로주소값을 넘겨받아와 작성됨
* 
```
<img src="https://user-images.githubusercontent.com/96216178/171081903-06dbc754-6e85-47bf-b05b-e06438a58e2a.gif">

```md
* 모두 동의하는 체크박스
  모두 동의한다는 체크박스 or 문구 클릭시 모든 체크박스에 체크표시
```
<img src="https://user-images.githubusercontent.com/96216178/171082068-0fc6826a-b59f-4de8-8691-8a70e2c2141f.gif">

```md
* 반응형 웹페이지 
  pc(1024px), 태블릿pc(768px), 모바일 가로(480px), 모바일 세로(320px)의 4가지 해상도에 따라 ui 등이 유동적으로 변할수있도록 미디어 쿼리로 작성하여 반응형으로 제작
```
--------

#### 5. 프로젝트 Review

```md
 1) 미디어쿼리를 학습하면서 유연한 ui 개발의 필요성에 대해 알게되었고, 반응형에 대한 이해도를 높였음
 2) 다음 우편번호 API의 경우 별도의 키발급도 필요없어 사용법이 매우 간단함. 
    하지만 오픈소스에 대한 이해도를 높이기 위해서 우체국이나 도로명주소 API를 사용하여 학습해봐야 할것같음
 3) 아직 협업을 위한 코드의 개발이나 준비가 부족해서 협업을 위해 jsp을 이용한 동적 웹페이지를 개발하는 방법도 학습해야 할것같음
```
