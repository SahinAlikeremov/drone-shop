import '../Styles/Home.css';
import Showcase from '../components/Showcase';
import Guides from '../components/Guides';
import Choose from '../components/Choose';
import Blog from '../components/Blog';
function Home() {
    return (
        <main>
            <Showcase />
            <Guides/>
            <Choose/>
            <Blog/>
        </main>
    )
}

export default Home;