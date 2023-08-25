# Battleship

![Screenshot of the App Overview](/src/assets/screenshots/Battleship_Showcase.png)

[View DEMO Here!](https://tommy128works.github.io/Knights-Travails/)

> [!NOTE]
> This project is best viewed on a desktop. It is not suited for mobile view.

## Project Description

Find the shortest path between two squares travelled by a knight! 

I initially tried a binary search tree (BST) approach that:
1. Listed all the knight's possible moves from the start position. 
2. Find shortest path by using breadth-first search (BFS) to find the end position.

This approach led to numerous nested recursive functions to manage and did not yield much success.

I then used the graph data-structure approach created by [tylphe](https://github.com/TYLPHE/knights-travails) which used depth-first search (DFS). Surprisingly, this approach used more concise code and worked incredibly!

Overall, this was a great learning experience for applying data structures and algorithms to solve problems.

Technologies Used:
- Webpack
- JavaScript
- CSS and SASS

Notable Coding Techniques Used:
- Data Structures and Algorithms
- ES6 Modules
- JavaScript Factory Functions
- JavaScript Module Pattern
- JavaScript EventListeners

## How to Run Project Locally

To run this project on your own computer, please fork the repository, then run the following commands in your command line:
```
npm install
npm start
```

Otherwise, please check out the [DEMO!](https://tommy128works.github.io/Knights-Travails/)

## How to Use the Project

Click the "START GAME" button to begin placing your battleships. You can click the "AXIS" button to change the orientation of your battleships.

![Screenshot of player setup](/src/assets/screenshots/Battleship_Player_Setup.png)

Once the game begins, you can try to sink your enemy's battleships by clicking on the computer's gameboard.
- GREEN means MISS
- ORANGE means HIT
- RED means SHIP SUNK

![Screenshot of gameplay](/src/assets/screenshots/Battleship_Computer.png)


## Credits

[This project](https://www.theodinproject.com/lessons/node-path-javascript-battleship) is from The Odin Project's [Full Stack JavaScript](https://www.theodinproject.com/paths/full-stack-javascript) course.