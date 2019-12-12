import * as program from 'commander'
import { serialization, deserialization } from './serialization';
import { MESSAGE_MAP } from './messages'

// we'll probably add more commands, like options for deploying
// fulfillment alone vs NLU vs NLU & fulfillment
program.version('0.1.0');

program
  .command('encode') // sub-command name
  .alias('e')
  .description('message to encode') // command description
  .option('--message <message>', 'Name of message')
  .action((cmd) => {
    console.log(cmd.message)
    console.log(MESSAGE_MAP[cmd.message])
    console.log(serialization(MESSAGE_MAP[cmd.message]))
  });

program
  .command('decode') // sub-command name
  .alias('d')
  .description('message to decode') // command description
  .option('--bin <bin>', 'Numerical data')
  .action((cmd) => {
    console.log(cmd.bin)
    const msg = deserialization(Uint8Array.from(cmd.bin.split(',')))
    console.log(msg)
    for (const [name, data] of Object.entries(MESSAGE_MAP)) {
      if (data.deviceAddress === msg.deviceAddress &&
          data.messageId === msg.messageId) {
        console.log(name)
      }
    }
  });

// allow commander to parse `process.argv`
program.parse(process.argv)
