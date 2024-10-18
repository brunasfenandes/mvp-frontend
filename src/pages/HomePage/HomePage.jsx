import "./HomePage.scss";
import Card from "../../components/Card/Card";

function HomePage() {
  const cardData = [
    { id: 1, text: "People with Scrizophrenia", color: "lightsalmon" },
    { id: 2, text: "People with Depression", color: "#f0a7a0" },
    { id: 3, text: "People with OCD", color: "#f4d35e" },
    { id: 4, text: "Personality disorders", color: "lightsalmon" },
    { id: 5, text: "Problem Gambling", color: "#96bbbb" },
    { id: 6, text: "Substance dependency", color: "#f4d35e" },
  ];

  return (
    <div>
      HOMEPAGE
      <div className="card-list">
        {cardData.map((card) => {
          return (
            <Card text={card.text} backgroundColor={card.color} key={card.id} />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
