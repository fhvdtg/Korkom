const { EmbedBuilder } = require('discord.js');
const { useQueue } = require('discord-player');
const { Translate } = require('../../process_tools');

module.exports = {
    name: 'history',
    description:('See the history of the queue'),
    voiceChannel: false,

    async execute({ inter }) {
        const queue = useQueue(inter.guild);

        if (!queue || queue.history.tracks.toArray().length == 0) return inter.editReply({ content: await Translate(`Mfma hata ghneya tekhdem ltw`) });

        const tracks = queue.history.tracks.toArray();

        let description = tracks
            .slice(0, 20)
            .map((track, index) => { return `**${index + 1}.** [${track.title}](${track.url}) by ${track.author}` })
            .join('\r\n\r\n');

        let historyEmbed = new EmbedBuilder()
            .setTitle(`History`)
            .setDescription(description)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter({ text: await Translate('Ahla Mariem Dabbegh'), iconURL: inter.member.avatarURL({ dynamic: true }) });

        inter.editReply({ embeds: [historyEmbed] });
    }
}