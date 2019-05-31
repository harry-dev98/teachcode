'use strict';

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const { promisify } = require('util');

const printTitle = promisify(figlet);

exports.showBanner = async () => {
  clear();
  try {
    const data = await printTitle('teachcode');
    console.log(chalk.red.bold(data));
    console.log(
      chalk.yellowBright(
        ` Learn to code effectively ${`\t`.repeat(4)} Powered by MadHacks\n`,
      ),
    );
  } catch (err) {
    console.err(err);
    process.exit(1);
  }
};
