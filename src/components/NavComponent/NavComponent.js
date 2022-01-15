import './NavComponent.style.css';

function NavComponent(props) {
  return <span className='nav'>{props.content}</span>;
}

export default NavComponent;
