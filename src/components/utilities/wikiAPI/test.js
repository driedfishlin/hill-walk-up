const trySearch = async () => {
	const url =
		'https://zh.wikipedia.org/w/api.php?' +
		new URLSearchParams({
			origin: '*',
			action: 'parse',
			format: 'json',
			page: '玉山',
		});
	try {
		const req = await fetch(url);
		const json = await req.json();
		// console.log(json.parse.text['*']);
		const t = json.parse.text['*'];
		const t1 = t.split('<p>')[1].split('</p>')[0];
		console.log(t1);
		function removeHTMLTag(str) {
			return str.replace(/<[^>]+>|&[^>]+;/g, '');
		}
		const t2 = removeHTMLTag(t1);
		console.log(t2);
	} catch (e) {
		console.error(e);
	}
};
trySearch();
