import Mascot from './components/Mascot';

const values = [
  { title: 'Качество в каждой порции' },
  { title: 'Быстрая доставка' },
  { title: 'Забота о клиентах' },
];

export default function App() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="/">ВОТ ЭТО <span>РОЛЛ</span></a>
        <span className="city">ВОЛОГДА</span>
      </header>

      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">СВОЯ КУХНЯ · СВОЯ ДОСТАВКА</p>
          <h1>ВОТ ЭТО<br /><em>РОЛЛ.</em></h1>
          <p className="slogan">Вот это действительно вкусно!</p>
          <p className="lead">Готовим с характером. Скоро будем радовать Вологду.</p>
          <span className="status">САЙТ В РАЗРАБОТКЕ</span>
        </div>
        <div className="hero-mascot">
          <Mascot size={220} title="Персонаж ВОТ ЭТО РОЛЛ" />
        </div>
      </section>

      <section className="values" aria-label="Наши ценности">
        {values.map((v) => (
          <article className="card" key={v.title}>
            <h3>{v.title}</h3>
          </article>
        ))}
      </section>

      <footer className="footer">
        <span>ВОТ ЭТО РОЛЛ</span>
        <span>ВОЛОГДА · РОССИЯ</span>
      </footer>
    </main>
  );
}
