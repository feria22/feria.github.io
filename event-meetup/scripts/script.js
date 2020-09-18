
// timeend = new Date(2020, 0, 1, 0, 0);
const date = new Date();
const timeend = new Date(date.getFullYear(), date.getMonth() + 1, 1);
function helpingTime(timeplace, content, where = 'afterbegin', replace) {

	if (replace) {
		document.querySelector(timeplace).innerHTML = content;
	}
	else { document.querySelector(timeplace).insertAdjacentHTML(where, content); }

}

window.onload = () => {
	Time();
	document.getElementById('time_for_event').style.visibility = "visible";
};
function Time(timeFor) {
	let today = new Date();

	today = Math.floor((timeend - today) / 1000);
	let tsec = today % 60;
	today = Math.floor(today / 60);
	if (tsec < 10) tsec = '0' + tsec;
	let tmin = today % 60;
	today = Math.floor(today / 60);
	if (tmin < 10) tmin = '0' + tmin;
	let thour = today % 24;
	today = Math.floor(today / 24);
	if (thour < 10) thour = '0' + thour;
	helpingTime('#time_tsec div', tsec, 0, 1)
	helpingTime('#time_tmin div', tmin, 0, 1)
	helpingTime('#time_thour div', thour, 0, 1)
	helpingTime('#time_today div', today, 0, 1)
}
setInterval(Time, 1000, '#time_tsec');





const pastEvetsImgArray = [
	"https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/09/17/21/47/audience-1677028_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/04/04/03/03/event-1306079_960_720.jpg",
	"https://cdn.pixabay.com/photo/2015/09/18/11/38/audience-945449_960_720.jpg",
	"https://cdn.pixabay.com/photo/2015/07/30/17/24/audience-868074_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/11/29/13/20/balloons-1869790_960_720.jpg",
	"https://cdn.pixabay.com/photo/2013/12/12/20/01/fireworks-227383_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/03/27/18/53/drinks-1283608_960_720.jpg",
	"https://cdn.pixabay.com/photo/2016/01/19/17/18/fairground-1149626_960_720.jpg",
	"https://cdn.pixabay.com/photo/2015/07/02/10/16/circus-828680_960_720.jpg",
];

function genPastImg(i = 1) {
	for (i; i <= 4; i++) {
		let j = Math.floor(Math.random() * (pastEvetsImgArray.length - 0) + 0);
		if (pastEvetsImgArray.length > 0) {
			let img = document.createElement("img");
			let a;
			(i % 2 == 0) ? a = 'floatRight' : a = 'floatLeft';
			img.classList.add(`pastEventsImgN${i}`, 'click', `${a}`);
			img.src = `${pastEvetsImgArray[j]}`;
			img.alt = 'event';
			document.querySelector('#pastEventsImg').appendChild(img);
			pastEvetsImgArray.splice(j, 1);
		}
	}
}
genPastImg();

let img = document.querySelectorAll('.click'),
	backPop = document.getElementById('backPop'),
	popUp = document.getElementById('popUp'),
	bigImg = document.getElementById('bigImg'),
	inRight = document.querySelector('#inRight'),
	inLeft = document.querySelector('#inLeft'),
	nextSrc, next;

const listener = e => {
	switch (e.keyCode) {
		case 37: navigtionImg(2, img.length - 1);
			break;
		case 39: navigtionImg(1, 0);
			break;
		case 27: closeBigImg();
			break;
	}
}

class Action {
	constructor(elem) {
		this._elem = elem;
		elem.onclick = this.onClick.bind(this);
	}
	viewMore() {
		if (pastEvetsImgArray.length > 0) {
			genPastImg();
		}
		else {
			window.open('https://pixabay.com/images/search/event/');
		}
	}
	inRight() { navigtionImg('right', 0) }
	inLeft() { navigtionImg('left', img.length - 1) }
	viewMap() {
		document.querySelector('#contactDetails').classList.add('displayNone');
		document.querySelector('#showContact').classList.remove('displayNone');
	};
	showContact() {
		document.querySelector('#contactDetails').classList.remove('displayNone');
		document.querySelector('#showContact').classList.add('displayNone');
	};
	pastEventsImg() {
		let src = event.target.src;
		next = event.target;
		backPop.style.display = 'flex';
		backPop.classList.remove('fadeOut');
		backPop.classList.add('fadeIn');
		window.addEventListener("keydown", listener);
		bigImg.setAttribute('src', src);
	}
	backPop(elem) {
		closeBigImg()
	}
	buttonElite() {
		location.href = '#contact';
		document.querySelector('#contactDetails').classList.remove('displayNone');
		document.querySelector('#showContact').classList.add('displayNone');

	}
	buttonSponsor() {
		location.href = '#contact';
		document.querySelector('#contactDetails').classList.remove('displayNone');
		document.querySelector('#showContact').classList.add('displayNone');

	}
	onClick(event) {
		let idButton = event.target;
		if (event.target.closest('button') == null) {
			if (idButton.closest('div').id) {
				this[event.target.closest('div').id](event)
			}
		}
		else if (event.target.closest('button').id) {
			this[idButton.closest('button').id]()
		}
		else return false;
	}
}
new Action(main);

function navigtionImg(a, index) {
	nextElem = (a == 'right') ? next.nextElementSibling : next.previousElementSibling;
	next = nextElem;
	if ((next == null) || next.querySelector('div')) {
		nextSrc = img[index].getAttribute('src');
		next = img[index];
	}
	else nextSrc = nextElem.getAttribute('src');
	bigImg.setAttribute('src', nextSrc);
}
function closeBigImg(elem) {
	backPop.classList.add('fadeOut');
	setTimeout(function () {
		backPop.style.display = 'none'
	}, 300);
	window.removeEventListener("keydown", listener);
}

const clickTable = document.querySelectorAll('table .clickable .fa');
for (let i = 0; i < clickTable.length; i++) {
	let j = i + 1;
	if (i % 2 == 0) {
		document.querySelector(`[aria-controls="group-of-rows-${j}"]`).classList += ' tbldDark';
		document.querySelector('#group-of-rows-' + j).classList += ' tbldDark';
	}
	document.querySelector(`#group-of-rows-${j}`).classList += ' displayNone';
	clickTable[i].onclick = function () {
		document.querySelector(`#group-of-rows-${j}`).classList.toggle('displayNone');
	}
}



mapboxgl.accessToken = 'pk.eyJ1IjoiZmVyaWEyMiIsImEiOiJja2Y4dDQzNXgwZmZ6MzFvOHllMjI2eWYzIn0.mX23jwy1IFDzMPfrXD48DQ';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [21.028800, 52.232238],
	zoom: 14,
});

const marker = new mapboxgl.Marker()
	.setLngLat([21.028896, 52.232238])
	.addTo(map)
	.setPopup(new mapboxgl.Popup().setHTML("<img src='img/logo.png'><p>City: Warszawa</p><p>ul. Blablabla 9</p><p>000000000 numer</p>"));

marker.togglePopup()