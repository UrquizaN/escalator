import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';
import headerBackground from './images/mountain.svg';
import natureImg from './images/sheets.svg';
import restaurantImg from './images/restaurant.svg';
import gameImg from './images/game.svg';
import carIm from './images/car.svg';
import treesImg from './images/trees.svg';

function App() {
  return (
    <div id="pageLanding">
      <div className="content">
        <header className="header" 
          style={{
            backgroundImage: `url(${headerBackground})`, 
            width: 1366, 
            height: 613,
            backgroundRepeat: 'no-repeat',
          }}>
          <img src={logoImg} alt="Escalator Logo"/>
          <h1>we have ideas to growth your business</h1>
          <a href="#">See Now</a>
        </header>

        <main>
          <div className="titleContainer">
            <h1>categories</h1>
            <p>discover new possibilities to help you today</p>
          </div>

          <div className="categories">
            <div className="box"
                style={{backgroundImage: `url(${natureImg})`, 
                backgroundRepeat: 'no-repeat',
                width: 370,
                height: 346,
            }}>
              <h1>nature</h1>
              <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div className="box"
                style={{backgroundImage: `url(${restaurantImg})`, 
                backgroundRepeat: 'no-repeat',
                width: 770,
                height: 346,
            }}>
              <h1>daily</h1>
              <p>Praesent tincidunt consectetur diam</p>
            </div>
          </div>

          <div className="categories">
            <div className="box"
                style={{backgroundImage: `url(${gameImg})`, 
                backgroundRepeat: 'no-repeat',
                width: 1170,
                height: 346,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
              <h1>together</h1>
              <p>Vivamus non arcu tincidunt, tempus nunc eu, scelerisque ipsum</p>
            </div>
          </div>

          <div className="categories">
            <div className="box"
                style={{backgroundImage: `url(${carIm})`, 
                backgroundRepeat: 'no-repeat',
                width: 770,
                height: 346,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                paddingRight: 32
            }}>
              <h1>analysis</h1>
              <p>Duis sollicitudin mauris vitae venenatis aliquet</p>
            </div>

            <div className="box"
                style={{backgroundImage: `url(${treesImg})`, 
                backgroundRepeat: 'no-repeat',
                width: 370,
                height: 346,
            }}>
              <h1>pictures</h1>
              <p>Quisque eu nisl purus</p>
            </div>
          </div>        
        </main>


        <footer>
          <div className="titleContainer">
            <h1>growth plans</h1>
            <p>take your business to the next level</p>
          </div>

          <div className="graphs">
            <div className="graph">
              <div className="titleGraph">
                <h1>$ 100</h1>
                <h2>100 + hours</h2>
              </div>
              <div className="dataGraph">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>

            <div className="graph">
              <div className="titleGraph">
                <h1>$ 150</h1>
                <h2>180 + hours</h2>
              </div>
              <div className="dataGraph"style={{height: 180}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>

            <div className="graph">
              <div className="titleGraph">
                <h1>$ 200</h1>
                <h2>260 + hours</h2>
              </div>
              <div className="dataGraph" style={{height: 250}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>

            <div className="graph">
              <div className="titleGraph">
                <h1>$ 2500</h1>
                <h2>380 + hours</h2>
              </div>
              <div className="dataGraph" style={{height: 300}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>

            <div className="graph">
              <div className="titleGraph">
                <h1>$ 300</h1>
                <h2>420 + hours</h2>
              </div>
              <div className="dataGraph" style={{height: 350}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>

            <div className="graph">
              <div className="titleGraph">
                <h1>$ 350</h1>
                <h2>520 + hours</h2>
              </div>
              <div className="dataGraph"  style={{height: 430}}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
