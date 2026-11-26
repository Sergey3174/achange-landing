import { useState } from "react";
import {
  BellRingingIcon,
  TelegramLogoIcon,
  SlidersHorizontalIcon,
  CodeIcon,
  UsersThreeIcon,
  CheckIcon,
} from "@phosphor-icons/react";
import tariffData from "../data/exchanger-tariffs.json";
import "./ExchangerSections.css";

const featureNames: Record<string, string> = {
  countries: "Страны",
  cities: "Города",
  top_search: "Выделение вверху поиска",
  city_manager: "Менеджер по странам и городам",
  priority_support: "Приоритетная поддержка",
  api_integration: "API-интеграция",
  client_feedback: "Управление отзывами",
};
const planCopy: Record<string, string> = {
  Starter: "Для начала работы в одной стране.",
  Silver: "Для расширения географии и работы с клиентами.",
  Gold: "Для масштабирования и интеграции со своими системами.",
};
const matrix = tariffData.matrix as Record<
  string,
  { tariff_id: number; value: string }[]
>;

export default function ExchangerSections() {
  const [annual, setAnnual] = useState(false);
  return (
    <>
      <section
        className="business-section wrap"
        id="exchangers"
        aria-labelledby="business-title"
      >
        <div className="business-heading">
          <div>
            <span className="business-kicker">Для обменников</span>
            <h2 id="business-title">
              Управляйте обменником.
              <br />
              От заявки до курса.
            </h2>
          </div>
          <p>
            Получайте уведомления, настраивайте условия обмена и подключайте
            команду к мониторингу.
          </p>
        </div>
        <div className="business-grid">
          <article className="business-card business-notifications">
            <span className="business-icon">
              <BellRingingIcon size={30} weight="duotone" aria-hidden="true" />
            </span>
            <h3>Уведомления в Telegram</h3>
            <p>
              Получайте уведомления об обменах в Telegram, чтобы отслеживать
              обращения в привычном канале.
            </p>
            <div
              className="business-preview notification-preview"
              aria-label="Пример уведомления"
            >
              <div className="notification-brand">
                <TelegramLogoIcon size={26} weight="fill" aria-hidden="true" />
                <strong>Achange</strong>
                <span>Пример</span>
              </div>
              <strong>Новая заявка на обмен</strong>
              <div className="notification-fields">
                <span>
                  Локация<b>Индонезия · Бали</b>
                </span>
                <span>
                  Способ получения<b>Курьер</b>
                </span>
              </div>
            </div>
          </article>
          <article className="business-card">
            <span className="business-icon">
              <SlidersHorizontalIcon
                size={30}
                weight="duotone"
                aria-hidden="true"
              />
            </span>
            <h3>Курсы под каждую локацию</h3>
            <p>
              Управляйте курсами по странам, городам и способам доставки.
              Задавайте условия для нужного направления.
            </p>
            <div
              className="business-preview rate-preview"
              aria-label="Уровни настройки курсов"
            >
              <div>
                <span>Страна</span>
                <strong>Индонезия</strong>
              </div>
              <div>
                <span>Город</span>
                <strong>Бали</strong>
              </div>
              <div>
                <span>Способ</span>
                <strong>Курьер</strong>
              </div>
              <div className="rate-pair">
                <span>Валютная пара</span>
                <strong>USDT / IDR</strong>
              </div>
            </div>
          </article>
          <article className="business-card business-compact">
            <span className="business-icon">
              <CodeIcon size={30} weight="duotone" aria-hidden="true" />
            </span>
            <div>
              <div className="business-title-row">
                <h3>API для ваших систем</h3>
                <span className="plan-tag">Gold</span>
              </div>
              <p>
                Интегрируйте Achange со своими сервисами через API и
                выстраивайте работу в своей инфраструктуре.
              </p>
            </div>
          </article>
          <article className="business-card business-compact">
            <span className="business-icon">
              <UsersThreeIcon size={30} weight="duotone" aria-hidden="true" />
            </span>
            <div>
              <h3>Мониторинг вместе с командой</h3>
              <p>
                Добавляйте сотрудников для мониторинга работы обменника.
                Подключайте команду по мере роста сервиса.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section
        className="tariffs-section wrap"
        id="tariffs"
        aria-labelledby="tariffs-title"
      >
        <div className="business-heading">
          <div>
            <span className="business-kicker">Тарифы для обменников</span>
            <h2 id="tariffs-title">
              Возможности
              <br />
              под ваш масштаб.
            </h2>
          </div>
          <div className="billing-control">
            <span id="billing-label">Период оплаты</span>
            <div
              className="billing-toggle"
              role="group"
              aria-labelledby="billing-label"
            >
              <button
                type="button"
                aria-pressed={!annual}
                onClick={() => setAnnual(false)}
              >
                Месяц
              </button>
              <button
                type="button"
                aria-pressed={annual}
                onClick={() => setAnnual(true)}
              >
                Год <span>−25%</span>
              </button>
            </div>
          </div>
        </div>
        <div className="plan-grid">
          {tariffData.tariffs.map((plan) => {
            const periods = tariffData.periods.find(
              (item) => item.tariff_id === plan.id,
            )?.periods;
            const period = periods?.find(
              (item) => item.duration_unit === (annual ? "year" : "month"),
            );
            return (
              <article
                className={
                  "tariff-card" + (plan.name === "Gold" ? " tariff-gold" : "")
                }
                key={plan.id}
              >
                <div className="tariff-name">
                  <h3>{plan.name}</h3>
                  {plan.name === "Gold" && (
                    <span className="plan-tag">Все возможности</span>
                  )}
                </div>
                <p>{planCopy[plan.name]}</p>
                <div className="tariff-price" aria-live="polite">
                  {period ? (
                    <>
                      <strong>{period.unit_price}</strong>
                      <span>USDT / {annual ? "год" : "месяц"}</span>
                    </>
                  ) : (
                    <strong className="starter-label">Базовый тариф</strong>
                  )}
                </div>
                <p className="billing-note">
                  {period
                    ? annual
                      ? `Оплата за год · ${(period.unit_price / 12).toLocaleString("ru-RU")} USDT в месяц`
                      : "Оплата за один месяц"
                    : "Стоимость уточняйте при подключении"}
                </p>
                <ul className="tariff-features">
                  {tariffData.features
                    .filter((feature) => {
                      const value = matrix[feature.option_key]?.find(
                        (item) => item.tariff_id === plan.id,
                      )?.value;
                      return value !== "0" && value !== undefined;
                    })
                    .map((feature) => {
                      const value = matrix[feature.option_key].find(
                        (item) => item.tariff_id === plan.id,
                      )!.value;
                      const label =
                        feature.value_type === "integer"
                          ? feature.option_key === "countries"
                            ? value === "-1"
                              ? "Без лимита стран"
                              : `${value} ${value === "1" ? "страна" : "страны"}`
                            : value === "-1"
                              ? "Без лимита городов"
                              : `${value} города`
                          : featureNames[feature.option_key];
                      return (
                        <li key={feature.option_key}>
                          <CheckIcon size={18} aria-hidden="true" />
                          <span>{label}</span>
                        </li>
                      );
                    })}
                </ul>
              </article>
            );
          })}
        </div>
        {/* <details className="tariff-comparison">
          <summary>
            Сравнить все возможности<span aria-hidden="true">+</span>
          </summary>
          <div
            className="comparison-scroll"
            role="region"
            aria-label="Сравнение тарифов"
            tabIndex={0}
          >
            <table>
              <caption>Состав тарифов Starter, Silver и Gold</caption>
              <thead>
                <tr>
                  <th scope="col">Возможность</th>
                  {tariffData.tariffs.map((plan) => (
                    <th scope="col" key={plan.id}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tariffData.features.map((feature) => (
                  <tr key={feature.option_key}>
                    <th scope="row">{featureNames[feature.option_key]}</th>
                    {tariffData.tariffs.map((plan) => {
                      const value = matrix[feature.option_key].find(
                        (item) => item.tariff_id === plan.id,
                      )?.value;
                      return (
                        <td key={plan.id}>
                          {feature.value_type === "integer" ? (
                            value === "-1" ? (
                              "Без лимита"
                            ) : (
                              value
                            )
                          ) : value === "1" ? (
                            <>
                              <CheckIcon size={18} aria-hidden="true" />
                              <span className="visually-hidden">Включено</span>
                            </>
                          ) : (
                            <>
                              <MinusIcon size={18} aria-hidden="true" />
                              <span className="visually-hidden">
                                Не включено
                              </span>
                            </>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details> */}
        <p className="tariff-footnote">
          В Silver и Gold менеджер получает обращения из выбранных городов.
          Приоритетная поддержка в Gold включает вечера и выходные.
        </p>
      </section>
    </>
  );
}
