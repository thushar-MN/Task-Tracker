import Button from "./Button.js";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={!showAdd ? "green" : "red"}
        text={showAdd ? "close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "pass title here..",
};
export default Header;
