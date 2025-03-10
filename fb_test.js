(function () {
	"use strict";

	let pLine;
	fb.events.form.created = [
		function (state) {

			function Ycreate(tag, classL, textC) {
				const el = document.createElement(tag);
				if (classL) el.classList.add(classL);
				if (textC) el.textContent = textC;
				return el;
			}

			const body = document.querySelector('body')

			// line-block セクション
			const section = Ycreate('section', 'line-block');

			// ヘッダー
			const divHead = Ycreate('div', 'header-line', '播磨町');

			// メッセージエリア
			const divImgP = Ycreate('div', 'massage-line');

			// アイコン
			const linkIcon = document.createElement('link');
			linkIcon.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
			linkIcon.rel = 'stylesheet';

			const icon = Ycreate('i', 'material-icons', 'home');
			icon.id = 'home';

			// コメント
			const pLine = Ycreate('p', 'comment-line', state.record.keisai.value);
			console.log(pLine);

			// フッター
			const footer = Ycreate('section', 'fotter-line');

			const footerIcon = Ycreate('i', 'material-icons', 'home');
			footerIcon.id = 'home';

			const footerText = Ycreate('p', null, '閉じる');

			footer.addEventListener('click', () => {
				section.classList.toggle('none');
				footerText.textContent = "開く"
			});

			// DOM構造を作成
			body.appendChild(section);
			section.append(divHead, divImgP, footer);
			divImgP.append(linkIcon, icon, pLine);
			footer.append(footerIcon, footerText);


		}

	];

	fb.events.fields.keisai.changed = [
		function (state) {
			if (pLine) { // pLine が存在するか確認
				pLine.textContent = state.record.keisai.value; // textContent を変更
			} else {
				console.warn("⚠️ pLine がまだ作られていません！");
			}
		}
	];


})();




