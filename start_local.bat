@echo off
chcp 65001 >nul
echo ========================================================
echo  AI 協作機器人的設計與實作 - 本機課程網站
echo ========================================================
echo  網址：http://localhost:8080/
echo  課程密碼：@godot-cobot
echo  免密碼直讀版：http://localhost:8080/direct.html
echo ========================================================
echo  正在開啟瀏覽器...
start http://localhost:8080/
python -m http.server 8080
pause
