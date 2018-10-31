const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "tinex.";

client.login(process.env.TOKEN);

client.on("ready", () => {

    

 console.log("Je suis prêt");

 setInterval(function(){

    client.user.setActivity(client.guilds.size + ' serveurs', { type: 'WATCHING' });

 }, 2000);

 

}); 

client.on("guildMemberAdd", member => {

  const bvn = member.guild.channels.find(m => m.name === "『📩』bienvenue")

  if(!bvn) return;

  const embed = new Discord.RichEmbed()

  .setColor('#0800F6')

  .setAuthor(member.user.tag, member.user.avatarURL)

  .setTitle("Arrivée d'un nouvel utilisateur")

  .addField("Un nouvel utilisateur vient d'arriver", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)

  .setDescription("J'espère tu vas passer un bon moment parmi nous")

  .addField("Ma commande est `tinex.help`", "Si tu souhaites savoir mon fonctionnement")

  .addField(`Nombre de membres après l'arrivée de __${member.user.tag}__`, member.guild.memberCount)

  .setFooter(`ID : ${member.user.id}`)

  .setTimestamp()

  bvn.send(embed)

})

client.on("guildMemberRemove", member => {

  const bvn = member.guild.channels.find(m => m.name === "『📩』bienvenue")

  if(!bvn) return;

  const embed = new Discord.RichEmbed()

  .setColor('#0800F6')

  .setAuthor(member.user.tag, member.user.avatarURL)

  .setTitle("Départ d'un nouvel utilisateur")

  .addField("Un nouvel utilisateur vient de partir", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)

  .addField(`Nombre de membres après le départ de __${member.user.tag}__`, member.guild.memberCount)

  .setFooter(`ID : ${member.user.id}`)

  .setTimestamp()

  bvn.send(embed)

})

client.on("guildMemberAdd", member => {

  const bvn2 = member.guild.channels.find(m => m.name === "『🚫』logs-bienvenue")

  if (!bvn2) return;

  bvn2.send(`Bienvenue ${member}, Bienvenue je t'invite à lire le règlement.

Et surtout passe de bons moments avec nous !`)

})

client.on('message', message => { 

    if(message.content === "Bonjour"){

        message.reply("Salut");

        console.log('Le bot dit Bonjour');

    }

    if(message.content === "Bonsoir"){

        message.reply("Bonsoir :wave:");

        console.log('Le bot dit Bonsoir');

    }

    

    if(message.content === "tg"){

    						message.reply("Arrête d'insulter wsh")    						console.log ('Le bot te donne son invitation')

    						

    }

if(message.content === prefix + "help") {

        var help_embed = new Discord.RichEmbed()

        .setColor("#0800F6")

        .setTitle("Voici la page d'aide !")

        .addField(":six_pointed_star: Administration du bot", "En développement!")

        .addField(":oncoming_police_car: Modération", "En développement !")

        .addField(":rotating_light: Administration", "En développement !")

        .addField(":tada: FUN", "En développement !")

        .addField("Support","En développement !")

        .addField("Invitation","https://discordapp.com/oauth2/authorize?client_id=498576481161838595&permissions=8&scope=bot")

        .setFooter("Bot développer par </>Tinex#1295");

        message.channel.send("La page d'aide vous à bien été envoyée en Message Privé !").then(msg => msg.delete(3000));

        message.author.send(help_embed);

        console.log("Un utilisateur a effectué la commande d'aide !")

    

}

if(message.content === prefix + "info") {

       var info_embed = new Discord.RichEmbed()

       .setColor("#0800F6")

       .setTitle("Voici les informations sur moi et le serveur !")

       .addField(" :robot: Nom :", `${client.user.tag}`, true)

       .addField("Descriminateur du bot :hash:", `#${client.user.discriminator}`)

       .addField("ID :id: ", `${client.user.id}`)

       .addField("Nombre de membres", message.guild.members.size)

       .addField("Nombre de catégories et de salons", message.guild.channels.size)

       .setFooter("Info - Bot")

       message.channel.send(info_embed)

       console.log("Un utilisateur a effectué la commande d'info !")

}

});
