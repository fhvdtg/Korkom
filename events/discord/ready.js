const { Translate } = require('../../process_tools');
const express = require("express");
const app = express();
module.exports = async (client) => {
    console.log(await Translate(`Logged to the client <${client.user.username}>.`));
    console.log(await Translate("Let's play some music !"));
    
    client.user.setActivity(client.config.app.listening);
    client.user.setPresence({
       status: 'dnd',
       activity: {
          name: 'Maryouma',
           type: 'PLAYING'
        }
     });
    //client.user.setActivity(client.config.app.watching);
}