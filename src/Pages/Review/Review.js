import Persons from './Persons';
import Title from '../../Components/Title/Title';
import "./review.css";

function Review() {
  return (
    <main>
      <section className="container">
        <Title title="Review"/>
        <Persons />
      </section>
    </main>
  );
}

export default Review;
