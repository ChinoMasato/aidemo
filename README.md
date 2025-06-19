# World Simulation Game

This project is a simple simulation of a miniature economy where multiple agents autonomously produce goods and trade with one another.

## How it Works

- Each agent has money, goods, a production rate, and a price for selling goods.
- Every second the simulation updates:
  - Agents produce goods according to their production rate.
  - Each agent randomly selects another agent and attempts to sell a good if the buyer can afford it.
- The table on the page shows the current money and goods for each agent.

## Usage

Open `index.html` in a modern browser. Click **Start** to begin the simulation and **Stop** to pause it.
