# rock-paper-scissors
A simple, interactive console-based Rock, Paper, Scissors game built with vanilla JavaScript. Play a match against the computer directly inside your browser console!

## How It Works

- **Computer Choice:** The game uses a custom conditional layout powered by `Math.random()` to dynamically select Rock, Paper, or Scissors for the computer.
- **Human Input:** Prompts you for your choice at the start of the round. It includes basic typo protection by converting inputs to lowercase.
- **Score System:** Tracks outcomes using score variables and evaluates the winner of the match.

## File Structure

- `getComputerChoice()`: Simulates the computer picking a random move.
- `getHumanChoice()`: Prompts the player and standardizes their choice.
- `playRound()`: Compares choices and evaluates the round winner using programmatic string indicators (`"human"`, `"computer"`, `"tie"`).


## Setup & Execution

To run this game on your machine:

1. Copy the JavaScript game code.
2. Open your web browser (Google Chrome, Firefox, Safari, Edge).
3. Right-click anywhere on the page and select **Inspect** (or press `F12`) to open the Developer Tools.
4. Click on the **Console** tab.
5. Paste the code into the console field and hit **Enter**.
6. Follow the on-screen pop-up prompt to play!