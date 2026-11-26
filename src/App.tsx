import { useEffect, useRef, useState } from "react";
import {
  MapPinIcon,
  SlidersHorizontalIcon,
  StarIcon,
  CheckIcon,
  PlusIcon,
  ListIcon,
  XIcon,
  CurrencyBtcIcon,
  CurrencyDollarIcon,
  CurrencyEthIcon,
} from "@phosphor-icons/react";
import "./App.css";
import ExchangerSections from "./components/ExchangerSections";
const faqs = [
  [
    "Что такое Achange?",
    "Сервис для поиска обменников по локации, сравнения предложений и выбора подходящего способа обмена.",
  ],
  [
    "Можно ли выбрать способ получения?",
    "Фильтры позволяют выбрать валюту, сеть и способ обмена. Доступные варианты зависят от обменника.",
  ],
  [
    "Achange сам обменивает деньги?",
    "Нет. Условия и порядок проведения сделки необходимо уточнять непосредственно у выбранного обменника.",
  ],
  [
    "Курсы на этой странице актуальные?",
    "Это демонстрация интерфейса. Предложения и курсы условные и не являются предложением обмена.",
  ],
];
export default function App() {
  const [menu, setMenu] = useState(false);
  const url = import.meta.env.VITE_APP_URL || "#demo";
  const mapScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = mapScrollRef.current;
    const map = viewport?.querySelector("img");
    if (!viewport || !map) return;

    let previousWidth = -1;
    let previousMapWidth = -1;
    const centerMap = () => {
      const width = viewport.clientWidth;
      const mapWidth = viewport.scrollWidth;
      if (width === previousWidth && mapWidth === previousMapWidth) return;
      previousWidth = width;
      previousMapWidth = mapWidth;
      viewport.scrollLeft = Math.max(0, (mapWidth - width) / 2);
    };

    const observer = new ResizeObserver(centerMap);
    observer.observe(viewport);
    observer.observe(map);
    centerMap();
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="wrap">
        <a className="brand" href="#">
          <img
            className="brand-logo"
            src="/logo-mark.svg"
            alt=""
            width="36"
            height="36"
          />
          achange<span>.</span>
        </a>
        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
        >
          {menu ? (
            <XIcon size={20} aria-hidden="true" />
          ) : (
            <ListIcon size={20} aria-hidden="true" />
          )}{" "}
          Меню
        </button>
        <nav className={menu ? "open" : ""} onClick={() => setMenu(false)}>
          <a href="#features">Возможности</a>
          <a href="#how">Как это работает</a>
          <a href="#cities">География</a>
          <a href="#exchangers">Обменникам</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button secondary" href={url}>
          Попробовать Achange
        </a>
      </header>
      <main>
        <section className="hero hero-nova wrap">
          <div className="hero-copy">
            <h1>
              Ваш обмен.
              <br />
              <em>В любой точке мира.</em>
            </h1>
            <p>
              Находите обменники, сравнивайте условия
              <br />и выбирайте подходящий вариант — в одном месте.
            </p>
            <div className="actions">
              <a className="button" href={url}>
                Посмотреть предложения
              </a>
              <a href="#how">Как это работает</a>
            </div>
          </div>
          <div className="visual" id="demo">
            <div className="hero-glow" aria-hidden="true" />
            <aside className="preview-phone location-phone">
              <img src="/left.png" alt="" />
            </aside>
            <aside className="preview-phone favorites-phone">
              <img src="/right.png" alt="" />
            </aside>
            <div className="panel">
              <img src="/center.png" alt="" />
            </div>
          </div>
        </section>
        <div className="strip wrap">
          <strong className="currency-item">
            <svg
              className="currency-tether-icon"
              viewBox="0 0 339.43 295.27"
              aria-hidden="true"
            >
              <path
                d="M62.15 1.45.26 131.45a2.52 2.52 0 0 0 .54 2.94l167.15 160.17a2.55 2.55 0 0 0 3.53 0L338.63 134.4a2.52 2.52 0 0 0 .54-2.94l-61.89-130A2.5 2.5 0 0 0 275 0H64.45a2.5 2.5 0 0 0-2.3 1.45Z"
                fill="currentColor"
              />
              <path
                d="M191.19 144.8c-1.2.09-7.4.46-21.23.46-11 0-18.81-.33-21.55-.46-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25 74.24-18.15v28.91c2.78.2 10.74.67 21.74.67 13.2 0 19.81-.55 21-.66v-28.9c42.42 1.89 74.08 9.29 74.08 18.13s-31.65 16.24-74.08 18.12ZM191.19 105.55V79.68h59.2V40.23H89.21v39.45h59.19v25.86c-48.11 2.21-84.29 11.74-84.29 23.16s36.18 20.94 84.29 23.16v82.9h42.78v-82.93c48-2.21 84.12-11.73 84.12-23.14s-36.09-20.93-84.12-23.15Z"
                fill="#121212"
              />
            </svg>
            USDT
          </strong>
          <strong className="currency-item">
            <CurrencyBtcIcon size={22} weight="fill" aria-hidden="true" />
            BTC
          </strong>
          <strong className="currency-item">
            <CurrencyEthIcon size={22} weight="fill" aria-hidden="true" />
            ETH
          </strong>
          <strong className="currency-item">
            <CurrencyDollarIcon size={22} weight="fill" aria-hidden="true" />
            USD
          </strong>
          <strong className="currency-item">
            <span className="currency-idr-mark" aria-hidden="true">
              Rp
            </span>
            IDR
          </strong>
        </div>
        <section className="section wrap" id="features">
          <div className="heading">
            <h2>
              Обмен начинается
              <br />с удобного выбора.
            </h2>
            <p>
              Всё, что нужно, чтобы разобраться в предложениях
              <br />и найти подходящий обменник.
            </p>
          </div>
          <div className="features">
            <article className="feature wide">
              <div>
                <span className="symbol">
                  <MapPinIcon size={32} weight="duotone" aria-hidden="true" />
                </span>
                <h3>
                  Рядом с вами.
                  <br />
                  Куда бы вы ни отправились.
                </h3>
                <p>
                  Выберите страну и город, чтобы смотреть предложения в нужной
                  локации.
                </p>
              </div>
              <div className="map">
                <span>Пхукет</span>
                <span>Бангкок</span>
                <span>Бали</span>
                <b>
                  <MapPinIcon size={42} weight="duotone" aria-hidden="true" />
                </b>
              </div>
            </article>
            <article className="feature">
              <span className="symbol">
                <SlidersHorizontalIcon
                  size={32}
                  weight="duotone"
                  aria-hidden="true"
                />
              </span>
              <h3>
                Ваши условия.
                <br />
                Ваши фильтры.
              </h3>
              <p>
                Валюта, сеть и способ получения — настройте поиск под свои
                условия.
              </p>
              <div className="pills">
                <span>USDT</span>
                <span>Курьер</span>
                <span>Наличные</span>
              </div>
            </article>
            <article className="feature">
              <span className="symbol">
                <StarIcon size={32} weight="duotone" aria-hidden="true" />
              </span>
              <h3>
                Хорошие варианты
                <br />
                не теряются.
              </h3>
              <p>
                Добавляйте обменники в избранное, чтобы возвращаться к ним без
                нового поиска.
              </p>
              <div className="favorite">
                <StarIcon size={20} weight="fill" aria-hidden="true" /> Ваше
                избранное <span>Всегда под рукой</span>
              </div>
            </article>
          </div>
        </section>
        <section className="process" id="how">
          <div className="wrap">
            <h2>
              От поиска до выбора.
              <br />
              <em>Три понятных шага.</em>
            </h2>
            <div className="steps">
              {[
                [
                  "⌖",
                  "Укажите город",
                  "Выберите локацию, в которой планируете обмен.",
                ],
                [
                  "≋",
                  "Сравните условия",
                  "Настройте валюту и способ получения. Посмотрите доступные варианты.",
                ],
                [
                  "✓",
                  "Выберите обменник",
                  "Откройте карточку и уточните детали обмена напрямую.",
                ],
              ].map(([icon, title, text]) => (
                <article key={title}>
                  <span>
                    {icon === "⌖" ? (
                      <MapPinIcon size={22} aria-hidden="true" />
                    ) : icon === "≋" ? (
                      <SlidersHorizontalIcon size={22} aria-hidden="true" />
                    ) : (
                      <CheckIcon size={22} aria-hidden="true" />
                    )}
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section wrap" id="cities">
          <div className="heading horizontal">
            <div>
              <h2>
                Мир меняется.
                <br />
                Вы находите своё.
              </h2>
            </div>
            <p>
              Индия, Китай, Индонезия, Малайзия,
              <br />
              Филиппины и Таиланд.
            </p>
          </div>
          <div className="cities-map">
            <div
              className="cities-map-scroll"
              ref={mapScrollRef}
              role="region"
              aria-label="Карта локаций с горизонтальной прокруткой"
              tabIndex={0}
            >
              <img
                className="cities-map-image"
                src="/images/Map_world_dark_soon.svg"
                alt="Карта с выделенными странами: Индия, Китай, Индонезия, Малайзия, Филиппины и Таиланд"
                loading="lazy"
              />
            </div>
            <p className="cities-map-hint">Листайте карту влево и вправо</p>
            <ul className="cities-map-legend" aria-label="Обозначения на карте">
              <li>
                <img
                  src="/images/location-active.svg"
                  width="20"
                  height="24"
                  alt=""
                />
                <span>Мы уже работаем</span>
              </li>
              <li>
                <img
                  src="/images/location-soon.svg"
                  width="20"
                  height="24"
                  alt=""
                />
                <span>Скоро запускаемся</span>
              </li>
            </ul>
          </div>
        </section>
        <ExchangerSections />
        <section className="faq-section wrap" id="faq">
          <div>
            <h2>
              Давайте
              <br />
              разберёмся.
            </h2>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>
                    <PlusIcon size={22} aria-hidden="true" />
                  </span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        {/* <section className="cta wrap">
          <h2>
            Где бы вы ни были.
            <br />
            Начните с выбора.
          </h2>
          <p>Нужный город. Подходящая валюта. Всё в одном месте.</p>
          <a className="button" href={url}>
            Попробовать Achange
          </a>
        </section> */}
      </main>
      <footer className="wrap">
        <a className="brand" href="#">
          <img
            className="brand-logo"
            src="/logo-mark.svg"
            alt=""
            width="36"
            height="36"
          />
          achange.
        </a>
        <span>Находите. Сравнивайте. Выбирайте.</span>
        <small>
          © {new Date().getFullYear()} Achange ·{" "}
          <a href="/images/credits.html" target="_blank" rel="noreferrer">
            Авторы фото
          </a>
        </small>
      </footer>
    </>
  );
}
