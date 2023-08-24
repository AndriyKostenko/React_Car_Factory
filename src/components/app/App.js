import AppHeader from "../appHeader/AppHeader";
import AppMajor from "../appMajor/AppMajor";
import AppPromo from "../appPromo/AppPromo";
import AppTeam from "../appTeam/AppTeam";



function App() {
  return (
    <div>
      <div className="main__bg dark__bg">
        <AppHeader/>
        <AppPromo/>
      </div>
      <AppMajor/>
      <AppTeam/>
    </div>
  );
}


export default App;
