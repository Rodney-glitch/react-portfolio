import "./menu.scss";
import MenuItem from "./menu-item/MenuItem";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <MenuItem
          href={"#intro"}
          title={"Home"}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MenuItem
          href={"#about"}
          title={"About"}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MenuItem
          href={"#contact"}
          title={"Contact"}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </ul>
    </div>
  );
};

export default Menu;
