import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'
const reactDescription = ['Fundamental','Core','Crucial'];
function getRandomInt(max){
  return Math.floor(Math.random()*(max + 1));
}
const randomIndex = getRandomInt(reactDescription.length - 1);
const item = reactDescription[randomIndex];
export default function Header() {
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {item} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }