import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
@font-face {
	font-family: 'Pretendard';
	font-weight: 900;
	font-display: swap;
	src: local('Pretendard Black'), url('./Pretendard/Pretendard-Black.woff2') format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 800;
	font-display: swap;
	src: local('Pretendard ExtraBold'), url('./Pretendard/Pretendard-ExtraBold.woff2') format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
	font-display: swap;
	src: local('Pretendard Bold'), url('./Pretendard/Pretendard-Bold.woff2') format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 600;
	font-display: swap;
	src: local('Pretendard SemiBold'), url('./Pretendard/Pretendard-SemiBold.woff2') format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
	font-display: swap;
	src: local('Pretendard Medium'), url('./Pretendard/Pretendard-Medium.woff2') format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Regular'), url('./Pretendard/Pretendard-Regular.woff2') format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 300;
	font-display: swap;
	src: local('Pretendard Light'), url('./Pretendard/Pretendard-Light.woff2') format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 200;
	font-display: swap;
	src: local('Pretendard ExtraLight'), url('./Pretendard/Pretendard-ExtraLight.woff2') format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 100;
	font-display: swap;
	src: local('Pretendard Thin'), url('./Pretendard/Pretendard-Thin.woff2') format('woff2');
}
@font-face {
	font-family: 'D2Coding';
	font-weight: normal;
	src: local('D2Coding'), url('./D2Coding/D2Coding.ttf') format('truetype');
}
@font-face {
	font-family: 'D2Coding';
	font-weight: bold;
	src: local('D2Coding Bold'), url('./D2Coding/D2CodingBold.ttf') format('truetype');
}
@font-face {
	font-family: 'D2Coding ligature';
	font-weight: normal;
	src: local('D2Coding ligature'), url('./D2Coding/D2Coding-ligature.ttf') format('truetype');
}
@font-face {
	font-family: 'D2Coding ligature';
	font-weight: bold;
	src: local('D2Coding ligature Bold'), url('./D2Coding/D2CodingBold-ligature.ttf') format('truetype');
}
`;

export default FontStyles;
