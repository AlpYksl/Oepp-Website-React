import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import About from '../About';

import './navbar.css';


export default props => (
    <Container  fluid className={classNames('content', {'is-open': props.isOpen}, 'container-oepp')}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About } />
        <Route path="/Pages" component={() => "Pages" } />
        <Route path="/contact" component={() => "Contact" } />
    
        <Route path="/Page-1" component={() => "Pages" } />
        <Route path="/Page-2" component={() => "Pages" } />
        <Route path="/Support" component={() => "Pages" } />
        <Route path = "/Faq"  component ={() => "Pages" } />
        
      </Switch>
    </Container>
)
