const { EmbedBuilder } = require('discord.js');
const { useQueue } = require('discord-player');
const { Translate } = require('../../process_tools');

module.exports = {
    name: 'clear',
    description:('Clear all the music in the queue'),
    voiceChannel: true,

    async execute({ inter }) {
        const queue = useQueue(inter.guild);
        if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Mfma hata ghneya tekhdem tw <${inter.member}>... Aawed jareb ? <❌>`) });

        if (!queue.tracks.toArray()[1]) return inter.editReply({ content: await Translate(`Mfma hata ghneya fl queue <${inter.member}>... Aawed jareb ? <❌>`) });

        queue.tracks.clear();

        const clearEmbed = new EmbedBuilder()
            .setAuthor({ name: await Translate(`Fasakht el queue lkol <🗑️>`) })
            .setColor('RANDOM');

        inter.editReply({ embeds: [clearEmbed] });
    }
}