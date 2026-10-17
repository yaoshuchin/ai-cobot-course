/* 課程網站入口（已完全移除密碼） */
const GATE = null;

const SK = 'cobotgate2';
export const enabled = () => false;
const lvlName = { student: '學員', all: '全部單元', admin: '管理員' };
export const levelName = l => lvlName[l] || l;

export async function login(pw){ return 'open'; }
export function logout(){ try{ sessionStorage.removeItem(SK); }catch(_){} }
export async function session(){ return { lvl: 'open' }; }
export async function homeHtml(s){ return ''; }
export async function gateReader(){ return {}; }
export async function adminList(){ return []; }
export async function adminAdd(){ return true; }
export const adminRemove = () => true;
export const adminDisable = () => true;
export const adminEnable = () => true;
