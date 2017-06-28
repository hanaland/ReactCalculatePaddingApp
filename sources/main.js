// アプリケーション作成要のモジュールを読み込み
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

// メインウィンドウ
let mainWindow;

function createWindow() {
  // メインウィンドウ作成
  mainWindow = new BrowserWindow({ width: 1200, height: 760 });

  // メインウィンドウに表示するURLを指定
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// 初期化が完了したときの処理
app.on('ready', createWindow);

// すべてのウィンドウが閉じたときの処理
app.on('window-all-closed', function () {
  // macOSのとき以外はアプリケーションを終了
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
// アプリケーションがアクティブになったときの処理
app.on('activate', function () {
  // メインウィンドウが消えている場合は再度メインウィンドウを作成
  if (mainWindow === null) {
    createWindow();
  }
});
