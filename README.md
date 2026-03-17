<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daily Fun Hub</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      background: #f0f0f0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
    }
    header {
      text-align: center;
      padding: 20px;
      background: #ff6f61;
      color: white;
    }
    h1 {
      margin: 0;
      font-size: 2.5rem;
    }
    #fun-content {
      margin: 40px 0;
      text-align: center;
    }
    #fun-content img, #fun-content video {
      max-width: 90vw;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
    button {
      background: #ff6f61;
      color: white;
      border: none;
      padding: 15px 25px;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.3s;
    }
    button:hover {
      background: #ff3b2e;
    }
    footer {
      margin-top: 30px;
      color: #555;
    }
  </style>
</head>
<body>

<header>
  <h1>🎉 Daily Fun Hub 🎉</h1>
  <p>Get a random meme, video, or mini-game every day!</p>
</header>

<div id="fun-content">
  <img src="https://i.imgur.com/1eI3H1M.jpg" alt="Fun Meme" id="fun-media">
</div>

<button onclick="getRandomFun()">Show Me Fun!</button>

<footer>
  &copy; 2026 Daily Fun Hub
</footer>

<script>
  const funItems = [
    "https://i.imgur.com/1eI3H1M.jpg", // meme
    "https://i.imgur.com/6kJZs6b.jpg", // meme
    "https://www.w3schools.com/html/mov_bbb.mp4", // short video
    "https://i.imgur.com/0zjEJd2.jpg", // meme
    "https://www.w3schools.com/html/movie.mp4" // short video
  ];

  function getRandomFun() {
    const randomIndex = Math.floor(Math.random() * funItems.length);
    const mediaUrl = funItems[randomIndex];
    const container = document.getElementById('fun-content');

    if (mediaUrl.endsWith(".mp4")) {
      container.innerHTML = `<video controls autoplay><source src="${mediaUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
    } else {
      container.innerHTML = `<img src="${mediaUrl}" alt="Fun Media">`;
    }
  }
</script>

</body>
</html>
