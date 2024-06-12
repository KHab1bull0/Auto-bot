import { Keyboard } from 'grammy';




const mainButtons = new Keyboard().text('🛠️ Xizmatlar').text('📱 Aloqa').resized();
const xizmatButtons = new Keyboard().text("Plyonka").text("Palirovka").row().text('Ximchistka').text("Shumka").row().text('⬅️ Back').resized();
const tanirovkaButtons = new Keyboard().text('Tanirovka').text('Sonsa zashita').text('Broni plyonka').row().text("⬅️ Back").resized();


export {
    mainButtons,
    xizmatButtons,
    tanirovkaButtons
}