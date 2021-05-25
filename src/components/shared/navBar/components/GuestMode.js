// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

const guestData = {
	name: '陳小明',
	avatar: 'avatar_1',
	account: 'GUEST',
	// 最後要用 hash
	password: 'guestlogin',
	nickname: '健行初心者',
	signUpTime: new Date().toISOString().split('T')[0],
	tables: {
		records: [
			{
				location: '玉山',
				title: '我登上台灣第一高峰了！！！',
				startDate: '2019/11/26',
				endDate: '2019/11/27',
				finish: true,
				id: '0dsd543fa',
				text:
					'很幸運的抽到排雲山莊，跟敏敏、豪豪三個人自組了盼望好久的玉山團，終於在這次成行了！聽大家說玉山的路線很好走，實際走過也真的覺得步道規劃很完善，但可能因為沒睡好加上海拔很高，清晨從排雲出發登領的時候走得有點辛苦。這次碰上了好天氣，看到好美麗的日出，真心覺得最近很強運，不但抽到床位，老天還出大景！也完成了登上台灣第一高峰的目標，不知道未來還有沒有機會再來一次，我還想撿其他群峰啊！',
			},
			{
				location: '向陽山',
				title: '嘉明湖三日遊',
				startDate: '2021/05/04',
				endDate: '2021/05/06',
				finish: false,
				id: 'fghfgdhrtarw',
				text:
					'這次上山運氣不太好，幸好都是毛毛細雨，雖然該帶的裝備都充足了，但沒有人會希望碰上大雨啊！從避難小屋出發往嘉明湖的時間比預期晚了些，趁著雨停趕快出發，不過白牆還是很厚，當太陽升起，橘黃色的光像打在白牆上真的很詭譎夢幻。幸好最後到達湖邊，雲霧已經散開，雖然天氣不太理想，還是有看到嘉明湖本人XD，等等這篇不是應該講向陽山嗎！因為行程 delay，所以雖然登山口就在路徑上，但並沒有爬上去啊 OQ，只能有緣再次挑戰了！是說搭了好久的火車跑到台東，就只為了登嘉明湖跟向陽山，我的特休都花在這一趟了啊！',
			},
			{
				location: '合歡山',
				title: '敏敏開車帶大家出來兜風',
				startDate: '2020/08/19',
				endDate: '2020/08/19',
				finish: true,
				id: 'fghfskuarw',
				text:
					'敏敏開車帶大家出來兜風，結果大家都睡死留他一個人開車。山上的氣溫真的很舒服，但太陽超毒。我們這趟上來撿了合歡主峰與石門山兩座百岳，當作輕鬆的（有嗎？）散步行程。',
			},
			{
				location: '石門山',
				title: '30 分鐘完成一座百岳',
				startDate: '2020/03/21',
				endDate: '2020/03/21',
				finish: true,
				id: 'erewqrqw3',
				text:
					'石門山應該是最多人有走過的百岳了，因為他就在中橫公路旁邊啊！停好車起登只要半小時就能登頂... 對一般人來說應該不是什麼負擔吧XD 但豪豪那傢伙因為暈車，走得要死要活的，我們就陪他慢慢散步。不得不說合歡山真的是很棒的地方，很容易就能到達，但就是希望遊客不要那麼多啊 OQ',
			},
		],
		favorites: ['南湖大山', '玉山東峰', '安東軍山', '品田山', '郡大山'],
	},
};

const GuestMode = ({ setFns }: Object): React.Node => {
	return (
		<div
			className={`text-sm text-t-gray-dark py-2 flex flex-col items-end`}
		>
			<p className={``}>
				因為產品未上線，目前未提供會員功能，可以使用訪客模式體驗本站喔!!
				:D
			</p>
			<Link
				to={`/user/GUEST`}
				onClick={() => {
					setFns.setGuestMode(guestData);
					setFns.setNavBar(false);
					setFns.setIsLogin(true);
					setTimeout(() => setFns.setLoginForm(false), 400);
					document.querySelector('body')?.scrollTo({ top: 0 });
				}}
				className={`border border-t-green text-t-green rounded-md py-0.5 px-1.5 mb-1`}
			>
				進入訪客模式 →
			</Link>
		</div>
	);
};

export default GuestMode;
