# AI 協作機器人的設計與實作｜阿亮老師（完整鏡像備份）

本專案為 [AI 協作機器人的設計與實作](https://ai-cobot-course-aliang.netlify.app/) 課程網站之完整本地鏡像與備份。

## 🔑 課程密碼

- **課程密碼**：@godot-cobot
- **免密碼直讀版**：可直接存取 direct.html

---

## 📖 專案簡介與收錄內容

- **核心技術**：Godot 4 · OpenAI Codex · Vibe Coding
- **收錄單元**：
  - **U00** 認識 Godot 與技能包
  - **U00B** Godot 官方範例導覽（26 個機器人精選範例）
  - **U01** 一句話生出機器人遊樂場
  - **U02** 機器人找路實驗室（A* 與 BFS 演算法）
  - **U03** 倉儲搬運車調度中心（多車路徑協同）
  - **U04** 機器人的眼睛（即時相機與色塊辨識）
  - **U05** 教機器人認東西（樣本訓練與信心值判斷）
  - **U06** 座標轉換：畫面點哪、車就到哪（透視與世界座標換算）
- **完整資產（共 280+ 個檔案，約 360 MB）**：
  - 📚 **全單元電子書本體與閱讀器**（_bk/ 與 
eader.html，支援目錄導覽、畫筆註記、區域放大鏡、指令一鍵複製）
  - 🎬 **7 支 MP4 高畫質教學影片**（ssets/video/）
  - 📸 **7 套圖解教學與全套高清步驟截圖**（ssets/guide/，共 200+ 張）
  - 📦 **全套 Godot 範例成品、技能包與網頁匯出元件**（code/）
  - 📝 **全單元提示詞與改造指令**（code/ 及透過 ssets/prompt.html 快速複製）

---

## 🚀 本地啟動與瀏覽

因現代瀏覽器安全性限制（ES 模組與 Web Worker 需要 HTTP 環境）：

### 方式一：一鍵啟動（推薦）
直接雙擊專案目錄下的 **start_local.bat**，會自動啟動本地伺服器並用預設瀏覽器開啟首頁。

### 方式二：使用 Python 或 Node.js
在終端機進入專案目錄，執行：
`ash
python -m http.server 8080
`
或
`ash
npx serve -l 8080
`
接著在瀏覽器打開：
- 課程首頁（密碼門禁版）：[http://localhost:8080/](http://localhost:8080/)
  - **課程密碼**：@godot-cobot
- 免密碼直讀版：[http://localhost:8080/direct.html](http://localhost:8080/direct.html)
- 電子書閱讀器：[http://localhost:8080/reader.html?u=U00](http://localhost:8080/reader.html?u=U00)

---

## 📁 目錄結構

`	ext
.
├── index.html              # 課程入口（輸入 @godot-cobot 驗證）
├── direct.html             # 免密碼直讀首頁
├── reader.html             # 電子書閱讀器（支援劃線筆記、放大鏡、章節跳轉、指令面板）
├── start_local.bat         # Windows 一鍵啟動伺服器腳本
├── assets/
│   ├── style.css           # 首頁樣式
│   ├── reader.css          # 閱讀器樣式
│   ├── gate.js             # 密碼驗證核心模組
│   ├── reader.js           # 閱讀器互動邏輯
│   ├── prompt.html         # 提示詞一鍵複製介面
│   ├── pdf.min.mjs         # PDF.js 核心引擎
│   ├── pdf.worker.min.mjs  # PDF.js Worker
│   ├── hero.jpg            # 課程主視覺海報
│   ├── cards/              # 各單元封面圖卡 (U00~U06)
│   ├── video/              # 各單元 MP4 實作教學影片 (U00~U06)
│   └── guide/              # 各單元圖解教學網頁與截圖 (U00~U06)
├── code/                   # 各單元 zip 原始碼專案、技能包、提示詞、目錄與指令清單
│   ├── copy169.json        # 各頁指令座標與內容
│   ├── index.json          # 各單元程式碼清單
│   ├── toc.json            # 全單元章節目錄
│   └── U00~U06/            # 各單元原始碼與 Markdown 技能文件
└── _bk/                    # 電子書 PDF bin 檔案
`

---

## 🔒 版權與教材說明

本教材原創作者為 **阿亮老師（曾慶良）**，內容僅供學員個人學習使用。
