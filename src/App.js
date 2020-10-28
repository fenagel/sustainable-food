import './App.css';
import cow from './cow.svg';
import harvest from './harvest.svg';
import healthy from './healthy-food.svg';
import SupermarketShelf from './SupermarketShelf';
import SupermarketItem from './SupermarketItem';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <h1>Sustainable Food Systems</h1>
      </header>
      <div className="DisplayFlex">
        <SupermarketShelf />
        <div className="SupermarketItems">
          <SupermarketItem text="Food Waste - Bans on edible food disposal" img={healthy} imgclass="Healthy" />
          <SupermarketItem text="Food Waste - Promote eating ‘ugly’ fruits and vegetables" img={healthy} imgclass="Healthy" />
          <SupermarketItem text="Food Waste - Community composting" img={healthy} imgclass="Healthy" />
          <SupermarketItem text="Food Waste - Household food waste collection" img={healthy} imgclass="Healthy" />
          <SupermarketItem text="Food Waste - Better food labels" img={healthy} imgclass="Healthy" />
          <SupermarketItem text="Animal agriculture & diets - Compulsory environmental impact labelling" img={cow} imgclass="Cow" />
          <SupermarketItem text="Animal agriculture & diets - Sustainable diet campaigns" img={cow} imgclass="Cow" />
          <SupermarketItem text="Animal agriculture & diets - School and hospitals to offer more plant-based options" img={cow} imgclass="Cow" />
          <SupermarketItem text="Animal agriculture & diets - Sustainable farming" img={cow} imgclass="Cow" />
          <SupermarketItem text="Animal agriculture & diets - Research and development" img={cow} imgclass="Cow" />
          <SupermarketItem text="Localism - Invest in regional food producers and localised supply chains" img={harvest} imgclass="Harvest" />
          <SupermarketItem text="Localism - Promote eating seasonallys" img={harvest} imgclass="Harvest" />
          <SupermarketItem text="Localism - Invest in community growing projects" img={harvest} imgclass="Harvest" />
          <SupermarketItem text="Localism - Introduce educational programmes on agriculture" img={harvest} imgclass="Harvest" />
          <SupermarketItem text="Localism - Repurpose farmland" img={harvest} imgclass="Harvest" />
        </div>
      </div>
    </div>
  );
}

export default App;
