import "./App.css";
import { Header } from "./components/header/header";
import { Navigation } from "./components/navigation/navigation";
import Hero from "./components/Hero/Hero.jsx";
import heroImgs from "./components/Hero/images.json";
import "bootstrap/dist/css/bootstrap.min.css";

const navigationLinks = [
  { id: "abcde", name: "Компания", path: "/company" },
  { id: "abcdf ", name: "Каталог", path: "/catalog" },
  { id: "abcdj", name: "Сервис", path: "/servises" },
  { id: "abcdk", name: "Акции", path: "/sales" },
  { id: "abcdl", name: "Доставка и оплата", path: "/delivery" },
  { id: "abcdm", name: "Дилерам", path: "/dillery" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation links={navigationLinks} />
      <Hero heroImgs={heroImgs} />
    </div>
  );
}

export default App;
