module.exports = {
    app: {
        token: "ODIwNzA3NTA0MjQxNTA4NDAz.GBZPbs.MHwQS0RU8o5Fotqjt9X4rmwcJK_L3NxuMxHEDo",
        listening: "Cc les babiessss",
        global: true,
        guild: "1209267188595298395", 
        extraMessages: false,
        loopMessage: false,
        lang: "en",
        enableEmojis: false,
    },

    emojis: {
        back: "⏪",
        skip: "⏩",
        ResumePause: "⏯️",
        savetrack: "💾",
        volumeUp: "🔊",
        volumeDown: "🔉",
        loop: "🔁",
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: "",
            commands: [],
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: "highestaudio",
                highWaterMark: 1 << 25,
            },
        },
    },
};
