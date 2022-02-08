import { createGlobalStyle } from 'styled-components';
import PretendardBlack from './Pretendard/Pretendard-Black.woff2';
import PretendardExtraBold from './Pretendard/Pretendard-ExtraBold.woff2';
import PretendardBold from './Pretendard/Pretendard-Bold.woff2';
import PretendardSemiBold from './Pretendard/Pretendard-SemiBold.woff2';
import PretendardMedium from './Pretendard/Pretendard-Medium.woff2';
import PretendardRegular from './Pretendard/Pretendard-Regular.woff2';
import PretendardLight from './Pretendard/Pretendard-Light.woff2';
import PretendardExtraLight from './Pretendard/Pretendard-ExtraLight.woff2';
import PretendardThin from './Pretendard/Pretendard-Thin.woff2';
import D2Coding from './D2Coding/D2Coding.ttf';
import D2CodingBold from './D2Coding/D2CodingBold.ttf';
import D2CodingLigature from './D2Coding/D2Coding-ligature.ttf';
import D2CodingLigatureBold from './D2Coding/D2CodingBold-ligature.ttf';

const FontStyles = createGlobalStyle`
@font-face {
	font-family: 'Pretendard';
	font-weight: 900;
	font-display: swap;
	src: local('Pretendard Black'), url(${PretendardBlack}) format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 800;
	font-display: swap;
	src: local('Pretendard ExtraBold'), url(${PretendardExtraBold}) format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
	font-display: swap;
	src: local('Pretendard Bold'), url(${PretendardBold}) format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 600;
	font-display: swap;
	src: local('Pretendard SemiBold'), url(${PretendardSemiBold}) format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
	font-display: swap;
	src: local('Pretendard Medium'), url(${PretendardMedium}) format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Regular'), url(${PretendardRegular}) format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 300;
	font-display: swap;
	src: local('Pretendard Light'), url(${PretendardLight}) format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 200;
	font-display: swap;
	src: local('Pretendard ExtraLight'), url(${PretendardExtraLight}) format('woff2');
}
@font-face {
	font-family: 'Pretendard';
	font-weight: 100;
	font-display: swap;
	src: local('Pretendard Thin'), url(${PretendardThin}) format('woff2');
}
@font-face {
	font-family: 'D2Coding';
	font-weight: normal;
	src: local('D2Coding'), url(${D2Coding}) format('truetype');
}
@font-face {
	font-family: 'D2Coding';
	font-weight: bold;
	src: local('D2Coding Bold'), url(${D2CodingBold}) format('truetype');
}
@font-face {
	font-family: 'D2Coding ligature';
	font-weight: normal;
	src: local('D2Coding ligature'), url(${D2CodingLigature}) format('truetype');
}
@font-face {
	font-family: 'D2Coding ligature';
	font-weight: bold;
	src: local('D2Coding ligature Bold'), url(${D2CodingLigatureBold}) format('truetype');
}
`;

export default FontStyles;
