var gui = require('nw.gui');
var win = gui.Window.get();

var tray = new gui.Tray({
	title : 'Time Clock',
	icon : 'clock.ico',
});

// 添加菜单
var menu = new gui.Menu();
menu.append(new gui.MenuItem({
	label : '设置',
	tooltip : '设置'
}));
menu.append(new gui.MenuItem({
	label : '关闭',
	tooltip : '关闭',
	icon : "../images/close.png",
	click : function() {
		closeWin();
	}
}));
tray.menu = menu;

win.on('close', function() {
	closeWin();
});

win.on('minimize', function() {
	win.hide();
});

tray.on('click', function() {
	maxWin();
});

// 最小化
function minWin() {
	win.hide();
}

// 恢复
function maxWin(){
	win.show();
}

// 关闭
function closeWin() {
	tray.remove();
	tray = null;

	win.close(true);
}

/*
 // Close
 function close() {
 tray.remove();
 tray = null;

 win.close();
 }*/
