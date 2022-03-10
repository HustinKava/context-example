import './Homepage.css';
import Count from './components/Count';
import Buttons from './components/Buttons';
import GlobalContext from './components/GlobalContext';


function Homepage() {
  return (
    <GlobalContext>
      <Count/>
      <Buttons/>
    </GlobalContext>
  );
}

export default Homepage;
