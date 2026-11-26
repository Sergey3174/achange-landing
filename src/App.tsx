import { useState } from "react";
import {
  MapPinIcon,
  SlidersHorizontalIcon,
  StarIcon,
  CheckIcon,
  PlusIcon,
  ListIcon,
  XIcon,
  CellSignalFullIcon,
  BatteryFullIcon,
  CurrencyBtcIcon,
  CurrencyDollarIcon,
  CurrencyEthIcon,
} from "@phosphor-icons/react";
import "./App.css";
const cities = [
  {
    name: "Пхукет",
    country: "Таиланд",
    code: "HKT",
    image: "phuket.jpg",
    currency: "USD",
    rate: 1,
  },
  {
    name: "Бангкок",
    country: "Таиланд",
    code: "BKK",
    image: "bangkok.jpg",
    currency: "USD",
    rate: 1,
  },
  {
    name: "Джакарта",
    country: "Индонезия",
    code: "JKT",
    image: "jakarta.jpg",
    currency: "IDR",
    rate: 16000,
  },
  {
    name: "Бали",
    country: "Индонезия",
    code: "BALI",
    image: "bali.jpg",
    currency: "IDR",
    rate: 16000,
  },
];
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
  const [city, setCity] = useState(0),
    [amount, setAmount] = useState("1000"),
    [method, setMethod] = useState("Наличные"),
    [saved, setSaved] = useState<number[]>([]),
    [menu, setMenu] = useState(false);
  const c = cities[city],
    url = import.meta.env.VITE_APP_URL || "#demo";
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
              <div className="phone-status">
                9:41{" "}
                <span>
                  <CellSignalFullIcon
                    size={12}
                    weight="fill"
                    aria-hidden="true"
                  />
                  <BatteryFullIcon size={15} weight="fill" aria-hidden="true" />
                </span>
              </div>
              <span className="screen-kicker">ВАШ МИР — В ОДНОМ МЕСТЕ</span>
              <h3>Куда отправимся?</h3>
              <p>Выберите город для обмена</p>
              <div className="phone-search">
                <MapPinIcon size={18} aria-hidden="true" />{" "}
                <span>Выберите локацию</span>
              </div>
              {cities.slice(0, 3).map((x, i) => (
                <button
                  key={x.name}
                  className="phone-city"
                  onClick={() => setCity(i)}
                >
                  <img src={"/images/" + x.image} alt="" />
                  <span>
                    <strong>{x.name}</strong>
                    <small>{x.country}</small>
                  </span>
                  <span className="city-check">
                    {city === i ? (
                      <CheckIcon size={16} aria-hidden="true" />
                    ) : (
                      <PlusIcon size={16} aria-hidden="true" />
                    )}
                  </span>
                </button>
              ))}
              <div className="phone-bottom">
                <span>
                  <MapPinIcon size={13} aria-hidden="true" /> Локации
                </span>
                <span>
                  <StarIcon size={13} aria-hidden="true" /> Избранное
                </span>
              </div>
            </aside>
            <aside className="preview-phone favorites-phone">
              <div className="phone-status">
                9:41{" "}
                <span>
                  <CellSignalFullIcon
                    size={12}
                    weight="fill"
                    aria-hidden="true"
                  />
                  <BatteryFullIcon size={15} weight="fill" aria-hidden="true" />
                </span>
              </div>
              <span className="screen-kicker">БЛИЖЕ К ВАШИМ ПЛАНАМ</span>
              <h3>Всё под рукой.</h3>
              <p>Сохраняйте подходящие варианты</p>
              <div className="favorite-hero-star">
                <StarIcon size={100} weight="duotone" aria-hidden="true" />
              </div>
              <div className="favorite-sample">
                <span className="avatar">N</span>
                <div>
                  <strong>North Exchange</strong>
                  <small>Пример обменника</small>
                </div>
                <b>
                  <StarIcon size={17} weight="fill" aria-hidden="true" />
                </b>
              </div>
              <div className="phone-tags">
                <span>USDT</span>
                <span>Наличные</span>
                <span>{c.name}</span>
              </div>
              <div className="phone-bottom">
                <span>
                  <MapPinIcon size={13} aria-hidden="true" /> Локации
                </span>
                <span>
                  <StarIcon size={13} aria-hidden="true" /> Избранное
                </span>
              </div>
            </aside>
            <div className="panel">
              <div className="phone-status">
                9:41{" "}
                <span>
                  <CellSignalFullIcon
                    size={12}
                    weight="fill"
                    aria-hidden="true"
                  />
                  <BatteryFullIcon size={15} weight="fill" aria-hidden="true" />
                </span>
              </div>
              <div className="panel-head">
                <strong className="panel-brand">
                  <img src="/logo-mark.svg" alt="" width="26" height="26" />
                  achange<span>.</span>
                </strong>
                <small>Демо</small>
              </div>
              <div className="location">
                <MapPinIcon size={20} aria-hidden="true" />
                <select
                  aria-label="Город"
                  value={city}
                  onChange={(e) => setCity(+e.target.value)}
                >
                  {cities.map((x, i) => (
                    <option key={x.name} value={i}>
                      {x.name}, {x.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="amount">
                <label>
                  Хочу обменять
                  <input
                    type="number"
                    min="0"
                    aria-label="Сумма в USDT"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </label>
                <strong>
                  <i>₮</i> USDT
                </strong>
              </div>
              <div className="tabs">
                {["Наличные", "На карту"].map((x) => (
                  <button
                    key={x}
                    className={method === x ? "active" : ""}
                    onClick={() => setMethod(x)}
                  >
                    {x}
                  </button>
                ))}
              </div>
              <div className="offer-heading">
                Примеры предложений <span>{c.currency}</span>
              </div>
              {["North Exchange", "Exchange Point", "World Change"].map(
                (name, i) => (
                  <div className="offer" key={name}>
                    <span className={"avatar av" + i}>
                      {["N", "EX", "W"][i]}
                    </span>
                    <div>
                      <strong>{name}</strong>
                      <small>
                        {method} · {c.name}
                      </small>
                    </div>
                    <div className="value">
                      <strong>
                        {(
                          Math.max(0, Number(amount) || 0) *
                          c.rate *
                          (1 - i * 0.008)
                        ).toLocaleString("ru-RU", { maximumFractionDigits: 2 })}
                      </strong>
                      <small>{c.currency}</small>
                    </div>
                    <button
                      className={"star " + (saved.includes(i) ? "saved" : "")}
                      aria-label={"Избранное: " + name}
                      aria-pressed={saved.includes(i)}
                      onClick={() =>
                        setSaved(
                          saved.includes(i)
                            ? saved.filter((x) => x !== i)
                            : [...saved, i],
                        )
                      }
                    >
                      <StarIcon
                        size={21}
                        weight={saved.includes(i) ? "fill" : "regular"}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                ),
              )}
              <p className="disclaimer">
                Условные курсы. Не является предложением обмена.
              </p>
            </div>
          </div>
        </section>
        <div className="strip wrap">
          <span>
            Разные валюты.
            <br />
            <b>Один Achange.</b>
          </span>
          <strong className="currency-item">
            <svg className="currency-tether-icon" viewBox="0 0 339.43 295.27" aria-hidden="true">
              <path d="M62.15 1.45.26 131.45a2.52 2.52 0 0 0 .54 2.94l167.15 160.17a2.55 2.55 0 0 0 3.53 0L338.63 134.4a2.52 2.52 0 0 0 .54-2.94l-61.89-130A2.5 2.5 0 0 0 275 0H64.45a2.5 2.5 0 0 0-2.3 1.45Z" fill="currentColor" />
              <path d="M191.19 144.8c-1.2.09-7.4.46-21.23.46-11 0-18.81-.33-21.55-.46-42.51-1.87-74.24-9.27-74.24-18.13s31.73-16.25 74.24-18.15v28.91c2.78.2 10.74.67 21.74.67 13.2 0 19.81-.55 21-.66v-28.9c42.42 1.89 74.08 9.29 74.08 18.13s-31.65 16.24-74.08 18.12ZM191.19 105.55V79.68h59.2V40.23H89.21v39.45h59.19v25.86c-48.11 2.21-84.29 11.74-84.29 23.16s36.18 20.94 84.29 23.16v82.9h42.78v-82.93c48-2.21 84.12-11.73 84.12-23.14s-36.09-20.93-84.12-23.15Z" fill="#121212" />
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
            <span className="currency-idr-mark" aria-hidden="true">Rp</span>
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
                Валюта, сеть и способ получения — настройте поиск под свою
                задачу.
              </p>
              <div className="pills">
                <span>USDT</span>
                <span>TRC-20</span>
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
              Познакомьтесь с выбором локации
              <br />
              на примере популярных городов.
            </p>
          </div>
          <div className="cities">
            {cities.map((x, i) => (
              <button
                className="city"
                key={x.name}
                onClick={() => {
                  setCity(i);
                  document
                    .getElementById("demo")
                    ?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                <img src={"/images/" + x.image} alt={x.name} loading="lazy" />
                <span>
                  <small>{x.country}</small>
                  <strong>{x.name}</strong>
                  <small>Посмотреть демо</small>
                </span>
              </button>
            ))}
          </div>
        </section>
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
        <section className="cta wrap">
          <h2>
            Где бы вы ни были.
            <br />
            Начните с выбора.
          </h2>
          <p>Нужный город. Подходящая валюта. Всё в одном месте.</p>
          <a className="button" href={url}>
            Попробовать Achange
          </a>
        </section>
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
