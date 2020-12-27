import { h } from 'preact';
import './App.css';
import Bubble from './Bubble';
import Title from './Title';

const bubbles = 200;

const App = () => {
  return (
    <div className="App">
      <section>
        <div class="box">
          <div class="circle">
            <Title />
          </div>
        </div>
        {Array.from(Array(bubbles).keys()).map(() => (
          <Bubble />
        ))}
      </section>
    </div>
  );
};

export default App;
