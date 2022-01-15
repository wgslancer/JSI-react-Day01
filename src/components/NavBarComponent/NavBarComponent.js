import NavComponent from '../NavComponent/NavComponent';
import './NavBarComponent.style.css';

// function sum(a, b) {
//   return a + b;
// }
function NavBarComponent() {
  return (
    <div className='navbar'>
      <NavComponent content='Home' />
      <NavComponent content='About' />
      <NavComponent content='Contact' />
      <NavComponent content='Shop' />
    </div>
  );
}

export default NavBarComponent;
