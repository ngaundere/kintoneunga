(function () {
	"use strict";

	let lineMassage;
	fb.events.form.mounted = [
	function (state) {

			function Ycreate(tag, classL, textC) {
        const el = document.createElement(tag);
        if (classL) el.classList.add(classL);
        if (textC) el.textContent = textC;
        return el;
    }

    const body = document.querySelector('body');

    // l セクション
    const main = Ycreate('main', 'all-line');

    // ヘッダー
    const lineHead = Ycreate('div', 'line-head', '播磨町');

    // メッセージエリア
    const section = Ycreate('section', 'line-massageErea');

    // アイコン
    const linkIcon = document.createElement('link');
    linkIcon.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    linkIcon.rel = 'stylesheet';

    const icon = Ycreate('i', 'material-icons', 'home');
    icon.id = 'home';

    // コメント
    const lineMassage = Ycreate('div', 'line-massage', state.record.keisai.value);

    // フッター
    const lineFotter = Ycreate('div', 'line-fotter', '閉じる');

    lineFotter.addEventListener('click', () => {
        main.classList.toggle('hidden');
        lineFotter.textContent = main.classList.contains('hidden') ? '開く' : '閉じる'
    });

    // DOM構造を作成
    body.appendChild(main);
    main.append(lineHead, section, lineFotter);
    section.append(linkIcon, icon, lineMassage);

	fb.events.fields.keisai.changed = [
		function (state) {
				lineMassage.textContent = state.record.keisai.value; // textContent を変更
		}
	];



}

	];

	


})();
