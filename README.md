# Eres Mi Valentín - Quiz Game 💝

A retro-styled mobile web game designed to surprise your girlfriend with a cute Valentine's Day quiz. Built with vanilla HTML, CSS, and JavaScript.

## Features

- **Retro 90s UI Design**: Pixelated fonts, classic window frames, and authentic old-school button styles
- **4 Interactive Questions**: Custom questions with 4 options each
- **Smart Answer Validation**: Immediate feedback with animations
- **Cute End Screen**: Victory message with animated GIF
- **Mobile Responsive**: Optimized for mobile devices
- **Sound Feedback**: Visual animations for correct/incorrect answers

## Game Flow

### Start Menu
- Displays the question: "¿Estás lista para ser mi Valentín?"
- Features a retro window design with red text
- Single "Empezar" button to begin

### Game Levels
Each level presents a question with 4 answer options:

1. **Level 1**: "Empecemos suaves; ¿Cuál es mi banda favorita?"
   - Correct Answer: B) Sleep Token

2. **Level 2**: "En nuestra primera cita, ¿Qué perdiste?"
   - Correct Answer: C) La suela de tu bota

3. **Level 3**: "¿Cuál sería mi mascota?"
   - Correct Answer: A) Un dragón

4. **Level 4**: "¿A cuál erigirías de los siguientes?"
   - Correct Answer: D) A Mi

### Win Screen
- Displays the victory message: "Ves que si eres mi valentín, Te amooooo"
- Animated minion GIF playing on a loop

## Game Mechanics

### Correct Answer
- Button turns green
- "Correcto!!" message appears with animation
- Button wiggles
- Automatically advances to next level after 2 seconds

### Wrong Answer
- Button turns red
- "Nope!!" message appears with animation
- Button wiggles
- Button returns to normal color after 1.5 seconds
- Can try again immediately

## Design Elements

- **Color Scheme**: Red background (#c41e3a), retro gray windows (#c0c0c0)
- **Font**: Press Start 2P (pixelated/retro style)
- **Windows Style**: Classic 90s window frames with beveled borders
- **Buttons**: Retro OS-style buttons with 3D effects

## How to Play

1. Open `index.html` in a web browser
2. Click "Empezar" to start the game
3. Read each question carefully
4. Click the answer option you think is correct
5. See the feedback and advance to the next level
6. Complete all 4 levels to see the victory screen

## Files

- `index.html` - Main HTML structure with game layout
- `styles.css` - Complete retro styling and animations
- `script.js` - Game logic and interactivity

## Browser Compatibility

Works on all modern browsers including:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Design

The game is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## Notes

- The game uses a local gif URL from Tenor for the victory animation
- All animations are smooth and run at 60fps
- The game state is reset when you reload the page
- No external dependencies required (except Google Fonts for Press Start 2P)

## Customization

You can easily customize:
- Questions and answers in `script.js` (gameData array)
- Colors in `styles.css`
- Font sizes and spacing
- Animation speeds and effects

Enjoy surprising your girlfriend! 💕
