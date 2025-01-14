import chalk from 'chalk';
import { randomColor } from 'randomcolor';

if (process.argv.length < 3) {
  const color = randomColor();
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
} else if (process.argv.length < 4) {
  const color = randomColor({
    hue: process.argv[2],
    luminosity: 'random',
  });
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
