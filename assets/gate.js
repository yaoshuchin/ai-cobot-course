/* 課程網站入口（完全相容版）
   - 支援課程密碼：@godot-cobot
   - 本機與 GitHub Pages 最佳化，免除伺服器依賴
*/

const SK = 'cobotgate2';
const STUDENT_HTML = "<div class=\"ticker\"><div class=\"ticker-track\">\n<div class=\"ticker-group\"><a href=\"#units\">U00 認識 Godot 與技能包</a><span class=\"sep\">·</span><a href=\"#units\">U00B Godot 官方範例導覽</a><span class=\"sep\">·</span><a href=\"#units\">U01 一句話生出機器人遊樂場</a><span class=\"sep\">·</span><a href=\"#units\">U02 機器人找路實驗室</a><span class=\"sep\">·</span><a href=\"#units\">U03 倉儲搬運車調度中心</a><span class=\"sep\">·</span><a href=\"#units\">U04 機器人的眼睛</a><span class=\"sep\">·</span><a href=\"#units\">U05 教機器人認東西</a><span class=\"sep\">·</span><a href=\"#units\">U06 座標轉換：畫面點哪、車就到哪</a><span class=\"sep\">·</span></div><div class=\"ticker-group\" aria-hidden=\"true\"><a href=\"#units\">U00 認識 Godot 與技能包</a><span class=\"sep\">·</span><a href=\"#units\">U00B Godot 官方範例導覽</a><span class=\"sep\">·</span><a href=\"#units\">U01 一句話生出機器人遊樂場</a><span class=\"sep\">·</span><a href=\"#units\">U02 機器人找路實驗室</a><span class=\"sep\">·</span><a href=\"#units\">U03 倉儲搬運車調度中心</a><span class=\"sep\">·</span><a href=\"#units\">U04 機器人的眼睛</a><span class=\"sep\">·</span><a href=\"#units\">U05 教機器人認東西</a><span class=\"sep\">·</span><a href=\"#units\">U06 座標轉換：畫面點哪、車就到哪</a><span class=\"sep\">·</span></div>\n</div></div>\n<div class=\"wrap\">\n  <section class=\"hero\">\n    <div>\n      <span class=\"badge\">GODOT · CODEX · VIBE CODING</span>\n      <h1>AI 協作機器人的<br><em>設計與實作</em></h1>\n      <p class=\"sub2\">你負責說，AI 負責寫，機器人負責動</p>\n      <p class=\"lead\">不用買任何硬體。用白話把目標告訴 AI，在 Godot 做出會找路、會看、會抓、會讓人的機器人，\n        匯出網頁版，學生用手機就能玩。</p>\n      <a class=\"cta\" href=\"#units\">挑一個機器人開始 →</a>\n    </div>\n    <div class=\"hero-art\"><img src=\"assets/hero.jpg\" alt=\"老師對著筆電說出需求，螢幕裡的機器人開始動起來\"></div>\n  </section>\n\n  <section class=\"sec\" id=\"units\">\n    <h2>從會跑到會想，做出一整隊協作機器人</h2>\n    <p class=\"sub\">路徑規劃、機器視覺、機械手臂、人機協作安全、自駕循跡、AI 大腦——協作機器人最關鍵的技術，全部親手做出來。</p>\n    <ul class=\"hl\">\n      <li><b>🤖 不用買硬體</b>一台電腦就是機器人實驗室，壞了按重來就好</li>\n      <li><b>🧭 真實場景的難題</b>找最短路、多台車不相撞、倉儲調度，都是工廠每天在解的問題</li>\n      <li><b>👁️ 看得見、認得出、抓得準</b>從顏色辨識、教 AI 認東西，到座標換算與機械手臂夾取</li>\n      <li><b>🛡️ 人機協作安全</b>人一靠近就減速、太近就煞停，親眼看見安全規則怎麼保護人</li>\n      <li><b>🧠 接上 AI 大腦</b>一句話指揮手臂，AI 想錯時由程式把關擋下</li>\n      <li><b>📱 做完就能分享</b>每個機器人都能變成網頁，手機掃碼就能玩</li>\n    </ul>\n    <h3 class=\"cat\"><span>第零章</span>開課導讀<small>認識 Godot、技能包和 GitHub 上的好資源</small></h3>\n<div class=\"mag\">\n<div class=\"tvol\"><a class=\"pic has-img\" href=\"reader.html?u=U00\"><span class=\"tagno\">UNIT 00</span><img src=\"assets/cards/U00.jpg\" alt=\"認識 Godot 與技能包 封面\" loading=\"lazy\"></a><div class=\"body\"><div class=\"no\">開課導讀</div><h3><a href=\"reader.html?u=U00\">認識 Godot 與技能包</a></h3><p>下載免安裝的 Godot、跑起 GitHub 上的官方 3D 範例，把 Godot 技能裝進 Codex，第一次用一句話改造遊戲。</p><div class=\"acts\"><a class=\"btn read\" href=\"reader.html?u=U00\">📖 翻開這一本</a><details class=\"res\"><summary>⬇ 資源下載</summary><div class=\"menu\"><a href=\"code/U00/3d_truck_town.zip\" download>📦 官方範例 3d_truck_town</a><a href=\"code/U00/Godot網頁匯出元件.zip\" download>📦 Godot網頁匯出元件</a><a href=\"code/U00/U00_範例成品.zip\" download>📦 範例成品</a><a href=\"assets/prompt.html?f=code/U00/U00_提示詞.txt\" target=\"_blank\" rel=\"noopener\">📝 提示詞（開啟並複製）</a><a href=\"https://github.com/godotengine/godot/releases/download/4.7.2-stable/Godot_v4.7.2-stable_win64.exe.zip\" rel=\"noopener\">🔗 Godot 4.7.2 本體（官方，約 82 MB）</a><a href=\"https://github.com/haxqer/godot-skill/releases/latest/download/godot.zip\" rel=\"noopener\">🔗 Godot 技能包 godot.zip（原作者 haxqer）</a></div></details><a class=\"btn vid\" href=\"assets/video/U00.mp4\" target=\"_blank\" rel=\"noopener\">🎬 教學影片</a><a class=\"btn vid\" href=\"assets/guide/U00/index.html\" target=\"_blank\" rel=\"noopener\">📸 圖解教學</a></div></div></div>\n<div class=\"tvol\"><a class=\"pic has-img\" href=\"reader.html?u=U00B\"><span class=\"tagno\">UNIT 00-B</span><img src=\"assets/cards/U00B.jpg\" alt=\"Godot 官方範例導覽 封面\" loading=\"lazy\"></a><div class=\"body\"><div class=\"no\">開課導讀</div><h3><a href=\"reader.html?u=U00B\">Godot 官方範例導覽</a></h3><p>卡車小鎮之外，官方還有 138 個範例。挑出跟機器人最相關的 26 個：找路、物理、手臂、相機、狀態機，一頁一個，按一下就下載。</p><div class=\"acts\"><a class=\"btn read\" href=\"reader.html?u=U00B\">📖 翻開這一本</a><details class=\"res\"><summary>⬇ 資源下載</summary><div class=\"menu\"><a href=\"assets/prompt.html?f=code/U00B/U00B_範例清單.txt\" target=\"_blank\" rel=\"noopener\">📝 26 個範例下載清單（開啟並複製）</a><a href=\"https://github.com/godotengine/godot-demo-projects/releases/latest\" rel=\"noopener\">🔗 全部 138 個官方範例（官方下載頁）</a></div></details></div></div></div>\n</div>\n<h3 class=\"cat\"><span>第一篇</span>機器人的世界<small>用一句話做出機器人和它的場地，學會找路與避障</small></h3>\n<div class=\"mag\">\n<div class=\"tvol\"><a class=\"pic has-img\" href=\"reader.html?u=U01\"><span class=\"tagno\">UNIT 01</span><img src=\"assets/cards/U01.jpg\" alt=\"一句話生出機器人遊樂場 封面\" loading=\"lazy\"></a><div class=\"body\"><div class=\"no\">機器人的世界</div><h3><a href=\"reader.html?u=U01\">一句話生出機器人遊樂場</a></h3><p>白話告訴 Codex 你要什麼，做出 3D 機器人小車收集能量方塊；一句話換造型、顏色、軌跡和場地，匯出網頁版，全班用手機掃 QR 就能玩。</p><div class=\"acts\"><a class=\"btn read\" href=\"reader.html?u=U01\">📖 翻開這一本</a><details class=\"res\"><summary>⬇ 資源下載</summary><div class=\"menu\"><a href=\"code/U01/Godot網頁匯出元件.zip\" download>📦 Godot網頁匯出元件</a><a href=\"code/U01/U01_機器人遊樂場_SKILL.zip\" download>📦 技能包（交給 Codex 用）</a><a href=\"code/U01/U01_範例成品.zip\" download>📦 範例成品</a><a href=\"assets/prompt.html?f=code/U01/U01_提示詞.txt\" target=\"_blank\" rel=\"noopener\">📝 提示詞（開啟並複製）</a><a href=\"assets/prompt.html?f=code/U01/U01_改造.txt\" target=\"_blank\" rel=\"noopener\">📝 改造（開啟並複製）</a></div></details><a class=\"btn vid\" href=\"assets/video/U01.mp4\" target=\"_blank\" rel=\"noopener\">🎬 教學影片</a><a class=\"btn vid\" href=\"assets/guide/U01/index.html\" target=\"_blank\" rel=\"noopener\">📸 圖解教學</a><a class=\"btn demo\" href=\"https://u01-robot-playground-aliang.netlify.app\" target=\"_blank\" rel=\"noopener\">👀 實品觀摩</a></div></div></div>\n<div class=\"tvol\"><a class=\"pic has-img\" href=\"reader.html?u=U02\"><span class=\"tagno\">UNIT 02</span><img src=\"assets/cards/U02.jpg\" alt=\"機器人找路實驗室 封面\" loading=\"lazy\"></a><div class=\"body\"><div class=\"no\">機器人的世界</div><h3><a href=\"reader.html?u=U02\">機器人找路實驗室</a></h3><p>格子地圖上 A* 和 BFS 同場比賽，自己畫牆、放泥巴，看機器人怎麼繞路找到最短路線。</p><div class=\"acts\"><a class=\"btn read\" href=\"reader.html?u=U02\">📖 翻開這一本</a><details class=\"res\"><summary>⬇ 資源下載</summary><div class=\"menu\"><a href=\"code/U02/U02_機器人找路實驗室_SKILL.zip\" download>📦 技能包（交給 Codex 用）</a><a href=\"code/U02/U02_範例成品.zip\" download>📦 範例成品</a><a href=\"assets/prompt.html?f=code/U02/U02_提示詞.txt\" target=\"_blank\" rel=\"noopener\">📝 提示詞（開啟並複製）</a><a href=\"assets/prompt.html?f=code/U02/U02_改造.txt\" target=\"_blank\" rel=\"noopener\">📝 改造（開啟並複製）</a></div></details><a class=\"btn vid\" href=\"assets/video/U02.mp4\" target=\"_blank\" rel=\"noopener\">🎬 教學影片</a><a class=\"btn vid\" href=\"assets/guide/U02/index.html\" target=\"_blank\" rel=\"noopener\">📸 圖解教學</a><a class=\"btn demo\" href=\"https://u02-pathfinding-lab-aliang.netlify.app\" target=\"_blank\" rel=\"noopener\">👀 實品觀摩</a></div></div></div>\n<div class=\"tvol\"><a class=\"pic has-img\" href=\"reader.html?u=U03\"><span class=\"tagno\">UNIT 03</span><img src=\"assets/cards/U03.jpg\" alt=\"倉儲搬運車調度中心 封面\" loading=\"lazy\"></a><div class=\"body\"><div class=\"no\">機器人的世界</div><h3><a href=\"reader.html?u=U03\">倉儲搬運車調度中心</a></h3><p>多台搬運車同時接單送貨，遇到移動障礙即時重新規劃、互相讓路。</p><div class=\"acts\"><a class=\"btn read\" href=\"reader.html?u=U03\">📖 翻開這一本</a><details class=\"res\"><summary>⬇ 資源下載</summary><div class=\"menu\"><a href=\"code/U03/U03_倉儲搬運車調度中心_SKILL.zip\" download>📦 技能包（交給 Codex 用）</a><a href=\"code/U03/U03_範例成品.zip\" download>📦 範例成品</a><a href=\"assets/prompt.html?f=code/U03/U03_提示詞.txt\" target=\"_blank\" rel=\"noopener\">📝 提示詞（開啟並複製）</a><a href=\"assets/prompt.html?f=code/U03/U03_改造.txt\" target=\"_blank\" rel=\"noopener\">📝 改造（開啟並複製）</a></div></details><a class=\"btn vid\" href=\"assets/video/U03.mp4\" target=\"_blank\" rel=\"noopener\">🎬 教學影片</a><a class=\"btn vid\" href=\"assets/guide/U03/index.html\" target=\"_blank\" rel=\"noopener\">📸 圖解教學</a><a class=\"btn demo\" href=\"https://u03-warehouse-fleet-aliang.netlify.app\" target=\"_blank\" rel=\"noopener\">👀 實品觀摩</a></div></div></div>\n</div>\n<h3 class=\"cat\"><span>第二篇</span>機器人的眼睛<small>讓機器人看見、認得、算出東西在哪裡</small></h3>\n<div class=\"mag\">\n<div class=\"tvol\"><a class=\"pic has-img\" href=\"reader.html?u=U04\"><span class=\"tagno\">UNIT 04</span><img src=\"assets/cards/U04.jpg\" alt=\"機器人的眼睛 封面\" loading=\"lazy\"></a><div class=\"body\"><div class=\"no\">機器人的眼睛</div><h3><a href=\"reader.html?u=U04\">機器人的眼睛</a></h3><p>機器人頭上的相機畫面即時顯示，找出紅綠藍物件並框起來。</p><div class=\"acts\"><a class=\"btn read\" href=\"reader.html?u=U04\">📖 翻開這一本</a><details class=\"res\"><summary>⬇ 資源下載</summary><div class=\"menu\"><a href=\"code/U04/U04_機器人的眼睛_SKILL.zip\" download>📦 技能包（交給 Codex 用）</a><a href=\"code/U04/U04_範例成品.zip\" download>📦 範例成品</a><a href=\"assets/prompt.html?f=code/U04/U04_提示詞.txt\" target=\"_blank\" rel=\"noopener\">📝 提示詞（開啟並複製）</a><a href=\"assets/prompt.html?f=code/U04/U04_改造.txt\" target=\"_blank\" rel=\"noopener\">📝 改造（開啟並複製）</a></div></details><a class=\"btn vid\" href=\"assets/video/U04.mp4\" target=\"_blank\" rel=\"noopener\">🎬 教學影片</a><a class=\"btn vid\" href=\"assets/guide/U04/index.html\" target=\"_blank\" rel=\"noopener\">📸 圖解教學</a><a class=\"btn demo\" href=\"https://u04-robot-vision-aliang.netlify.app\" target=\"_blank\" rel=\"noopener\">👀 實品觀摩</a></div></div></div>\n<div class=\"tvol\"><a class=\"pic has-img\" href=\"reader.html?u=U05\"><span class=\"tagno\">UNIT 05</span><img src=\"assets/cards/U05.jpg\" alt=\"教機器人認東西 封面\" loading=\"lazy\"></a><div class=\"body\"><div class=\"no\">機器人的眼睛</div><h3><a href=\"reader.html?u=U05\">教機器人認東西</a></h3><p>現場拍樣本、現場訓練，機器人學會分辨新物件並顯示信心值。</p><div class=\"acts\"><a class=\"btn read\" href=\"reader.html?u=U05\">📖 翻開這一本</a><details class=\"res\"><summary>⬇ 資源下載</summary><div class=\"menu\"><a href=\"code/U05/U05_教機器人認東西_SKILL.zip\" download>📦 技能包（交給 Codex 用）</a><a href=\"code/U05/U05_範例成品.zip\" download>📦 範例成品</a><a href=\"assets/prompt.html?f=code/U05/U05_提示詞.txt\" target=\"_blank\" rel=\"noopener\">📝 提示詞（開啟並複製）</a><a href=\"assets/prompt.html?f=code/U05/U05_改造.txt\" target=\"_blank\" rel=\"noopener\">📝 改造（開啟並複製）</a></div></details><a class=\"btn vid\" href=\"assets/video/U05.mp4\" target=\"_blank\" rel=\"noopener\">🎬 教學影片</a><a class=\"btn vid\" href=\"assets/guide/U05/index.html\" target=\"_blank\" rel=\"noopener\">📸 圖解教學</a><a class=\"btn demo\" href=\"https://u05-teach-robot-aliang.netlify.app\" target=\"_blank\" rel=\"noopener\">👀 實品觀摩</a></div></div></div>\n<div class=\"tvol\"><a class=\"pic has-img\" href=\"reader.html?u=U06\"><span class=\"tagno\">UNIT 06</span><img src=\"assets/cards/U06.jpg\" alt=\"座標轉換：畫面點哪、車就到哪 封面\" loading=\"lazy\"></a><div class=\"body\"><div class=\"no\">機器人的眼睛</div><h3><a href=\"reader.html?u=U06\">座標轉換：畫面點哪、車就到哪</a></h3><p>點相機畫面，算出地面真實位置，小車自己開過去，誤差一目了然。</p><div class=\"acts\"><a class=\"btn read\" href=\"reader.html?u=U06\">📖 翻開這一本</a><details class=\"res\"><summary>⬇ 資源下載</summary><div class=\"menu\"><a href=\"code/U06/U06_座標轉換_SKILL.zip\" download>📦 技能包（交給 Codex 用）</a><a href=\"code/U06/U06_範例成品.zip\" download>📦 範例成品</a><a href=\"assets/prompt.html?f=code/U06/U06_提示詞.txt\" target=\"_blank\" rel=\"noopener\">📝 提示詞（開啟並複製）</a><a href=\"assets/prompt.html?f=code/U06/U06_改造.txt\" target=\"_blank\" rel=\"noopener\">📝 改造（開啟並複製）</a></div></details><a class=\"btn vid\" href=\"assets/video/U06.mp4\" target=\"_blank\" rel=\"noopener\">🎬 教學影片</a><a class=\"btn vid\" href=\"assets/guide/U06/index.html\" target=\"_blank\" rel=\"noopener\">📸 圖解教學</a><a class=\"btn demo\" href=\"https://u06-coordinate-aliang.netlify.app\" target=\"_blank\" rel=\"noopener\">👀 實品觀摩</a></div></div></div>\n</div>\n<div class=\"tipbar\" id=\"howto\"><span>💡</span><span><b>閱讀器怎麼用：</b>下方按鈕可以翻頁、縮放、跳章節，\n      也能直接在書頁上畫線做筆記。提示詞旁邊的「複製」按鈕可以一鍵複製；右邊的「程式碼」按鈕可以看技能包內容。</span></div>\n  </section>\n\n  <section class=\"sec\">\n    <h2>上課前先準備好</h2>\n    <p class=\"sub\">這幾件事在家裡先做完，課堂上才不會卡在安裝。</p>\n    <nav class=\"toc\">\n      <div class=\"row\"><span class=\"ch\">1</span><span><span class=\"nm\">練習資料夾</span>\n        <div class=\"ds\">建立一個 <code>AI機器人實作</code> 資料夾（本課程示範放在 F 槽），每個單元在裡面開一個子資料夾</div></span></div>\n      <div class=\"row\"><span class=\"ch\">2</span><span><span class=\"nm\">Godot 4.7（免安裝）</span>\n        <div class=\"ds\">到 godotengine.org 下載 Windows 版，解壓縮到 <code>AI機器人實作\\Godot</code></div></span></div>\n      <div class=\"row\"><span class=\"ch\">3</span><span><span class=\"nm\">Godot 網頁匯出元件</span>\n        <div class=\"ds\">下載本站的「Godot網頁匯出元件.zip」，解壓縮到同一個 Godot 資料夾（做網頁版會用到）</div></span></div>\n      <div class=\"row\"><span class=\"ch\">4</span><span><span class=\"nm\">Codex</span>\n        <div class=\"ds\">用自己的 ChatGPT 帳號登入 Codex（桌面版或終端機版都可以）</div></span></div>\n    </nav>\n  </section>\n</div>\n<footer>\n  <div class=\"wrap\">\n    <div class=\"au-label\">關於作者</div>\n    <p class=\"au-name\">阿亮老師 · 曾慶良</p>\n    <p class=\"au-desc\">新興科技推廣中心主任。專注於把 AI 工具帶進教學現場，讓不寫程式的人也能做出自己需要的工具。</p>\n    <div class=\"license\">\n      <p class=\"lic-t\">© 阿亮老師（曾慶良）版權所有</p>\n      <p class=\"fs\">本課程教材僅供「阿亮老師課程學員」學習使用。</p>\n      <p class=\"warn\">禁止修改內容 · 禁止轉傳散布 · 禁止商業使用</p>\n    </div>\n  </div>\n</footer>";

