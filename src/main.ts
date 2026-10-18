import "./style.css";
import "./task-1";
import "./task-2";
import "./task-3";
import "./task-4";
import "./task-5";
import "./task-6";
import "./task-7";
import "./task-8";

const tasks = [
  [
    "Скалярні значення",
    "Явна типізація рядка, числа та булевого значення.",
    "string · number · boolean",
  ],
  [
    "Інтерфейси",
    "Опис товару з незмінним id та необов’язковим описом.",
    "interface · readonly",
  ],
  [
    "Масиви",
    "Типізація масивів імен, рейтингів і товарів.",
    "string[] · number[] · Product[]",
  ],
  [
    "Функції",
    "Параметри функції та необов’язкова електронна адреса.",
    "email? · void",
  ],
  [
    "Об’єднання типів",
    "Три дозволені стани: loading, success та error.",
    "Union Type",
  ],
  [
    "Узагальнені типи",
    "Перший елемент масиву зі збереженням його типу.",
    "<T> · T[]",
  ],
  [
    "Проміси",
    "Повідомлення Hello from TS із затримкою в одну секунду.",
    "Promise<string>",
  ],
  [
    "HTTP-запити",
    "Завантаження постів із JSONPlaceholder за допомогою Axios.",
    "axios.get<Post[]>",
  ],
];

const app = document.querySelector<HTMLDivElement>("#app")!;
app.innerHTML = `
  <header>
    <p class="eyebrow">ДОМАШНЯ РОБОТА / 01</p>
    <h1>Основи TypeScript</h1>
    <p>Вісім завдань: від простих типів до асинхронних запитів.</p>
  </header>
  <main>
    <aside class="notice" aria-label="Як переглянути результати">
      <strong>Результати — у консолі браузера</strong>
      <p>Відкрий інструменти розробника .</p>
    </aside>
    <section class="tasks" aria-label="Завдання"></section>
  </main>
  <footer>01-ts-basics · TypeScript + Vite</footer>
`;

const list = app.querySelector<HTMLElement>(".tasks")!;
tasks.forEach(([title, description, types], index) => {
  const card = document.createElement("article");
  const number = document.createElement("span");
  number.className = "task-number";
  number.textContent = `Завдання ${String(index + 1).padStart(2, "0")}`;
  const heading = document.createElement("h2");
  heading.textContent = title!;
  const text = document.createElement("p");
  text.textContent = description!;
  const code = document.createElement("code");
  code.textContent = types!;
  card.append(number, heading, text, code);
  list.append(card);
});
