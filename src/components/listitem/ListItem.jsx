import "./listitem.scss"
import movie from '../../assets/movie.jpg';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@material-ui/icons";

function ListItem() {
  return (
    <div className="listItem">
        <img src={movie} alt="" />
        <div className="itemInfo">
          <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownOutlined/>
          </div>
        </div>
    </div>
  )
}

export default ListItem
