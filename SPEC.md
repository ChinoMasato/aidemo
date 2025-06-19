# Detailed Specification

This document expands on the world simulation game and summarizes the key systems that should be implemented.

## World Map
- The world is composed of a large grid of tiles grouped into chunks for efficient loading.
- Each tile stores its terrain type (plains, forest, mountain, water, etc.) and the amount of resources it can produce.
- Resources regenerate over time but may also become depleted.

## NPC Life Cycle
- Numerous NPCs inhabit the world and carry out farming, mining, and other economic activities.
- NPCs age, marry other NPCs, give birth to children, and eventually die when they reach their life span.
- Relationships evolve over time: NPCs can become friends, rivals, or even kill one another.

## Organizations and Politics
- Some NPCs rise to positions of power and form organizations such as villages or kingdoms.
- Organizations interact through diplomacy and trade. Conflicts over land or resources can escalate into war.

## Economy
- NPCs harvest resources from the map. These temporary products fuel local trade and production chains.
- Goods are exchanged between NPCs according to supply and demand. Prices fluctuate based on availability.

## Conflict
- When organizations clash, a war system resolves the outcome, shifting territory and resources between sides.

## Simulation Display
- A user interface displays NPC information, population changes, resource totals, and the state of each organization.

This specification acts as a baseline for implementing the larger simulation described in the README.
