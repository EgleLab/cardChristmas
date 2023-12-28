import './style.scss';
import './App.css';
import noel from './noel.jpg';
import stars1 from './stars1.png';

function App() {
 

  return (
    <>
    <div>
      <div  className="cardContainer">
          <div>
              <img src= {noel} className="imgNoel" alt="Image Noel"/>
              <h1 className="greeting">Happy Holidays!!</h1>
              <p className="greeting2">May this Christmas season fill your home with warmth, light and joy. Merry Christmas and Happy New Year to you!</p>
                <div className="ratingStars">
                  <p className="ratingText"> Rate this greeting card</p>
                  <img src= {stars1} className="imgStars" alt="Image rating stars"/>
                </div>
                  <div className="line"> </div>
                  <h2 className="otherGreetings">Many other greetings</h2>
           </div>
          <div>
            <ul className="listCards">
              <li>Card 1</li>
              <li>Card 2</li>
              <li>Card 3</li>
              <li>Card 4</li>
            </ul>
          </div>
        </div>
        <div class="wrapper">
            <div class="snow layer1 a"></div>
            <div class="snow layer1"></div> 
            <div class="snow layer2 a"></div>
            <div class="snow layer2"></div>
            <div class="snow layer3 a"></div>
            <div class="snow layer3"></div>
        </div>
    </div>
    </>
  )
}

export default App
