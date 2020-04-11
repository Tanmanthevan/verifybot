const Command = require('../Command')

module.exports =
class HelpCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'cubehelp',
      properName: 'CubeTech Verify',
      aliases: ['rover'],
      description: 'Displays a description of CubeTech Verify'
    })
  }

  async fn (msg) {
    const output = `Welcome to CubeTech verify, a bot that makes you journey here better.`

    msg.reply(output)
  }
}