import "./App.css";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthContext";
import Main from "./components/main/Main";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <div className="container">
          <Header />
          <Main />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
