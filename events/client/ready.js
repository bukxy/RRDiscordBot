module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('je suis prêt');

        const devGuild = await client.guilds.cache.get('960103438379794523');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    }
}