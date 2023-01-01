
import Featued from "../components/featured/Featued"
import NavBar from "../components/navbar/NavBar"
import List from "../components/list/List"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <NavBar/>
      <Featued />
      <List />  
      <List /> 
      <List />  
      <List />  
    </div>
  )
}

export default Home
