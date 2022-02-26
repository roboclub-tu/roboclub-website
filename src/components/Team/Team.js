import './Team.scss'
import waves from "../../assets/waves.svg"

export function Team() {
    return <div id='team' className='parallax'>
        <div className='wavesContainer'>
            <img src={waves} className="wavesImg" alt="waves" />
            <div className='contentContainer'>
                <h1>Нашият екип</h1>
                <p>Exercitation consequat aute et exercitation minim nostrud officia ullamco. Reprehenderit irure nisi id dolore mollit pariatur reprehenderit. Ipsum fugiat nisi commodo do enim labore aliqua cupidatat consequat in ad. Incididunt aute laborum do et veniam sunt cillum deserunt Lorem sint dolore. Do officia ut in eu ipsum ad cillum nisi laborum enim qui sit excepteur.</p>
                
            </div>
        </div>
    </div>
}