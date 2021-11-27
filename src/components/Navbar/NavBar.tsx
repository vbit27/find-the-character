import Timer from '../Timer/Timer';
import jak from '../../assets/jak.svg';
import yuna from '../../assets/yuna.svg';
import ratchet from '../../assets/ratchet.svg';
import './NavBar.scss';

export default function NavBar() {
  return (
    <>
      <nav className="nav">
        <div className="nav__img__container">
          <img src={jak} alt="jak" className="nav__img" />
          <img src={yuna} alt="yuna" className="nav__img" />
          <img src={ratchet} alt="ratchet" className="nav__img" />
        </div>
        <button>Restart</button>
      </nav>
    </>
  );
}
