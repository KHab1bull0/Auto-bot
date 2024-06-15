import { Bot, session, Keyboard, InlineKeyboard } from 'grammy';
import { mainButtons, xizmatButtons, tanirovkaButtons, inline } from './buttons/button.js';
import { config } from 'dotenv';
config();


const token = process.env.AUTO_BOT_TOKEN;

const bot = new Bot(token);


function initial() {
    return { pizzaCount: 0, lastButtons: "mainButtons", currentButtons: "mainButtons" }
}

bot.use(session({ initial }));

await bot.api.setMyCommands([
    { command: "start", description: "🔄 Qayta ishga tushirish" },
    { command: "aloqa", description: "📱 Bot Admini bilan bo'glanish" }
]);

bot.on("inline_query", async (msg) => {
    console.log(msg)

    await msg.reply("nimagap");
})

bot.on('callback_query', async (msg) => {
    if(session.lastButtons == '/start') {
        console.log(msg.callbackQuery.data);
        await msg.reply("nima")
    };
    session.lastButtons = msg.callbackQuery.data;
})


bot.command('start', async (msg) => {
    console.log(msg.from);
    const chatId = msg.from.id;


    session.lastButtons = '/start';
    try {
        await msg.reply(`Botga xush kelibsiz 👐`, {
            reply_markup: mainButtons,
            parse_mode: "HTML"

        });


    } catch (error) {
        console.log('start commandda xatolik');
        msg.reply(`Xatolik bo'ldi kodga qara`)
    }
});

bot.command('aloqa', async (msg) => {
    try {
        const first_name = 'Jons'
        await msg.api.sendContact(msg.chat.id,
            {
                phone_number: '+998909157860',
            },
            'Admin'
        );

        console.log('Contact sent successfully');
    } catch (error) {
        console.error('Error sending contact:', error);
    }
});




bot.hears("📱 Aloqa", async (msg) => {
    try {
        await msg.api.sendContact(msg.chat.id,
            {
                phone_number: '+998901349282',
            },
            'AutoEffect Abdullo',
        );
        // await msg.api.sendContact(msg.chat.id,
        //     {
        //         phone_number: '+998946840420',
        //     },
        //     'AutoEffect Mahmud',
        // );
        // await msg.api.sendContact(msg.chat.id,
        //     {
        //         phone_number: '+998901349282',
        //     },
        //     'AutoEffect service',
        // );

        console.log("Contact jo'natildi...");
    } catch (error) {
        console.log("Contact jo'natishda xatolik\n", error);
    }
});


bot.hears("🛠️ Xizmatlar", (msg) => {
    session.lastButtons = '🛠️ Xizmatlar'
    msg.reply("🛠️ Xizmatlar", { reply_markup: xizmatButtons })
});


bot.hears("Tanirovka", (msg) => {
    session.lastButtons = 'Plyonka'
    msg.reply("Tanirovka", { reply_markup: tanirovkaButtons })
});

bot.hears("Plyonka", async (msg) => {
    session.lastButtons = 'Plyonka'
    msg.reply('Plyonka', { reply_markup: tanirovkaButtons });
});

bot.hears("⬅️ Orqaga", (msg) => {
    console.log(session.lastButtons)

    if (['🛠️ Xizmatlar', '📱 Aloqa'].includes(session.lastButtons)) {
        msg.reply("Bosh menu", { reply_markup: mainButtons });
    }

    if (['Plyonka', 'Palirovka', 'Ximchistika', 'Shumka'].includes(session.lastButtons)) {
        session.lastButtons = '🛠️ Xizmatlar'
        msg.reply('Xizmatlar', { reply_markup: xizmatButtons });
    }

    if (["Tanirovka", 'Sonsa zashita', 'Broni plyonka'].includes(session.lastButtons)) {
        session.lastButtons = 'Tanirovka'
        msg.reply('Plonka', { reply_markup: tanirovkaButtons });
    }
});




bot.start();