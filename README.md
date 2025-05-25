# 🔥 Blink Tac Toe

A strategic, fast-paced, emoji-powered twist on Tic Tac Toe — built with **React + Vite + Tailwind CSS** for the **Darban.ai Frontend Developer Challenge**.

🔗 **Live Demo:** [https://blink-tic-tac-toe.vercel.app](https://blink-tic-tac-toe.vercel.app)

---

## 🎯 Objective

Build a 3x3 grid game with layered mechanics:
- Players use **emojis** instead of Xs and Os.
- Each emoji has **health points (HP)** and can **decay or be attacked**.
- Only 4 emojis per player can stay at full HP.
- After 15 moves each → **Sudden Death Mode**: no attacks, no decay.
- Win by aligning **3 of your emojis** in a row.

---

## ⚙️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** useReducer + Context API
- **Routing:** React Router DOM
- **Deployment:** Vercel

---

## 📦 Features

### ✅ Core Gameplay
- Turn-based 2-player emoji game.
- Choose your emoji category at the start.
- Each tile starts with **5 HP**.
- Attack opponent's tiles (–2 HP).
- Your own tiles decay by 1 HP after your turn.
- Tiles vanish when HP reaches 0.
- Can’t attack or place on your own tiles.
- Win with 3 emojis in a row (horizontal, vertical, diagonal).
- **Sudden Death Mode**: After 15 moves each, HP/attacks are disabled.

### 🔧 Additional Features
- 🎨 Emoji style selector (Animals, Food, Emotions, etc.)
- 📖 Rules page explaining game logic
- 🏠 Home screen with navigation
- 🔁 Reset button after win


---

## 🧠 Game Flow

1. Players land on the home screen.
2. Choose emoji styles from predefined categories.
3. Game starts with Player 1.
4. Players alternate turns, attacking or placing.
5. After 15 moves each, Sudden Death begins.
6. First to align 3 of their emojis wins.

---

## 🎨 Emoji Categories

Players can choose a category:
- **Food:** 🍕 🍔 🍣 🍟
- **Sports:** ⚽ 🏀 🎾 🏈
- **Animals:** 🐵 🦃 🐳 🐌

Players are randomly assigned an emoji from their selected category.

---

## 💀 Sudden Death Mode

- Triggered after 15 moves per player.
- No attacks or decay.
- All tiles become **permanent**.
- You can only place on empty cells.
- Strategy shifts to pure placement.

---

## 🛠️ Run Locally

```bash
npm install
npm run dev
