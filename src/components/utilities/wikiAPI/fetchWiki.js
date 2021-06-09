// 用於修正 wiki 關鍵字避免查詢到非預期的結果
const revisionString = [
	['雪山', '雪山_(台灣)'],
	['雪山', '大雪山_(台灣)'],
	['能高山南峰', '能高南峰'],
	['桃山', '桃山_(臺灣)'],
	['劍山', '劍山_(台灣)'],
	['石門山', '石門山_(南投縣)'],
	['白石山', '白石山_(台灣)'],
	['鹿山', '鹿山_(台灣)'],
];
const revisionNum = [
	['玉山', 2],
	['大霸尖山', 2],
];

const fetchWiki = async (key, callback) => {
	let order = 1;
	const searchString = revisionString.find(item => item[0] === key);
	if (searchString) key = searchString[1];
	const searchNum = revisionNum.find(item => item[0] === key);

	if (searchNum) order = searchNum[1];

	const url =
		'https://zh.wikipedia.org/w/api.php?' +
		new URLSearchParams({
			origin: '*',
			action: 'parse',
			format: 'json',
			page: key,
		});
	try {
		const request = await fetch(url);
		const json = await request.json();
		const t = json.parse.text['*'];
		const t1 = t.split('<p>')[order].split('</p>')[0];
		function removeHTMLTag(str) {
			return str.replace(/<[^>]+>|&[^>]+;/g, '');
		}
		const t2 = removeHTMLTag(t1);
		callback(t2);
	} catch (error) {
		console.error(error);
	}
};

export default fetchWiki;
