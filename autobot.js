import TelegramBot from 'node-telegram-bot-api';
import { connectMongodb } from './config/db.js';
import { contactbtn, mainbuttons, option, option2 } from './buttons/options/buttons.js';
import { findAll } from './services/user.js';
import { config } from 'dotenv';
config();

// Telegram botni yaratish uchun token
const token = process.env.AUTO_BOT_TOKEN;

// Botni yaratish
const bot = new TelegramBot(token, { polling: true });



bot.setMyCommands([
  {
    command: "/start",
    description: "Botni qayta ishga tushirish...",
  },
  {
    command: "/info",
    description: "Bot haqida malumot olish...",
  },
  {
    command: "/game",
    description: "Random game"
  }, {
    command: "/userlar_soni",
    description: "User sonini ko'rish"
  }
]);

connectMongodb()

const run = () => {
  let check = 0;

  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const msgtext = msg.text;
    let unix_timestamp = msg.date;
    let dates = new Date(unix_timestamp * 1000);
    console.log();

    console.log(dates.toDateString() + ' ' + dates.toTimeString().split(' ')[0])

    if (msgtext === '/start') {
      return bot.sendMessage(chatId, `Assalomu alaykum
     Iltimos 📱 Contactizni yuboring! `, contactbtn);
    }

    if (msgtext === '/game') {
      return bot.sendMessage(chatId, 'Random game', option);
    }

    if (msgtext === '/userlar_soni') {
      const AllUser = await findAll();

      return bot.sendMessage(chatId, AllUser.length);
    };

    bot.sendMessage(chatId, `${msgtext}`);

  });

  bot.on("chat_member", data => {

    console.log(data);
    return 0
  })


  bot.on('callback_query', async (msg) => {
    const random = Math.floor(Math.random() * 10);
    const chatId = msg.from.id
    const data = msg.data

    console.log(msg)
    console.log(data)

    if (data == '/again') {
      check = 0
      return bot.sendMessage(chatId, "Random game", option);
    }


    if (data == random && check == 0) {
      check = 1;
      return bot.sendMessage(chatId, "Tabriklaymiz yutdingiz 🎉", option2);
    } else if (check == 0) {
      check = 1
      return bot.sendMessage(chatId, "Yutqazdingiz 😔", option2);
    };
  });
};


run()


