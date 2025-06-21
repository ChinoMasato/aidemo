# World Simulation Game

This project is a simple simulation of a miniature economy where multiple agents autonomously produce goods and trade with one another.

## How it Works

- Each agent has money, raw materials, goods, a rate for gathering materials, a production rate, and a price for selling goods.
- Every second the simulation updates:
  - Agents gather raw materials.
  - They consume gathered materials to produce goods.
  - Each agent randomly selects another agent and attempts to sell a good if the buyer can afford it.
- The table on the page shows the current money, raw materials, and goods for each agent.

## Usage

Open `index.html` in a modern browser. Click **Start** to begin the simulation and **Stop** to pause it.

## Extended Features

This repository also includes a more ambitious specification for a large-scale world simulation. It describes systems for a vast map, countless NPCs who form relationships, reproduce and die, and organizations that wage war over territory and resources. See [SPEC.md](SPEC.md) for details.
