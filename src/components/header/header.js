import logo from "../../img/logo.svg";
import phone from "../../img/phone.svg";
import cart from "../../img/cart.svg";
import people from "../../img/people.svg";
import search from "../../img/search.svg";
import classes from "./header.module.scss";

export const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>ВСЁ ДЛЯ УСПЕШНОГО ВЕТЕРИНАРНОГО БИЗНЕСА</h1>
      <ul className={classes.list}>
        <li>
          <img src={phone} alt="phone" />
          <a href="tel:+74991300525">+7 (499) 130-05-25</a>
        </li>
        <li>
          <a href="/">Заказать звонок</a>
        </li>
        <li>
          <a href="/"> info@diakonvet.ru</a>
        </li>
      </ul>
      <button>
        <img src={people} alt="people" />
      </button>
      <button>
        <img src={cart} alt="cart" />
      </button>
      <button>
        <img src={search} alt="search" />
      </button>
    </header>
  );
};
