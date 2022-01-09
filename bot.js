const TeleBot = require('telebot');
const bot = new TeleBot(<BOT_TOKEN>);
var pushup = 0;
var msgid;
var chatid;
var time;
var time_of_msg;



//start ze bot
bot.on('/start', msg => {
    //if (msg.from.username == 'eD_cabbages') {
    time_of_msg = new Date();
    time_of_msg = time_of_msg.getDate() + '/' + (time_of_msg.getMonth() + 1) + '/' + time_of_msg.getFullYear();
    if (time != time_of_msg) {
        time = time_of_msg;
        pushup = 0;
        bot.unpinChatMessage(chatid, msgid).catch(error => console.log('Error:', error));
        return bot.sendMessage(msg.chat.id, time + ' Pushups = ' + pushup).then(re => {
            msgid = re.message_id;
            chatid = msg.chat.id;
            console.log(msgid);
            console.log(chatid);
            console.log(time);
            bot.pinChatMessage(chatid, msgid).catch(error => console.log('Error:', error));
        });
    } else {
        bot.unpinChatMessage(chatid, msgid).catch(error => console.log('Error:', error));
        return bot.sendMessage(msg.chat.id, time + ' Pushups = ' + pushup).then(re => {
            msgid = re.message_id;
            chatid = msg.chat.id;
            console.log(msgid);
            console.log(chatid);
            console.log(time);
            bot.pinChatMessage(chatid, msgid).catch(error => console.log('Error:', error));
        });
    }
});

//nooming cek price
bot.on(['/p', '/bn'], msg => {
    if (msg.from.id == '<userid>') {
        time_of_msg = new Date();
        time_of_msg = time_of_msg.getDate() + '/' + (time_of_msg.getMonth() + 1) + '/' + time_of_msg.getFullYear();
        if (time != time_of_msg) {
            time = time_of_msg;
            pushup = 1;
            bot.unpinChatMessage(chatid, msgid).catch(error => console.log('Error:', error));
            return bot.sendMessage(msg.chat.id, time + ' Pushups = ' + pushup).then(re => {
                msgid = re.message_id;
                chatid = msg.chat.id;
                console.log(msgid);
                console.log(chatid);
                console.log(time);
                bot.pinChatMessage(chatid, msgid).catch(error => console.log('Error:', error));
            });
        } else {
            pushup = pushup + 1;
            console.log(msgid);
            console.log(chatid);
            bot.editMessageText({ chatId: chatid, messageId: msgid }, time + ' Pushups = ' + pushup).catch(error => console.log('Error:', error));
        }
        
    }
});

//nooming cek wrong
bot.on(['/cekwrong'], msg => {
     pushup = pushup - 1;
     console.log(msgid);
     console.log(chatid);
     bot.editMessageText({ chatId: chatid, messageId: msgid }, time + ' Pushups = ' + pushup).catch(error => console.log('Error:', error));
});


bot.start();
time = new Date();
time = time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear();
