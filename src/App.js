import "./App.css";
import { Header } from "./components/header/header";
import { Navigation } from "./components/navigation/navigation";

const navigationLinks = [
  { name: "Компания", path: "/company" },
  { name: "Каталог", path: "/catalog" },
  { name: "Сервис", path: "/servises" },
  { name: "Акции", path: "/sales" },
  { name: "Доставка и оплата", path: "/delivery" },
  { name: "Дилерам", path: "/dillery" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation links={navigationLinks} />
    </div>
  );
}

export default App;
