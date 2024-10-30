import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import "./assets/css/style.css";

function App() {
  // jsx ->
  return (
    <section>
      <Header />
      <div className="container1">
        <Section1 />
        <Section2 />
      </div>
      <div className="container2">
        <Section3 />
      </div>
    </section>
  );
}
export default App;
