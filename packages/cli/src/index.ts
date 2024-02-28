import { Command } from 'commander'

const pkg = require('../package.json')

const program = new Command()

program
  .version(
    `current version: ${pkg.version}`,
    '-v, --version',
    'show the current version'
  )
  .description('PoUI CLI tool')
  .allowExcessArguments(false)


export default program
