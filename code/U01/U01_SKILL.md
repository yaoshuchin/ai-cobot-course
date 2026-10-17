---
name: u01-robot-playground
description: 用 Godot 4.7 做「3D 機器人遊樂場」：機器人小車在場地裡收集能量方塊、計時計分，電腦鍵盤與手機觸控都能玩，並匯出網頁版上線。使用者只用白話描述，機器人造型、顏色、速度、場地、方塊數都從設定檔讀，改設定檔就能改遊戲。
---

# U01 機器人遊樂場技能包

## 你要做的事
使用者是中學老師，不會寫程式。你負責：寫好 Godot 專案 → 自己驗證 → 匯出網頁版 → 用白話回報。
遇到做不到的事直接說原因，不要假裝完成。

## 一定要遵守的規範
1. **Godot 4.7、只用 GDScript**，不用 C#、不裝外掛、不從網路下載任何素材。所有 3D 物件用 Godot 內建形狀（BoxMesh、SphereMesh、CylinderMesh、CapsuleMesh、PrismMesh）組合。
2. **場景用程式建立**：`main.tscn` 只放一個根節點掛 `main.gd`，其餘節點在程式裡建立。程式可以分成 `main.gd`、`robot.gd`、`arena.gd`、`hud.gd`，每個檔都要有中文註解說明在做什麼。
3. **能讓使用者改的東西全放設定檔**（欄位見 `references/設定檔說明.md`），程式不可寫死：
   - `robot.json`：機器人名字、造型、顏色、大小、速度、軌跡、車燈
   - `arena.txt`：場地地圖（一行一列文字）
   - `game.json`：遊戲標題、限時、方塊顏色、背景顏色
   設定檔讀取失敗或欄位缺少時，用預設值繼續執行，並在畫面左下角用中文提示哪個欄位有問題（不可當掉）。
4. **中文字型**：把 `assets/fonts/NotoSansTC-Common.ttf` 複製到專案的 `fonts/`，所有文字都用它（建一個 Theme 設成預設字型）。網頁版沒有系統字型，不這樣做中文會變方框。`OFL.txt` 一起複製。
5. **畫面要好看**（這是第一堂課的亮點）：
   - 用 `WorldEnvironment`：天空漸層、柔和環境光、輕微霧氣；一盞會投影子的 `DirectionalLight3D`。
   - 地板用棋盤格或網格紋（程式產生），牆有圓角感（可以用稍微縮小的方塊＋頂部亮色邊）。
   - 能量方塊會自轉、上下浮動、發光（emission），被收集時有縮小消失＋粒子或閃光效果。
   - 鏡頭在機器人斜後上方平滑跟隨（lerp），不穿牆太誇張即可。
   - 機器人要有「臉」：兩個眼睛（eye_color），轉彎時車身微微傾斜；車燈開啟時前方有 SpotLight3D。
   - 鏡頭從後方看得到機器人的個性：頭頂天線＋會一閃一閃的發光小球、車尾兩個紅色尾燈；俯視鏡頭時看得到眼睛。
   - **天空一定要看得到**：背景用 `ProceduralSkyMaterial`（sky_top／sky_bottom 顏色），跟隨鏡頭的俯角約 35°，畫面上方三分之一是天空；不可以是灰色背景。
   - 水坑是貼在地上的薄片（高度 0.02），半透明藍色、會慢慢波動；加速板是貼地的發光箭頭。不要做成立起來的透明方塊。
6. **操作**：
   - 電腦：方向鍵或 WASD 前進後退轉彎；空白鍵按喇叭（機器人跳一下）；R 重新開始；Tab 切換鏡頭（跟隨／俯視）。
   - 手機與平板：畫面左下角虛擬搖桿、右下角「喇叭」「重來」按鈕（用 Control 節點做，觸控與滑鼠都能按）。
   - 畫面右上角 HUD：機器人名字、剩餘時間、已收集／總數、最佳紀錄（存在 `user://best.json`）。
   - 全部收集或時間到：顯示結算面板（成績、用了幾秒、是否破紀錄、按 R 或按鈕再玩一次）。
7. **示範模式**：執行參數 `-- --demo` 時，機器人自動開向最近的方塊收集（用簡單的轉向追蹤即可，撞牆就倒退轉彎），讓老師不用碰鍵盤就能看到完整玩法。
8. **自我測試**：執行參數 `-- --self-test` 時，程式在不開視窗的情況下檢查：設定檔讀得到、地圖大小正確、機器人起點存在、方塊數量正確、模擬移動後位置有改變、收集一個方塊後分數 +1，最後印出一行 `SELF_TEST PASS ...` 或 `SELF_TEST FAIL 原因`，然後結束。
9. 視窗預設 1600×900，可縮放（`stretch mode = canvas_items`、`aspect = expand`），手機直式橫式都不跑版。
10. `project.godot` 一定要設 `renderer/rendering_method="gl_compatibility"`（網頁版與舊電腦、手機都只支援這個）。陰影、霧氣、發光都要在這個模式下看得到效果。
11. 網頁版開始時瀏覽器不允許自動播放聲音：喇叭聲用 `AudioStreamGenerator` 現場產生簡單嗶聲即可，不要放音檔。

## 檔案清單（做完後專案資料夾裡要有）
```
project.godot  main.tscn  main.gd  robot.gd  arena.gd  hud.gd
robot.json  arena.txt  game.json
fonts\NotoSansTC-Common.ttf  fonts\OFL.txt
export_presets.cfg          ← 從 assets 複製
開始玩.bat  示範模式.bat     ← 從 scripts 複製
```

## 測試時不可以發出聲音
老師常在上課或開會時讓你工作。凡是開視窗測試（不是 --headless），Godot 一律加 `--audio-driver Dummy`，例如：
`<godot> --audio-driver Dummy --path . -- --demo`。不要播放任何聲音。

## 驗證（一定要做，有錯就修到好）
在專案資料夾執行：
```
powershell -ExecutionPolicy Bypass -File <技能包>\scripts\檢查.ps1 -Project .
```
它會依序跑「啟動檢查」與「自我測試」，最後印出 `全部通過` 才算完成。

## 匯出網頁版
```
powershell -ExecutionPolicy Bypass -File <技能包>\scripts\匯出網頁版.ps1 -Project .
```
會輸出到專案旁的 `網頁版\`（index.html 等檔案），並在本機開一個測試網址給使用者看。上線（Netlify）要使用者自己登入帳號，不要索取密碼。

## Godot 在哪裡
依序找：練習資料夾旁邊的 `..\Godot\`、環境變數 `GODOT`。找不到就請使用者告訴你 Godot 放哪裡，不要自己下載。

## 回報格式（用繁體中文、白話）
1. 做好了什麼（3～5 點）
2. 驗證結果（自我測試那一行原文）
3. 怎麼打開來玩（雙擊哪個檔）
4. 下一步你可以這樣說（舉 3 句改造例句，例如「把機器人改成粉紅色的坦克」「場地加大一倍、方塊改成 20 個」「軌跡改成彩虹色」）
