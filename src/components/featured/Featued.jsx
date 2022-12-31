import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import title from '../../assets/title.png';
import './featured.scss';

const Featued = (props) => {
  return (
    <div className='featured'>
        {
            props.type && (
                <div className="category">
                    <span>{props.type === "movie" ? "Movies": "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )
        }
            <img src="https://images.unsplash.com/photo-1664575195621-a5f347e67554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
             
             alt="" />
    
    <div className="info">
        <img src={title} alt="" />
        <span className='desc' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Est dolorum corporis ea laudantium eveniet vel hic autem a nesciunt.
             Reiciendis non accusantium quam molestias cumque porro impedit nesciunt ad asperiores!
        </span>
        <div className="buttons">
            <button className='play'>
                <PlayArrow />
                <span>play</span>
            </button>
            <button className='more'>
                <InfoOutlined />
                <span>Info</span>
            </button>
        </div>
    </div>
    </div>
  )
}

export default Featued
