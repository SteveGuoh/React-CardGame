import { useState, useEffect, useCallback } from "react";
import { cardImages } from "../constants";

export default function useGame() {
  const [cards, setCards] = useState<Card[]>([]);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [winner, setWinner] = useState<boolean>(false);

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
  };

  const handleChoice = useCallback(
    (card: Card) => {
      choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    },
    [choiceOne]
  );

  const resetTurn = useCallback(() => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    const unMatched = cards.filter((card) => card.matched === false);
    unMatched.length ? setWinner(false) : setWinner(true);
  }, [cards]);

  return {
    shuffleCards,
    cards,
    handleChoice,
    choiceOne,
    choiceTwo,
    disabled,
    winner
  };
}
