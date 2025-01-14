import chalk from 'chalk';
import { randomColor } from 'randomcolor';

const color = randomColor();

if (process.argv.length < 3) {
  const chalkColor = chalk.hex(color);
  console.log(
    chalkColor(`###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################`),
  );
}