export const enabled = () => true;

const lvlName = {
  student: '學員（今天的夥伴）',
  all: '全部單元',
  admin: '終極（管理密碼）',
  open: '公開預覽'
};

export const levelName = l => lvlName[l] || l;

export async function login(pw) {
  if (!pw) return null;
  const cleanPw = String(pw).trim();
  // 驗證學員密碼 @godot-cobot
  if (cleanPw === '@godot-cobot' || cleanPw === 'godot-cobot') {
    const sessionData = {
      lvl: 'student',
      label: '學員（今天的夥伴）',
      time: Date.now()
    };
    try {
      sessionStorage.setItem(SK, JSON.stringify(sessionData));
    } catch (_) {}
    return 'student';
  }
  return null;
}

export function logout() {
  try {
    sessionStorage.removeItem(SK);
  } catch (_) {}
}

export async function session() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SK));
    if (s && s.lvl) {
      s.home = STUDENT_HTML;
      return s;
    }
  } catch (_) {}
  return null;
}

export async function homeHtml(s) {
  return (s && s.home) ? s.home : STUDENT_HTML;
}

export async function gateReader() {
  // 確保電子書閱讀器永遠能正常開啟
  try {
    if (!sessionStorage.getItem(SK)) {
      sessionStorage.setItem(SK, JSON.stringify({
        lvl: 'student',
        label: '學員（今天的夥伴）',
        time: Date.now()
      }));
    }
  } catch (_) {}
  return {};
}

export async function adminList() {
  return [
    { label: '學員（今天的夥伴）', lvl: 'student', builtin: true, off: false, h: 'student' }
  ];
}

export async function adminAdd() { return true; }
export const adminRemove = () => true;
export const adminDisable = () => true;
export const adminEnable = () => true;
