import { InlineKeyboard, Keyboard } from 'grammy';



const mainButtons = new Keyboard().text('🛠️ Xizmatlar').text('📱 Aloqa').resized();
const xizmatButtons = new Keyboard().text("Plyonka").text("Palirovka").row().text('Ximchistka').text("Shumka").row().text('⬅️ Orqaga').resized();
const tanirovkaButtons = new Keyboard().text('Tanirovka').text('Sonsa zashita').text('Bron plyonka').row().text("⬅️ Orqaga").resized();
const inline = new InlineKeyboard().text('nimagap');

export {
    mainButtons,
    xizmatButtons,
    tanirovkaButtons,
    inline
}