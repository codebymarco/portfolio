import React from "react";
import transporter from "../../../public/transporter.png";
import fartup from "../../../public/fartup.png";

const GamesPage = () => {
  const games = [
    {
      id: 1,
      name: "Fartup",
      description:
        "A hilarious flappy inspired  game where you help your character navigate through challenges by using your butt!",
      image: fartup,
      difficulty: "Easy",
      genre: "Arcade",
      players: "1 Player",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)",
      playUrl: "https://games-one-lemon.vercel.app/flappy",
    },
    {
      id: 2,
      name: "Transporter",
      description:
        "Pick and drop off clients in different locations, while dodging the bad guys",
      image: transporter,
      difficulty: "Medium",
      genre: "Classic",
      players: "1 Player",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      playUrl: "https://games-one-lemon.vercel.app/transporter",
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "#38ef7d";
      case "Medium":
        return "#feca57";
      case "Hard":
        return "#ff6b6b";
      default:
        return "#61dafb";
    }
  };

  return (
    <>
      <style jsx>{`
        .games-page {
          background: linear-gradient(
            to bottom,
            #000000 0%,
            rgba(0, 0, 0, 0.95) 70%,
            rgba(13, 21, 28, 0.9) 100%
          );
          min-height: 100vh;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }

        .games-page::before {
          content: "";
          position: absolute;
          top: -150px;
          right: -150px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255, 107, 107, 0.1);
          filter: blur(120px);
          z-index: 0;
        }

        .games-page::after {
          content: "";
          position: absolute;
          bottom: -50px;
          left: -50px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: rgba(97, 218, 251, 0.08);
          filter: blur(100px);
          z-index: 0;
        }

        .arcade-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .arcade-title {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0;
          background: linear-gradient(to right, #61dafb, #ffffff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .arcade-title::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 3px;
          background: linear-gradient(
            to right,
            rgba(97, 218, 251, 0.3),
            #61dafb,
            rgba(97, 218, 251, 0.3)
          );
          border-radius: 3px;
          box-shadow: 0 0 15px rgba(97, 218, 251, 0.6);
        }

        .arcade-subtitle {
          font-size: 1.2rem;
          color: #aaa;
          margin-top: 15px;
          letter-spacing: 1px;
          font-weight: 300;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .game-card {
          background: rgba(10, 10, 10, 0.8);
          border: 2px solid rgba(97, 218, 251, 0.3);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
          transform-style: preserve-3d;
        }

        .game-card:hover {
          transform: translateY(-10px);
          border-color: rgba(97, 218, 251, 0.4);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .game-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            45deg,
            rgba(255, 107, 107, 0.1),
            transparent,
            rgba(97, 218, 251, 0.1)
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .game-card:hover::before {
          opacity: 1;
        }

        .game-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .game-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .game-card:hover .game-image {
          transform: scale(1.1);
        }

        .game-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.7;
          z-index: 2;
        }

        .game-content {
          padding: 25px;
          position: relative;
          z-index: 3;
        }

        .game-name {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin: 0 0 10px 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        .game-description {
          font-size: 1rem;
          color: #ccc;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .game-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          font-size: 0.9rem;
        }

        .game-stat {
          background: rgba(0, 0, 0, 0.5);
          padding: 5px 10px;
          border-radius: 10px;
          border: 1px solid rgba(97, 218, 251, 0.3);
        }

        .stat-label {
          color: #61dafb;
          font-weight: 600;
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-value {
          color: white;
          font-weight: 700;
        }

        .difficulty-easy {
          color: #38ef7d;
        }
        .difficulty-medium {
          color: #feca57;
        }
        .difficulty-hard {
          color: #ff6b6b;
        }

        .play-button {
          width: 100%;
          background: linear-gradient(135deg, #61dafb 0%, #3a7bd5 100%);
          border: none;
          padding: 15px;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(97, 218, 251, 0.2);
          position: relative;
          overflow: hidden;
        }

        .play-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(97, 218, 251, 0.3);
        }

        .play-button::before {
          content: "▶";
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .games-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            padding: 0 15px;
          }

          .arcade-title {
            font-size: 2.5rem;
          }

          .games-page {
            padding: 40px 15px;
          }

          .game-card:hover {
            transform: translateY(-5px);
          }
        }

        @media (max-width: 480px) {
          .arcade-title {
            font-size: 2.5rem;
            letter-spacing: 2px;
          }

          .game-content {
            padding: 20px;
          }

          .game-stats {
            flex-direction: column;
            gap: 10px;
          }

          .game-stat {
            text-align: center;
          }
        }
      `}</style>

      <div className="games-page">
        <div className="arcade-header">
          <h1 className="arcade-title">🎮 GAMES 🎮</h1>
          <p className="arcade-subtitle">Choose Your Adventure</p>
        </div>

        <div className="games-grid">
          {games.map((game) => (
            <div
              key={game.id}
              className="game-card"
              onClick={() => (window.location.href = game.playUrl)}
            >
              <div className="game-image-container">
                <img src={game.image} alt={game.name} className="game-image" />
                <div
                  className="game-overlay"
                  style={{ background: game.gradient }}
                />
              </div>

              <div className="game-content">
                <h3 className="game-name">{game.name}</h3>
                <p className="game-description">{game.description}</p>

                <div className="game-stats">
                  <div className="game-stat">
                    <span className="stat-label">Difficulty</span>
                    <span
                      className={`stat-value difficulty-${game.difficulty.toLowerCase()}`}
                    >
                      {game.difficulty}
                    </span>
                  </div>
                  <div className="game-stat">
                    <span className="stat-label">Genre</span>
                    <span className="stat-value">{game.genre}</span>
                  </div>
                  <div className="game-stat">
                    <span className="stat-label">Players</span>
                    <span className="stat-value">{game.players}</span>
                  </div>
                </div>

                <button className="play-button">Play Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesPage;
