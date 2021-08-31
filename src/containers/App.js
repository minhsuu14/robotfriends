import {React , useState , useEffect} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

const App = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
        console.log(count)
    },[count]);

    const onSearchChange = (event) => {
        return setSearchfield(event.target.value)
    };

    const filteredRobot = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!robots.length){
    return <h1>Loading</h1>
    } else {
    return (
    <div className='tc'>
        <h1 className='f1'>RobotFriends</h1>
        <button onClick={()=>setCount(count +1)}>Click me !</button>
        <Searchbox searchchange={onSearchChange} />
        <Scroll>
            <ErrorBoundry>
                <CardList robots={filteredRobot} />
            </ErrorBoundry>
        </Scroll>
    </div>
    )
    }
}
export default App;