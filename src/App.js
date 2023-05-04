import "./styles.css";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="row mx-auto" style={{ width: "60%" }}>
          <Search city="Tehran" />
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
