import React, { useState, useEffect, useCallback } from "react";

import CardList from "../components/cardList";
import SearchBox from "../components/searchBox";

import './app.css';
import Scroll from "../components/scroll";
import ErrorBoundry from "../components/errorBoundry";

function App (){
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchField: ''
    //     }
    // }
    const [robots, setRobots] = useState([]);
    const [searchField, setSsearchField] = useState('');
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(users => this.setState({ robots: users }))
    // }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, []);
    const onSearchChange = (event) => {
        setSsearchField(event.target.value);
    }

    //const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length ?
        <h1 className='tc'>Loading</h1>
        : (
            <div className="tc">
                <h1>RoboFirends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>

                </Scroll>
            </div>
        );
}
export default App;