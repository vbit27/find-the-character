import Timer from '../Timer/Timer';
import jak from '../../assets/jak.svg';
import yuna from '../../assets/yuna.svg';
import ratchet from '../../assets/ratchet.svg';
import './NavBar.scss';

const NavBar: React.FC<NavBarProps> = ({ gameStart, isGameOver }) => {
  return (
    <>
      <nav className="nav">
        <div className="nav__img__container">
          <img src={jak} alt="jak" className="nav__img" />
          <img src={yuna} alt="yuna" className="nav__img" />
          <img src={ratchet} alt="ratchet" className="nav__img" />
        </div>
        <Timer gameStart={gameStart} isGameOver={isGameOver} />
      </nav>
    </>
  );
};

interface NavBarProps {
  isGameOver: boolean;
  gameStart: boolean;
}

export default NavBar;
