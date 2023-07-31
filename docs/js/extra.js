const homePath = '/';

function setCookie(name, value, days) {
	var expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/';
}
function getCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
function eraseCookie(name) {
	document.cookie =
		name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

if (getCookie('auth') === '') {
	console.log('init auth');
	setCookie('auth', 'false', 7);
}

if (getCookie('auth') !== 'true') {
	if (
		window.location.pathname !== homePath + 'login/' &&
		!window.location.pathname.startsWith(homePath + 'free-sessions/')
	) {
		window.location.pathname = homePath + 'login/';
	}
}

/**
 * Returns a hash code from a string
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
function hashCode(str) {
	let hash = 0;
	for (let i = 0, len = str.length; i < len; i++) {
		let chr = str.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
}

emailHashes = [-1268878963, -1614384397, -1322963266];

function tryLogin(email) {
	email = email.toLowerCase();
	if (emailHashes.includes(hashCode(email))) {
		setCookie('auth', 'true', 7);
		return true;
	}
	return false;
}

const mdContent = document.getElementsByClassName('md-content')[0];
mdContent.innerHTML = mdContent.innerHTML.replaceAll(
	'....',
	'<label class="input-sizer fill"><input type="text" onInput="this.parentNode.dataset.value = this.value" size="3" placeholder=" . . . "></label>',
);

const reg = /\{\{ ans (.[^}]*) \}\}/g;
mdContent.innerHTML = mdContent.innerHTML.replace(
	reg,
	"<b>Answer</b>: <span class='answer'>$1</span>",
);
