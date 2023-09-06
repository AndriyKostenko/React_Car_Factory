import AppHeader from "../appHeader/AppHeader";
import AppMajor from "../appMajor/AppMajor";
import AppNews from "../appNews/AppNews";
import AppProduce from "../appProduce/AppProduce";
import AppPromo from "../appPromo/AppPromo";
import AppTeam from "../appTeam/AppTeam";



function App() {
  return (
    <div>
      <AppHeader/>
      <AppPromo/>
      <AppMajor/>
      <AppTeam/>
      <AppProduce/>
      <AppNews/>
    </div>
  );
}


export default App;
