import { h } from 'preact';
import './App.css';
import Bubble from './Bubble';

const bubbles = 200;

const App = () => {
  return (
    <div className="App">
      <section>
        <div class="box">
          <div class="circle">
            <h2>
              Happy <br /> Christmas
            </h2>
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
