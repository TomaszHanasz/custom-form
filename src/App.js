import SignUpForm from "./containers/signUpForm/SignUpForm";
import SignUpFormCopy from "./containers/signUpForm/SignUpFormCopy";
import "./App.css";
import SignUpFormB from "./containers/signUpForm/SignUpFormB";
import CarDataForm from "./containers/signUpForm/CarDataForm";

function App() {
  return (
    <div className="app-container">
      <SignUpForm />
      <SignUpFormCopy />
      <SignUpFormB />
      <CarDataForm />
    </div>
  );
}

export default App;
