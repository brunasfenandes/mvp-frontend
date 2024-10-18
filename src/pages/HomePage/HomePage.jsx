import "./HomePage.scss";
import Card from "../../components/Card/Card";

function HomePage() {
  const cardData = [
    { text: "People with Scrizophrenia", color: "#96bbbb", roomId: 2 },
    { text: "People with Depression", color: "#f0a7a0", roomId: 3 },
    { text: "People with OCD", color: "#f4d35e", roomId: 1 },
    { text: "Personality disorders", color: "lightsalmon", roomId: 4 },
    { text: "Problem Gambling", color: "#96bbbb", roomId: 6 },
    { text: "Substance dependency", color: "#f4d35e", roomId: 7 },
  ];

  return (
    <div className="main">
      <h1>CHAT ROOMS</h1>

      <div className="card-list">
        {cardData.map((card) => {
          return (
            <Card
              text={card.text}
              backgroundColor={card.color}
              roomId={card.roomId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
