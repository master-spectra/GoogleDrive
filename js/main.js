'use strict';
let 
	miniAccount     	= document.querySelector('.mini-avatar-account'),
	fullAccountInfo 	= document.querySelector('.full-account-info'),
	apps 				= document.querySelector('.apps'),
	buttonMenu  		= document.querySelectorAll('.btn-menu'),
	settingList     	= document.querySelector('.setting-list'),
	helpList  			= document.querySelector('.help-list'),
	offlineMode     	= document.querySelector('.offline-mode'),
	ModalWindow  		= document.querySelector('.modal-window-setting'),
	overlay 			= document.querySelector('.overlay'),
	settingListBtn  	= document.querySelectorAll('.setting-list-btn'),
	readyBtn 			= document.querySelector('.ready-btn'),
	modalWindowHotKey	= document.querySelector('.modal-window-hot-key'),
	closeWindow 		= document.querySelector('.close-window'),
	rigthBar			= document.querySelector('.right-bar'),
	rightBarBtn			= document.querySelector('.close-open-right-bar-btn');

miniAccount.addEventListener('click', function() {
	if (getComputedStyle(fullAccountInfo).display == 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "block";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
		};
	} else if (getComputedStyle(fullAccountInfo).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
		};
	}
});

buttonMenu[3].addEventListener('click', function() {
	if (getComputedStyle(apps).display == 'none') {
		for (let i = 0; i < 1; i++) {
			apps.style.display = "block";
			fullAccountInfo.style.display = "none";
			settingList.style.display = "none";
			offlineMode.style.display = "none";
			helpList.style.display = "none";
		};
	} else if (getComputedStyle(apps).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			offlineMode.style.display = "none";
			helpList.style.display = "none";
		};
	}
});

buttonMenu[2].addEventListener('click', function() {
	if (getComputedStyle(settingList).display == 'none') {
		for (let i = 0; i < 1; i++) {
			settingList.style.display = "block";
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			helpList.style.display = "none";
			offlineMode.style.display = "none";
		};
	} else if (getComputedStyle(settingList).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			offlineMode.style.display = "none";
			helpList.style.display = "none";
		};
	}
});

buttonMenu[1].addEventListener('click', function() {
	if (getComputedStyle(helpList).display == 'none') {
		for (let i = 0; i < 1; i++) {
			helpList.style.display = "block";
			fullAccountInfo.style.display = "none";
			offlineMode.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
		};
	} else if (getComputedStyle(helpList).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			offlineMode.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
		};
	}
});

buttonMenu[0].addEventListener('click', function() {
	if (getComputedStyle(offlineMode).display == 'none') {
		for (let i = 0; i < 1; i++) {
			offlineMode.style.display = "block";
			helpList.style.display = "none";
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
		};
	} else if (getComputedStyle(offlineMode).display != 'none') {
		for (let i = 0; i < 1; i++) {
			offlineMode.style.display = "none";
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
		};
	}
});

settingListBtn[0].addEventListener('click', function() {
	if (getComputedStyle(ModalWindow).display == 'none') {
		for (let i = 0; i < 1; i++) {
			ModalWindow.style.display = "block";
			overlay.style.display = "block";
		};
	}
});

readyBtn.addEventListener('click', function() {
	for (let i = 0; i < 1; i++) {
		ModalWindow.style.display = "none";
		overlay.style.display = "none";
	};
});	

settingListBtn[1].addEventListener('click', function() {
	if (getComputedStyle(modalWindowHotKey).display == 'none') {
		for (let i = 0; i < 1; i++) {
			modalWindowHotKey.style.display = "block";
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			overlay.style.display = "block";
		};
	} 
});

closeWindow.addEventListener('click', function() {
	for (let i = 0; i < 1; i++) {
		modalWindowHotKey.style.display = "none";
		fullAccountInfo.style.display = "none";
		apps.style.display = "none";
		settingList.style.display = "none";
		overlay.style.display = "none";
		helpList.style.display = "none";
	};
});

rightBarBtn.addEventListener('click', function() {
	if (getComputedStyle(rigthBar).marginRight != "-75px") {
		for(let i =  0; i < 1; i++) {
			rigthBar.style.marginRight = "-75px";
			rightBarBtn.style.transform = "rotate(0)";
		}
	} else if (getComputedStyle(rigthBar).marginRight == "-75px") {
		for(let i =  0; i < 1; i++) {
			rigthBar.style.marginRight = "0";
			rightBarBtn.style.transform = "rotate(180deg)";
		}
	}
});