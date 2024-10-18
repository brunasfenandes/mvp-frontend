import "./HomePage.scss";
import Card from "../../components/Card/Card";

function HomePage() {
  const cardData = [
    { text: "People with Scrizophrenia", color: "lightsalmon" },
    { text: "People with Depression", color: "#f0a7a0" },
    { text: "People with OCD", color: "#f4d35e" },
    { text: "Personality disorders", color: "lightsalmon" },
    { text: "Problem Gambling", color: "#96bbbb" },
    { text: "Substance dependency", color: "#f4d35e" },
  ];

  return (
    <div>
      HOMEPAGE
      <Card text="HI" backgroundColor="blue" />
      <div className="card-list">
        {cardData.map((card) => {
          return <Card text={card.text} backgroundColor={card.color} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
