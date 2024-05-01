import './App.css';

import HeaderComponent from './components/HeaderComponent';
import HomeComponents from './components/HomeComponents';
import ListProductComponents from './components/ListProductComponents';
import ArtComponent from './components/ArtComponent';
import ArtDataComponent from './components/ArtDataComponent';

function App() {
  return (
    <div>
      <button onClick={() => alert("Hello!")}>CLICK ME</button>      
      <HeaderComponent />
      <ArtDataComponent /> 
      <ArtComponent />
      <ListProductComponents />
      <HomeComponents />      
    </div>
  );
}



export default App;
