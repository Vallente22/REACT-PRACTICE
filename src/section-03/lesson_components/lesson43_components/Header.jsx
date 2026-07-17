import avatar from "../assets/user2.png"

const Header = (props) => {
  return (
    <header>
      <img src={avatar} />
      <p>{props.username}</p>
    </header>
  )
}

export default Header;