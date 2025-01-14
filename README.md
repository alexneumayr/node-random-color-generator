# Node.js Random Color Generator

> [!NOTE]
> Please note that in the actual application the output will have the same color as the Hex Color Code shown in the middle. Due to limitations of Markdown it was not possible to show that in the examples.

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

When "ask" is used as an argument instead of a color the user will be asked to input a color and a luminosity which will then be displayed afterwards:

```
node index.js ask
Enter a color name:
blue
Type in luminosity (dark/light/bright):
light
###############################
###############################
###############################
#####                     #####
#####        #c7b4f7      #####
#####                     #####
###############################
###############################
###############################
```

without any user input: print random color

with user input of a color name: print the specified color

with user input of a color name and a luminosity: print the specified color in the specified luminosity

when the argument "ask" is used: asks the user to input and luminosity and then prints it afterwards
