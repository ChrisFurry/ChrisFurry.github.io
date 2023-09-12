let body = document.body;
let style = document.querySelector(":root").style

let toggleThemeBtn = document.getElementById('theme');

let darkTheme		= true;

get_read_cookies();
change_theme(darkTheme);

toggleThemeBtn.addEventListener('click', () => {
    darkTheme = !darkTheme;
    change_theme(darkTheme);
    set_cookies();
});
function change_theme(is_dark) {
	if(is_dark != true && is_dark != false){is_dark = true};
	if(is_dark){
		style.setProperty('--color-bg',		'#200020')

		style.setProperty('--color-text',	'#ffffff')
		style.setProperty('--color-shadow',	'#040404')

		style.setProperty('--banner-color',	'#005511')
		style.setProperty('--image-invert',	'0%')

		style.setProperty('--link-normal',	'#24b424')
		style.setProperty('--link-visited',	'#90b4ff')
		style.setProperty('--link-hover',	'#6cff24')
		style.setProperty('--link-active',	'#ff9024')

		document.getElementById("timeofday").textContent="It is currently Night!";
	}else{
		style.setProperty('--color-bg',		'#ACACFC')

		style.setProperty('--color-text',	'#000000')
		style.setProperty('--color-shadow',	'#CCCCFF')

		style.setProperty('--banner-color',	'#ED63FF')
		style.setProperty('--image-invert',	'100%')

		style.setProperty('--link-normal',	'#006c24')
		style.setProperty('--link-visited',	'#242490')
		style.setProperty('--link-hover',	'#24b424')
		style.setProperty('--link-active',	'#ff0048')

		document.getElementById("timeofday").textContent="It is currently Day!";
	}
}
function get_read_cookies() {
	let cook = document.cookie;
	if(cook == null){return;}
	darkTheme = (get_cookie_variable(cook,'lighttheme') == 'false' || get_cookie_variable(cook,'lighttheme') == '');
}
function set_cookies() {
	document.cookie = "lighttheme="+!darkTheme+";Path='/';SameSite=None;Secure;";
}
/* Thank you so much w3schools.com you are my favorite website :) */
function get_cookie_variable(cookies,cookie_name) {
	let name = cookie_name + "=";
	let decodedCookie = decodeURIComponent(cookies);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}