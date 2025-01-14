# Node.js Random Color Generator

Display a random color by running the application without any arguments:

<span style="color: green">
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

#####

##### #ff72d2

#####

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

#####

##### #b72d42

#####

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

#####

##### #023e8c

#####

###############################
###############################
###############################

```

<span style="color: green"> Some green text </span>

When "ask" is used as an argument instead of a color the user will be asked to input a color and a luminosity which will then be displayed afterwards:

```

node index.js ask
Enter a color name: blue
Type in luminosity (dark/light/bright): light
###############################
###############################
############################### ##### #####

##### #c7b4f7

#####

###############################
###############################
###############################

```

without any user input: print random color

with user input of a color name: print the specified color

with user input of a color name and a luminosity: print the specified color in the specified luminosity

## Todo

- [x] Find library which generates random colors
- [x] Find out how to style console outputs
- [ ] Find out how to accept user input from command line
```
