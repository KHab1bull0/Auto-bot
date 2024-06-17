import { InlineKeyboard, Keyboard } from 'grammy';



const mainButtons = new Keyboard().text('🛠️ Xizmatlar').text('📱 Aloqa').resized();
const xizmatButtons = new Keyboard().text("Plyonka").text("Palirovka").row().text('Ximchistka').row().text('⬅️ Orqaga').resized();
const tanirovkaButtons = new Keyboard().text('Tanirovka').text('Sonsa zashita').text('Bron plyonka').row().text("⬅️ Orqaga").resized();
const back = new Keyboard().text('⬅️ Orqaga');

const inline = new InlineKeyboard().text("what");

export {
    mainButtons,
    xizmatButtons,
    tanirovkaButtons,
    inline,
    back
}