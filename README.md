# Final
Final Project for [Interface Programming 2 course](https://github.com/kcc-nma-art258) at KCC-NMA

Based on what you've learned from [assignments week 11-13](https://github.com/kcc-nma-art258/assignments), choose one of the three JavaScript-based web apps to enhance using your knowledge of interactive design and development principles.

Each web app will have it's own specific guidelines, requiring individual enhancements to be made to receive full credit for your final.

## Choose one of the following to redesign:

### 1. [To-Do List](examples/todo)
The to-do list is the canonical beginners web application because it involves several different components of user-interaction like accepting input from the user, displaying that input elsewhere on the screen, persisting state and providing visual feedback of interaction.

#### Specific Guidelines
- **User Experience/Usability Enhancements**
  - List input field should be placed above the list of items
  - New tasks should be added to the top of the list
  - The input field should clear after adding a new item
  - Completed tasks should visually look _"complete"_
  - Users should be able to remove/delete a task from the list

#### Visual Design Resources
- [ToDo MVC - Vanilla JavaScript Example](http://todomvc.com/examples/vanillajs/) 
- [Strike by Zurb](http://www.strikeapp.com/)
- [Google Keep](https://keep.google.com/)

### 2. [MPC Audio Player](examples/audio-player)
The MPC audio player we'll be developing is a modern version of the popular electronic musical instrument from the 1980's known as the drum machine. The MPC audio player will contain a set of 16 trigger pads with individual sound samples; interacting with a pad plays the sample, so playing multiple pads in succession allows you to create "beats". 

This example presents additional challenges, as you will need to work with the Web Audio API to play native audio samples directly in the browser.

#### Specific Guidelines
- **User Experience/Usability Enhancements**
  - Pads should be activated by key commands as well as mouse
  - The pads should display some visual feedback when the user interacts with them

#### Visual Design Resources
- [HTML5 Drum Machine](http://www.html5drummachine.com/) 
- [Jam with Chrome](http://www.jamwithchrome.com/)
- [Drum Machine Legends](http://onegloveapps.com/all-kits.html)
- [Sound Manager 2 MPC](http://www.schillmania.com/projects/soundmanager2/demo/mpc/)

### 3. [Game: Rock, Paper, Scissors](examples/game-rps)
While a simple game in real-life, rock-paper-scissors presents several challenges which test your ability at logic to determine the outcome of the winner. Games require accepting user input, like most apps, however games use this input to feed a set of logical conditions to determine the output to display on screen. This interaction between the user and logic is what makes a game both fun and challenging. 

#### Specific Guidelines
- **User Experience/Usability Enhancements**
  - Keep track of and display the score count (Wins-Ties-Wins) on the screen for the human and the computer player
  - After completing the game once, the user should be able to start again

#### Visual Design Resources
- [Play The Rock Paper Scissors Game](http://www.playrps.com/) 
- [NYTimes: Rock-Paper-Scissors](http://www.nytimes.com/interactive/science/rock-paper-scissors.html?_r=0)
- [Novel Games: Rock Paper Scissors](http://www.novelgames.com/en/rockpaperscissors/)


## Getting Setup

### Fork [kcc-nma-art258/final](https://github.com/kcc-nma-art258/final)
- [Forking a repository on GitHub](https://help.github.com/articles/fork-a-repo/)
- [Cloning a repository from GitHub Desktop](https://help.github.com/desktop/guides/contributing/cloning-a-repository-from-github-desktop/)
- In the **final** project on GitHub Desktop, create a new branch called `gh-pages`; this will be the branch that you make a **pull request** for to turn in your final assignment
- Open Atom (or your text editor) and add the **final** folder to your project tree view by clicking _'File > Add Project Folder...'_ or using the `cmd-shift-o` keyboard shortcut. _(You can also do this by right-clicking in GitHub Desktop on the **final** project and selecting **Open in Atom**)_

## Project Guidelines
- Any enhancements made to the examples must use your own custom HTML, CSS, & JavaScript (**no third-party code!**)
- Your project should use both Sass and JavaScript, and be structured following our the different architecture guidelines discussed in class
- Your final site must be hosted on GitHub in a `gh-pages` branch
- When you are ready to submit your code assignment, create a pull request using the `gh-pages` branch:
  - Have 2 other students review your work by mentioning them using the **@username** syntax in your pull request description (not the title!)
  - If your classmates find any issues, make the fixes locally and push the changes to the same remote branch
  - Once your code has been reviewed by 2 classmates and your code is ready to turn in, create a new comment on your pull request with the words `@micjamking: Final Submission`; this will send me a notification that your assignment is ready to be graded.

### Turning in your project
- Create a pull request from your `<username>/final:gh-pages` to `kcc-nma-art258/final:master`
- The pull request should have the title `NMA Bot - Final` (replacing `NMA Bot` with your name) 
- The pull request should have a description with a link to your live final site
- Turn in your project **by 11:59pm, Monday December 14**.