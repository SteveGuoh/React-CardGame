import { useCallback } from "react";
import "./styles.scss";

interface CardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  disabled: boolean;
  flipped: boolean;
}

export default function Card({
  card,
  handleChoice,
  disabled,
  flipped
}: CardProps) {
  const handleClick = useCallback(() => {
    if (!disabled) {
      handleChoice(card);
    }
  }, [handleChoice, disabled, card]);

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="Card Front" />
        <img
          onClick={handleClick}
          className="back"
          src="/images/cover.png"
          alt="Card Back"
        />
      </div>
    </div>
  );
}
