import IndividualFlashcard from "./IndividualFlashcard";
import initialFlashcardsList from "./Data/flashcards.json";

export default function FlashcardsContainer() {
  return (
    <section className="flex-row bg-mid-blue">
      {initialFlashcardsList.map((flashcard) => (
        <IndividualFlashcard key={flashcard.id} flashcard={flashcard} />
      ))}
    </section>
  );
}
