# Game Specification: Enhanced Breakout

## 1. Overview

This document outlines the features of an enhanced Breakout-style game. The base game is a classic Breakout where the player controls a paddle to bounce a ball and destroy bricks. This specification details new power-up features designed to make the game more engaging.

## 2. Core Gameplay (Existing)

*   **Objective**: Destroy all bricks on the screen by hitting them with a ball.
*   **Controls**: The player controls a paddle horizontally at the bottom of the screen using left and right arrow keys.
*   **Ball**: A single ball bounces off the walls, the paddle, and bricks.
*   **Bricks**: A grid of bricks is arranged at the top of the screen. Each hit destroys a brick.
*   **Scoring**: Players earn points for each brick destroyed.
*   **Game Over**: If the ball passes the paddle and hits the bottom edge of the screen.
*   **Win Condition**: All bricks are destroyed.
*   **Visuals**: Implemented in HTML5 Canvas with a title screen and basic 2D graphics.

## 3. New Feature: Power-ups

To enhance gameplay, a system of "Power-ups" will be introduced. Power-ups are special items that appear during gameplay, granting temporary advantages or altering game mechanics when collected by the player's paddle.

### 3.1. Power-up Spawning

*   When a brick is destroyed, there is a random chance (e.g., 20-30%) that a power-up item will spawn.
*   Only one power-up can spawn per destroyed brick.
*   The type of power-up spawned will be chosen randomly from the available types.
*   The power-up item will appear at the location of the destroyed brick and fall vertically towards the bottom of the screen.
*   If a power-up is not collected by the paddle and reaches the bottom of the screen, it disappears.

### 3.2. Power-up Types

#### 3.2.1. Wider Paddle

*   **Visual**: A falling item, possibly a rectangle labeled 'W' or an icon representing a wider paddle.
*   **Collection**: The power-up is collected if the player's paddle collides with the falling item.
*   **Effect**: Upon collection, the player's paddle width increases by 50% of its original size.
*   **Duration**: The effect lasts for 10 seconds, after which the paddle returns to its normal width. If another "Wider Paddle" power-up is collected while one is active, the duration timer resets to 10 seconds.

#### 3.2.2. Multi-ball

*   **Visual**: A falling item, possibly a rectangle labeled '+B' or an icon representing multiple balls.
*   **Collection**: The power-up is collected if the player's paddle collides with the falling item.
*   **Effect**: Upon collection, one additional ball is spawned.
    *   The new ball originates from the center of the paddle (or from the main ball's current position if that's simpler to implement initially).
    *   The new ball has a similar initial speed to the original ball but may have a slightly different trajectory (e.g., mirrored horizontal direction or a slight random angle) to ensure separation.
*   **Gameplay with Multiple Balls**:
    *   All active balls interact with bricks, walls, and the paddle independently.
    *   The game continues as long as at least one ball is in play.
    *   Game over occurs only when all balls have passed the paddle and hit the bottom of the screen.

## 4. Future Considerations (Out of Scope for this Iteration)

*   More power-up types (e.g., Fast Ball, Slow Ball, Sticky Paddle, Laser Paddle, Extra Life).
*   Negative power-ups (challenges).
*   Stacking or combining power-up effects.
*   Visual indicators for active power-up durations.
```
