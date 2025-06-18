CodeXの性能テストに使います

---

## Game Features

This project is a Breakout-style game (ブロック崩しゲーム) implemented in HTML5 Canvas and JavaScript.

### Core Mechanics:
- Control a paddle to bounce a ball.
- Destroy bricks by hitting them with the ball.
- Score points for each brick destroyed.
- Game over if the ball is missed.
- Win by destroying all bricks.

### New Power-Up System:
The game now includes a power-up system to enhance gameplay:
- **Spawning**: Power-ups have a chance to spawn from a destroyed brick and will fall towards the paddle.
- **Collection**: Catch the falling power-up with your paddle to activate its effect.

#### Implemented Power-Ups:
1.  **Wider Paddle ('W')**:
    *   Temporarily increases the width of your paddle, making it easier to hit the ball.
    *   Effect lasts for 10 seconds.
2.  **Multi-ball ('M')**:
    *   Spawns an additional ball into play (up to a maximum of 5 balls).
    *   The game continues as long as at least one ball is active.

This project was enhanced to include these features.