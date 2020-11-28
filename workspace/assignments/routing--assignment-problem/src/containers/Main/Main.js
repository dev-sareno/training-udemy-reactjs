import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Users from '../Users/Users';
import Courses from '../Courses/Courses';
import Error404 from '../../components/Error404/Error404';

class Main extends Component {
    render = () => {
        return (
            <div>
                <nav>
                    <ul>
                        <li><NavLink to="/users">Users</NavLink></li>
                        <li><NavLink to="/courses">Courses</NavLink></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/users" component={Users} />
                    <Route path="/courses" component={Courses} />
                    <Redirect from="/all-courses" to='/courses' exact />
                    <Route component={Error404} />
                </Switch>   
            </div>
        );
    }
}

export default Main;