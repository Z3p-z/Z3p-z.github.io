<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FunBot Hub</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    /* Reset & Body */
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #121212;
      color: #ffffff;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      align-items: center;
    }

    header {
      width: 100%;
      padding: 2rem;
      background: #1f1f1f;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.5);
    }
    header h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: #ff6f61;
    }
    header p {
      color: #ccc;
    }

    main {
      width: 90%;
      max-width: 1200px;
      margin: 2rem auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .card {
      background: #1f1f1f;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.4);
      text-align: center;
      transition: transform 0.3s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card h2 {
      color: #ff6f61;
      margin-bottom: 1rem;
    }
    .card p {
      color: #ccc;
      font-size: 0.95rem;
      margin-bottom: 1rem;
    }
    .card button {
      padding: 0.6rem 1.2rem;
      border: none;
      border-radius: 5px;
      background: #ff6f61;
      color: #fff;
      cursor: pointer;
      font-size: 1rem;
      transition: 0.3s;
    }
    .card button:hover {
      background: #ff3b2e;
    }

    footer {
      width: 100%;
      padding: 1rem;
      text-align: center;
      color: #777;
      margin-top: auto;
      background: #1f1f1f;
    }

    /* UptimeRobot Embed */
    iframe {
      border: none;
      border-radius: 10px;
      width: 100%;
      height: 300px;
    }

  </style>
</head>
<body>

<header>
  <h1>FunBot Hub 🤖</h1>
  <p>Your daily hub for memes, mini-games, and bot tools!</p>
</header>

<main>
  <div class="card">
    <h2>Random Meme</h2>
    <p>Click the button to see a random funny meme!</p>
    <button onclick="showMeme()">Show Meme</button>
    <div id="meme-container" style="margin-top:1rem;"></div>
  </div>

  <div class="card">
    <h2>Mini Game</h2>
    <p>Play a small game right in your browser!</p>
    <button onclick="alert('Mini-game coming soon! 🎮')">Play Game</button>
  </div>

  <div class="card">
    <h2>Uptime Status</h2>
    <p>Monitor if our site is online 24/7</p>
    <!-- Replace the src with your UptimeRobot embed link -->
    <iframe src="https://stats.uptimerobot.com/YOUR_PUBLIC_KEY_HERE"></iframe>
  </div>
</main>

<footer>
  &copy; 2026 FunBot Hub | Made with ❤️ by Jannik
</footer>

<script>
  const memes = [
    "https://i.imgur.com/1eI3H1M.jpg",
    "https://i.imgur.com/6kJZs6b.jpg",
    "https://i.imgur.com/0zjEJd2.jpg"
  ];

  function showMeme() {
    const idx = Math.floor(Math.random() * memes.length);
    document.getElementById("meme-container").innerHTML = `<img src="${memes[idx]}" alt="Meme" style="width:100%; border-radius:10px;">`;
  }
</script>

</body>
</html>
