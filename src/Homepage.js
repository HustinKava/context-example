import './Homepage.css';
import Count from './components/Count';
import Buttons from './components/Buttons';
import GlobalContext from './components/GlobalContext';


function Homepage() {
  return (
    <GlobalContext>
      <div>
        <Count/>
        <Buttons/>
      </div>
    </GlobalContext>
  );
}

export default Homepage;
