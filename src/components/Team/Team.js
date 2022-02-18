import './Team.scss'
import waves from "../../assets/waves.svg"

export function Team() {
    return <div id='team' className='parallax'>
            <img src={waves} className="wavesImg" alt="waves" />
    </div>;
}