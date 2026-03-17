<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Z3p VTC - TruckersMP</title>

<style>
body{
    margin:0;
    font-family: Arial, sans-serif;
    background:#0f172a;
    color:white;
}

header{
    background:#020617;
    padding:20px;
    text-align:center;
}

header h1{
    margin:0;
    font-size:40px;
    color:#22c55e;
}

nav{
    background:#111827;
    padding:10px;
    text-align:center;
}

nav a{
    color:white;
    margin:0 15px;
    text-decoration:none;
    font-weight:bold;
}

nav a:hover{
    color:#22c55e;
}

section{
    padding:50px;
    max-width:1000px;
    margin:auto;
}

.card{
    background:#1e293b;
    padding:25px;
    border-radius:10px;
    margin-top:20px;
}

button{
    padding:12px 25px;
    border:none;
    border-radius:6px;
    background:#22c55e;
    color:black;
    font-weight:bold;
    cursor:pointer;
}

button:hover{
    background:#16a34a;
}

footer{
    text-align:center;
    padding:20px;
    background:#020617;
    margin-top:40px;
}
</style>
</head>

<body>

<header>
    <h1>Z3p VTC</h1>
    <p>Virtuelle Trucking Company auf TruckersMP</p>
</header>

<nav>
    <a href="#home">Start</a>
    <a href="#about">Über uns</a>
    <a href="#drivers">Fahrer</a>
    <a href="#join">Beitreten</a>
</nav>

<section id="home">
    <h2>Willkommen bei Z3p VTC</h2>
    <div class="card">
        <p>
        Willkommen bei der Z3p VTC! Wir sind eine virtuelle Spedition auf TruckersMP
        und fahren gemeinsam Konvois, Events und Lieferungen durch ganz Europa.
        </p>
    </div>
</section>

<section id="about">
    <h2>Über unsere VTC</h2>
    <div class="card">
        <p>
        Unsere VTC wurde gegründet, um gemeinsam Spaß im Multiplayer von Euro Truck Simulator zu haben.
        Wir organisieren regelmäßige Fahrten und Events.
        </p>
    </div>
</section>

<section id="drivers">
    <h2>Unsere Fahrer</h2>
    <div class="card">
        <ul>
            <li>Jannik</li>
            <li>Timnik</li>
            <li>Weitere Fahrer folgen...</li>
        </ul>
    </div>
</section>

<section id="join">
    <h2>Jetzt beitreten</h2>
    <div class="card">
        <p>Möchtest du Teil der Z3p VTC werden?</p>
        <button onclick="alert('Kontaktiere uns auf Discord!')">Jetzt Bewerben</button>
    </div>
</section>

<footer>
    <p>© 2026 Z3p VTC | TruckersMP VTC</p>
</footer>

</body>
</html>
