import React , {Component} from 'react';
import './navigation.scss';
import { BrowserRouter as Router,Route,Link, Switch, NavLink } from 'react-router-dom';
import FormRegistration from '../FormRegistration';
import Todo from '../TodoComponent'
import FinalForm from '../FinalForm';


class Navigation extends Component{
    render() {
        return (
            <div className="header-conteiner">
                <header>
                    <div className="navigation-conteiner">
                        <nav>
                            <NavLink to={'/todoTask'} activeClassName="selected" >Todo</NavLink>
                            <NavLink to={'/formRegTask'} activeClassName="selected" >Form</NavLink>
                            <NavLink to={'/finalFormRegTask'} activeClassName="selected" >Final Form</NavLink>
                        </nav>
                    </div>
                </header>
            </div>
          );
    }
}

export default Navigation;