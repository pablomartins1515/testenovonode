//require('dotenv-safe').config();
const { Telegraf } = require('telegraf')
 
const bot = new Telegraf("5829742655:AAE_3YIyLdDAPXrB5j0iXaRe-jvpxMmxK9Q");
bot.telegram.sendMessage(1576094152, 'buscardardos.com.br');
bot.telegram.sendMessage(1414329504, 'buscardardos.com.br');
bot.telegram.sendMessage(-1001616468107, 'buscardardos.com.br');


bot.hears('/start', (ctx) => ctx.reply('Entre no melhor site de buscas de placa: buscardados.com'));
bot.hears('/placa', (ctx) => ctx.reply('Entre no melhor site de buscas de placa: buscardados.com'));
bot.hears('/cpf', (ctx) => ctx.reply('Entre no melhor site de buscas de placa: buscardados.com'));
bot.hears('/menu@placagrupobot', (ctx) => ctx.reply('Entre no melhor site de buscas de placa: buscardados.com'));
bot.hears('/cpf@buscacpfbot', (ctx) => ctx.reply('Entre no melhor site de buscas de placa: buscardados.com'));

bot.on('text', (ctx) => {
  const text = ctx.message.text;
  if (text.includes('/placa')) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
    bot.telegram.sendMessage(ctx.chat.id, 'Entre no site buscardados.com.br para completar a sua pesquisa de placa.');
    bot.telegram.sendMessage(ctx.chat.id, 'Este grupo disponibliza consulta por CPF e consulta por NOME gratuitamente. Porém as consultas por placa de forma completa, estão apenas no melhor site: buscardados.com.br!');
    bot.telegram.sendMessage(ctx.chat.id, 'Pague somente pelo pv admin deste grupo ou no whatsapp do site oficial: buscardados.com.br!, o restante são golpistas e você vai perder seu dinheiro!');

  }
});

bot.on('text', (ctx) => {
  const text = ctx.message.text;
  if (text.includes('/cpf')) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
    bot.telegram.sendMessage(ctx.chat.id, 'Entre no site buscardados.com.br para completar a sua pesquisa de placa.');
    bot.telegram.sendMessage(ctx.chat.id, 'Este grupo disponibliza consulta por CPF e consulta por NOME gratuitamente. Porém as consultas por placa de forma completa, estão apenas no melhor site: buscardados.com.br!');
    bot.telegram.sendMessage(ctx.chat.id, 'Pague somente pelo pv admin deste grupo ou no whatsapp do site oficial: buscardados.com.br!, o restante são golpistas e você vai perder seu dinheiro!');
  }
});

bot.on('text', (ctx) => {
  const text = ctx.message.text;
  if (text.includes('/telefone')) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
    bot.telegram.sendMessage(ctx.chat.id, 'Entre no site buscardados.com.br para completar a sua pesquisa de placa.');
    bot.telegram.sendMessage(ctx.chat.id, 'Este grupo disponibliza consulta por CPF e consulta por NOME gratuitamente. Porém as consultas por placa de forma completa, estão apenas no melhor site: buscardados.com.br!');
    bot.telegram.sendMessage(ctx.chat.id, 'Pague somente pelo pv admin deste grupo ou no whatsapp do site oficial: buscardados.com.br!, o restante são golpistas e você vai perder seu dinheiro!');

  }
});

bot.on('text', (ctx) => {
  const text = ctx.message.text;
  if (text.includes('/cpf1')) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
    bot.telegram.sendMessage(ctx.chat.id, 'Entre no site buscardados.com.br para completar a sua pesquisa de placa.');
    bot.telegram.sendMessage(ctx.chat.id, 'Este grupo disponibliza consulta por CPF e consulta por NOME gratuitamente. Porém as consultas por placa de forma completa, estão apenas no melhor site: buscardados.com.br!');
    bot.telegram.sendMessage(ctx.chat.id, 'Pague somente pelo pv admin deste grupo ou no whatsapp do site oficial: buscardados.com.br!, o restante são golpistas e você vai perder seu dinheiro!');

  }
});

bot.on('text', (ctx) => {
  const text = ctx.message.text;
  if (text.includes('/cpf2')) {
    ctx.telegram.deleteMessage(ctx.chat.id, ctx.message.message_id);
    bot.telegram.sendMessage(ctx.chat.id, 'Entre no site buscardados.com.br para completar a sua pesquisa de placa.');
    bot.telegram.sendMessage(ctx.chat.id, 'Este grupo disponibliza consulta por CPF e consulta por NOME gratuitamente. Porém as consultas por placa de forma completa, estão apenas no melhor site: buscardados.com.br!');
    bot.telegram.sendMessage(ctx.chat.id, 'Pague somente pelo pv admin deste grupo ou no whatsapp do site oficial: buscardados.com.br!, o restante são golpistas e você vai perder seu dinheiro!');

  }
});

bot.launch();


console.log('bot rodando')

