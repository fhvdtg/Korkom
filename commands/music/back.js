const { EmbedBuilder } = require('discord.js');
const { useQueue } = require('discord-player');
const { Translate } = require('../../process_tools');

module.exports = {
    name: 'back',
    description:("Go back to the last song played"),
    voiceChannel: true,

    async execute({ inter }) {
        const queue = useQueue(inter.guild);
        if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Mfma hata ghneya tekhdem tw <${inter.member}>... Aawed jareb ? <❌>`) });

        if (!queue.history.previousTrack) return inter.editReply({ content: await Translate(`Mfma hata ghneya kenit tekhdem bekri <${inter.member}>... Aawed jareb ? <❌>`) });

        await queue.history.back();

        const backEmbed = new EmbedBuilder()
            .setAuthor({ name: await Translate(`Hatit lghenya li kbalha <✅>`) })
            .setColor('RANDOM');

        inter.editReply({ embeds: [backEmbed] });
    }
}