# Node.js Random Color Generator

Display a random color by running the application without any arguments:

```
node index.js
###############################
###############################
###############################
#####                     #####
#####       #4c56aa       #####
#####                     #####
###############################
###############################
###############################

node index.js
###############################
###############################
###############################
#####                     #####
#####       #ff72d2       #####
#####                     #####
###############################
###############################
###############################
```

Display a specific color by providing the color name as an argument:

```
node index.js red
###############################
###############################
###############################
#####                     #####
#####       #b72d42       #####
#####                     #####
###############################
###############################
###############################
```

Display a specific color with a specific luminosity by providing color and luminosity as an argument:

```
node index.js blue dark
###############################
###############################
###############################
#####                     #####
#####       #023e8c       #####
#####                     #####
###############################
###############################
###############################
```

without any user input: print random color

with user input of a color name: print the specified color

with user input of a color name and a luminosity: print the specified color in the specified luminosity

## Todo

- [x] Find library which generates random colors
- [ ] Find out how to style console outputs
