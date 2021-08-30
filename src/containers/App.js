import {React , Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

class App extends Component {
    constructor(){
        super();
        this.state ={
            robots: [],
            searchfield: ''
        };
    }
    componentDidMount(event){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots : users}));
    }
    onSearchChange = (event) => {
        return this.setState({searchfield : event.target.value})
    }
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        }) 
        if (!robots.length){
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RobotFriends</h1>
                    <Searchbox searchchange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobot} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    };
};

export default App;