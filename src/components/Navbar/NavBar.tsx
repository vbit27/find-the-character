import classes from './NavBar.module.scss';
import Timer from '../Timer/Timer';

export default function NavBar() {
  return (
    <div className={classes.topnav}>
      <a className={classes.active} href="#home">
        Home
      </a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <Timer />
    </div>
  );
}
