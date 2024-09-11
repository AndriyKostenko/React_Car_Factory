import AppHeader from "../appHeader/AppHeader";
import AppJoin from "../appJoin/AppJoin";
import AppMajor from "../appMajor/AppMajor";
import AppNews from "../appNews/AppNews";
import AppProduce from "../appProduce/AppProduce";
import AppPromo from "../appPromo/AppPromo";
import AppTeam from "../appTeam/AppTeam";
import AppFooter from "../appFooter/AppFooter";



function App() {
  return (
    <div>
      <AppHeader/>
      <AppPromo/>
      <AppMajor/>
      <AppTeam/>
      <AppProduce/>
      <AppNews/>
      <AppJoin/>
      <AppFooter/>
    </div>
  );
}


export default App;
