<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Royal_of_illegal</title>
    <style>
        body {
            margin: 0;
            font-family: 'Courier New', Courier, monospace;
            color: #0f0;
            background-color: #000;
            overflow: hidden;
        }

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.8);
            box-shadow: 0 4px 20px rgba(0, 255, 0, 0.4);
        }

        header h1 {
            font-size: 2rem;
            animation: glow 1.5s infinite alternate;
        }

        header nav a {
            color: #0f0;
            text-decoration: none;
            margin: 0 15px;
            position: relative;
            font-size: 1.2rem;
        }

        header nav a::before {
            content: '';
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 0;
            height: 2px;
            background-color: #0f0;
            transition: width 0.3s ease-in-out;
        }

        header nav a:hover::before {
            width: 100%;
        }

        @keyframes glow {
            from {
                text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #00ff00;
            }
            to {
                text-shadow: 0 0 20px #0f0, 0 0 30px #00ff00, 0 0 40px #00ff00;
            }
        }

        .container {
            position: relative;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .matrix {
            position: absolute;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                rgba(0, 255, 0, 0.1),
                rgba(0, 255, 0, 0.1) 2px,
                transparent 2px,
                transparent 5px
            );
            pointer-events: none;
            animation: scan 5s linear infinite;
        }

        @keyframes scan {
            from {
                transform: translateY(-100%);
            }
            to {
                transform: translateY(100%);
            }
        }

        h2 {
            font-size: 2.5rem;
            animation: glow 1.5s infinite alternate;
            z-index: 1;
        }

        button {
            background-color: transparent;
            border: 2px solid #0f0;
            padding: 10px 20px;
            font-size: 1.5rem;
            color: #0f0;
            cursor: pointer;
            z-index: 1;
            transition: background-color 0.3s, color 0.3s;
        }

        button:hover {
            background-color: #0f0;
            color: #000;
        }

        footer {
            position: absolute;
            bottom: 10px;
            width: 100%;
            text-align: center;
            font-size: 0.9rem;
            color: rgba(0, 255, 0, 0.7);
        }
    </style>
</head>
<body>
    <header>
        <h1>ROYALSTAR</h1>
        <nav>
            <a href="home.html">Home</a>
            <a href="about.html">About</a>
            <a href="project.html">Projects</a>
            <a href="contact.html">Contact</a>
        </nav>
    </header>

    <div class="container">
        <div class="matrix"></div>
        <h2>Welcome to the ROYAL_OF_ILLEGAL</h2>
        <button onclick="alert('You clicked!')">Dive In</button>
    </div>

    <footer>
        © 2025 royal| Keep Hacking the Future
    </footer>
</body>
</html>
