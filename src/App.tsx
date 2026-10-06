import "./App.css";
import animalsData from "./data/animals.json";
import type { Animal } from "./types/Animal";

function App() {
  const animals: Animal[] = animalsData;

  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">Animal collection</p>
        <h1>Animals of the world</h1>
        <p className="intro">
          Discover the average speed and weight of five remarkable animals.
        </p>
      </header>

      <section className="animal-grid" aria-label="Animal list">
        {animals.map((animal) => (
          <article className="animal-card" key={animal.name}>
            <div className="animal-card-heading">
              <h2>{animal.name}</h2>
              <span className="continent">{animal.continent}</span>
            </div>
            <dl className="animal-stats">
              <div>
                <dt>Average speed</dt>
                <dd>{animal.averageSpeed} km/h</dd>
              </div>
              <div>
                <dt>Average weight</dt>
                <dd>{animal.weight} kg</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
