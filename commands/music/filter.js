const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { AudioFilters, useQueue } = require('discord-player');
const { Translate } = require('../../process_tools');

module.exports = {
    name: 'filter',
    description:('Add a filter to your track'),
    voiceChannel: true,
    options: [
        {
            name: 'filter',
            description:('The filter you want to add'),
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [...Object.keys(AudioFilters.filters).map(m => Object({ name: m, value: m })).splice(0, 25)],
        }
    ],

    async execute({ inter }) {
        const queue = useQueue(inter.guild);
        if (!queue?.isPlaying()) return inter.editReply({ content: await Translate(`Mfma hata ghneya tekhdem tw <${inter.member}>... Aawed jareb ? <❌>`) });

        const actualFilter = queue.filters.ffmpeg.getFiltersEnabled()[0];
        const selectedFilter = inter.options.getString('filter');

        const filters = [];
        queue.filters.ffmpeg.getFiltersDisabled().forEach(f => filters.push(f));
        queue.filters.ffmpeg.getFiltersEnabled().forEach(f => filters.push(f));

        const filter = filters.find((x) => x.toLowerCase() === selectedFilter.toLowerCase().toString());

        let msg = await Translate (`Mfmech filtre haka <${inter.member}>... Aawed jareb ? <❌ \n>`) +
            (actualFilter ? await Translate(`Filter eli yekhdem tw: <**${actualFilter}**. \n>`) : "") +
            await Translate(`List mtaa el filters:`);
        filters.forEach(f => msg += `- **${f}**`);

        if (!filter) return inter.editReply({ content: msg });

        await queue.filters.ffmpeg.toggle(filter);

        const filterEmbed = new EmbedBuilder()
            .setAuthor({ name: await Translate(`El filter <${filter}> tw <${queue.filters.ffmpeg.isEnabled(filter) ? 'yekhdem' : 'disabled'}> <✅\n> *Att!: ynajem yabta ken el ghneya twila.*`) })
            .setColor('RANDOM');

        return inter.editReply({ embeds: [filterEmbed] });
    }
}