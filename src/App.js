import Contacts from "./components/contacts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>netlify test deploy test</h1>
      <a href="/#">learn react</a>
      {/* {process.env.REACT_APP_API_ENDPOINT ile axios url kısmında kullanılabilir} */}
      <Contacts />
    </div>
  );
}

export default App;
