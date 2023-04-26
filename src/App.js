import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row mx-auto" style={{ width: "60%" }}>
          <Search />
          <div class="code">
            <a
              href="https://github.com/SamanehZkb/Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code{" "}
            </a>
            by Samaneh Zkb
          </div>
        </div>
      </div>
    </div>
  );
}
