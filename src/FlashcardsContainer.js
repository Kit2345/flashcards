import IndividualFlashcard from "./IndividualFlashcard";
import initialFlashcardsList from "./Data/flashcards.json";

export default function FlashcardsContainer() {
  return (
    <section>
      {initialFlashcardsList.map((flashcard) => (
        <IndividualFlashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </section>
  );
}
