import ChefClaudeIcon from "../../assets/chef-claude-icon.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header-image" src={ChefClaudeIcon} alt="Chef Claude Logo" />
      <h1 className="header-title">Chef Claude</h1>
    </header>
  )
}

export default Header;