// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// 針對 header 的 fixed 設定其他版面需往下移動
// 但基於 tailwind 的機制需提供完整的 class 字串
export const headerHeight = [20, 'h-20', 'pt-20', '-translate-y-20'];
document.querySelector('body')?.classList?.add(headerHeight[2]);

const root: ?Element = document.getElementById('root');

if (root != null) {
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		root
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
