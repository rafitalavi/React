import logo from '../assets/logo.png';
import { styled } from 'styled-components'
// import classes from './Header.module.css';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16 ">
      <img src={logo} className="mb-8 w-44 h-44 object-contain" alt="A canvas" />
      <h1  className="md:text-xl text-4xl font-semibold text-center uppercase text-amber-800 font-title">ReactArt</h1>
      { <p /* className={classes.paragraph} */ className="text-stone-500" >A community of artists and art-lovers.</p> }
    </header>
  );
}
