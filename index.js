import chalk from 'chalk';
import { randomColor } from 'randomcolor';
import readline from 'readline';

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
  if (process.argv[2] === 'ask') {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('Enter a color name: ', (userColor) => {
      rl.question(
        'Type in luminosity (dark/light/bright): ',
        (userLuminosity) => {
          const color = randomColor({
            hue: userColor,
            luminosity: userLuminosity,
          });
          console.log(
            chalk.hex(color)(`###############################
        ###############################
        ###############################
        #####                     #####
        #####       ${color}       #####
        #####                     #####
        ###############################
        ###############################
        ###############################`),
          );
          rl.close();
        },
      );
    });
  } else {
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
} else if (process.argv.length < 5) {
  const color = randomColor({
    hue: process.argv[2],
    luminosity: process.argv[3],
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
} else {
  console.log('Please refer to the README to see how to use the application.');
}
