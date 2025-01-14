import readline from 'node:readline';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// Function to log the color to the console
function logColor(hexColor) {
  console.log(
    chalk.hex(hexColor)(
      `###############################
###############################
###############################
#####                     #####
#####       ${hexColor}       #####
#####                     #####
###############################
###############################
###############################`,
    ),
  );
}

// If no argument is provided then it will display a random color
if (process.argv.length < 3) {
  const color = randomColor();
  logColor(color);
} else if (process.argv.length < 4) {
  // Checks if one argument is provided
  if (process.argv[2] === 'ask') {
    // Checks if this argument is "ask"
    // Creates readline interface the enable command line input functionality
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    // Asks for color name
    rl.question('Enter a color name: ', (userColor) => {
      // Asks for luminosity
      rl.question(
        'Type in luminosity (dark/light/bright): ',
        (userLuminosity) => {
          const color = randomColor({
            hue: userColor,
            luminosity: userLuminosity,
          });
          logColor(color);
          rl.close();
        },
      );
    });
  } else {
    // If one argument is provided and this argument is NOT "ask" it will treat it as a color name
    const color = randomColor({
      hue: process.argv[2],
      luminosity: 'random',
    });
    logColor(color);
  }
} else if (process.argv.length < 5) {
  // If two arguments are provided it will use the first one as a color and the second as the luminosity
  const color = randomColor({
    hue: process.argv[2],
    luminosity: process.argv[3],
  });
  logColor(color);
} else {
  // If more than three arguments are provided it tells the user to refer to the README
  console.log('Please refer to the README to see how to use the application.');
}
