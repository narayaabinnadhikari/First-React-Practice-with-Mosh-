// import ListGroup from "./components/ListGroup";

// function App(){
//     let cities = ["Dharan", "Itahari", "Kathmandu", "Pokhara"];

//     const handleSelectItem = (item: string) => {
//     console.log(item);
//     }

//   return(<div><ListGroup items={cities} heading="NepalCities" onSelectItem={handleSelectItem}/></div>
//   );
// }

// export default App;


// 
import {useState} from "react";
import Alert from './components/Alert';
import Buttons from './components/Buttons';
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <Buttons color='primary' onClick={()=> setAlertVisibility(true)}>My Button</Buttons>
    </div>
  );
}
export default App;