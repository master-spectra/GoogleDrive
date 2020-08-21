'use strict';
let 
	miniAccount     	= document.querySelector('.mini-avatar-account'),
	fullAccountInfo 	= document.querySelector('.full-account-info'),
	apps 				= document.querySelector('.apps'),
	buttonMenu  		= document.querySelectorAll('.btn-menu'),
	settingList     	= document.querySelector('.setting-list'),
	helpList  			= document.querySelector('.help-list'),
	offlineMode     	= document.querySelector('.offline-mode'),
	modalWindowSetting  = document.querySelector('.modal-window-setting'),
	overlay 			= document.querySelector('.overlay'),
	settingListBtn  	= document.querySelectorAll('.setting-list-btn'),
	readyBtn 			= document.querySelector('.ready-btn'),
	modalWindowHotKey	= document.querySelector('.modal-window-hot-key'),
	closeWindow 		= document.querySelector('.close-window'),
	rigthBar			= document.querySelector('.right-bar'),
	rightBarBtn			= document.querySelector('.close-open-right-bar-btn'),
	openVideoBtn 		= document.querySelector('.open-video-btn'),
	youtubeVideo 		= document.querySelector('iframe'),
	downListBtn 		= document.querySelector('.down-list-btn'),
	btnCreateFile 		= document.querySelector('.btn-create-file'),
	modalNewFolder 		= document.querySelector('.modal-window-new-folder'),
	createFolder		= document.querySelector('.create-folder'),
	inputName 			= document.querySelector('.input-name'),
	btnFormNewFolder 	= document.querySelector('.btn-form-new-folder'),
	closeModalWindow	= document.querySelector('.close-window-new-folder'),
	file 				= document.querySelector('.file'),
	folder,
	span,
	spanIcon;

miniAccount.addEventListener('click', function() {
	if (getComputedStyle(fullAccountInfo).display == 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "block";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	} else if (getComputedStyle(fullAccountInfo).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	}
});

buttonMenu[3].addEventListener('click', function() {
	if (getComputedStyle(apps).display == 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "block";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	} else if (getComputedStyle(apps).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	}
});

buttonMenu[2].addEventListener('click', function() {
	if (getComputedStyle(settingList).display == 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "block";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	} else if (getComputedStyle(settingList).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	}
});

buttonMenu[1].addEventListener('click', function() {
	if (getComputedStyle(helpList).display == 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "block";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	} else if (getComputedStyle(helpList).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	}
});

buttonMenu[0].addEventListener('click', function() {
	if (getComputedStyle(offlineMode).display == 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "block";
		};
	} else if (getComputedStyle(offlineMode).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	}
});

settingListBtn[0].addEventListener('click', function() {
	if (getComputedStyle(modalWindowSetting).display == 'none') {
		for (let i = 0; i < 1; i++) {
			modalWindowSetting.style.display = "block";
			overlay.style.display = "block";
			settingList.style.display = "none"
		};
	}
});

readyBtn.addEventListener('click', function() {
	for (let i = 0; i < 1; i++) {
		modalWindowSetting.style.display = "none";
		overlay.style.display = "none";
		settingList.style.display = "none"
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

openVideoBtn.addEventListener('click', function() {
	if (getComputedStyle(youtubeVideo).display == "none") {
		for(let i =  0; i < 1; i++) {
			youtubeVideo.style.display = "block";
			overlay.style.display = "block";
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		}
	} 
});

window.addEventListener('keydown', function() {
	for  (let i = 0; i < 1; i++) {
		if (getComputedStyle(youtubeVideo).display != "none") {
			for(let i =  0; i < 1; i++) {
				youtubeVideo.style.display = "none";
				overlay.style.display = "none";
			}
		} 
	}
});

btnCreateFile.addEventListener('click', function() {
	if (getComputedStyle(downListBtn).display == 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "block";
			offlineMode.style.display = "none";
		};
	} else if (getComputedStyle(downListBtn).display != 'none') {
		for (let i = 0; i < 1; i++) {
			fullAccountInfo.style.display = "none";
			apps.style.display = "none";
			settingList.style.display = "none";
			helpList.style.display = "none";
			downListBtn.style.display = "none";
			offlineMode.style.display = "none";
		};
	}
});

btnCreateFile.addEventListener('keydown', function() {
	if (getComputedStyle(downListBtn).display != 'none') {
		for (let i = 0; i < 1; i++) {
			downListBtn.style.display = "none";
		};
	}
});

createFolder.addEventListener('click', function() {
	for (let i = 0; i < 1; i++) {
		modalNewFolder.style.display = "block";
		downListBtn.style.display = "none";
		overlay.style.display = "block";
	}
});

btnFormNewFolder.addEventListener('click', function() {
	if (inputName.value.length < 2) {
		alert('Error');
	} else {
		folder 		= document.createElement('div'),
		span    	= document.createElement('span'),
		spanIcon 	= document.createElement('span');	
		
		spanIcon.classList.add('fas');
		spanIcon.classList.add('fa-folder');
		folder.classList.add('folder');

		file.appendChild(folder);
		folder.appendChild(spanIcon);	 
		folder.appendChild(span);

		span.textContent = inputName.value;
		
		overlay.style.display = "none";
		modalNewFolder.style.display = "none";
	}
});

closeModalWindow.addEventListener('click', function() {
	overlay.style.display = "none";
	modalNewFolder.style.display = "none";
});