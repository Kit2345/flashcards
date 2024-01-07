export default function IndividualFlashcard({ flashcard }) {
  return (
    <section className="flex-row width-third bg-light-blue height-container">
      <section className="flex-column">
        <section className="flex-row">
          <div className="width-third">edit</div>
          <div className="width-third"></div>
          <div className="width-third">❌</div>
        </section>
        <section className="margin-auto">
          <div>🤔</div>
        </section>
        <section className="margin-auto">
          <div>{flashcard.question}</div>
        </section>
      </section>
    </section>
  );
}
