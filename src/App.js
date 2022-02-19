import './App.css';
import DateSlider from './components/layout/calendar/DateSlider';
import Option from './components/layout/Option';

import cigarette from './components/icons/cigarette.png';

function App() {
  return (
    <div className='App'>
      <DateSlider />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Option
          imageOne={cigarette}
          labelOne={'Non-Smoking'}
          imageTwo={cigarette}
          labelTwo={'Smoking'}
          colorOne={'#db3428'}
          colorTwo={'white'}
          size={'8vmin'}
          name={'smokingToggle'}
          className={'smokingToggle'}
        />
      </div>
    </div>
  );
}

export default App;
