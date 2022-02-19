import './App.css';
import DateSlider from './components/layout/calendar/DateSlider';
import Option from './components/layout/Option';
import Button from './components/layout/Button';

import cigarette from './components/icons/cigarette.png';
import singleBed from './components/icons/singleBed.png';
import doubleBed from './components/icons/doubleBed.png';

function App() {
  return (
    <div className='App'>
      <DateSlider />
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Option
          default={false}
          imageOne={cigarette}
          colorOne={'white'}
          labelOne={'Smoking'}
          imageTwo={cigarette}
          labelTwo={'Non-Smoking'}
          colorTwo={'#db3428'}
          size={'8vmin'}
          name={'smokingToggle'}
          className={'smokingToggle'}
        />
        <Option
          default={true}
          imageOne={doubleBed}
          labelOne={'Double Bed'}
          imageTwo={singleBed}
          labelTwo={'Single Bed'}
          size={'12vmin'}
          name={'bedToggle'}
          className={'bedToggle'}
        />
      </div>
      <Button />
    </div>
  );
}

export default App;
