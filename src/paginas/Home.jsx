import {Link} from 'react-router-dom'

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <Link to={'/joao'}>Ver página do João</Link>
        </div>
    )
}

export default Home