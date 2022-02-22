import "./menuItem.scss";

const MenuItem = ({ menuOpen, setMenuOpen, href, title }) => {
  return (
    <li>
      <a href={href} onClick={() => setMenuOpen(!menuOpen)}>
        {title}
      </a>
    </li>
  );
};

export default MenuItem;
