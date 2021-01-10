import React, {Component} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Login from '../Login/Login';
import ContactUS from '../ContactUs/ContactUS';
import {POETRY} from '../shared/poetry';
import {STORY} from '../shared/story';
import {DRAWING} from '../shared/drawing';
import {COMMENTS} from '../shared/comments.js';
import {Switch, Route, Redirect, Router} from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super(props);

        this.state={
            poetry:POETRY,
            story:STORY,
            drawing:DRAWING,
            comments:COMMENTS
        };
    }

    render(){

        const HomePage = () =>{
            return(
                <MainContent poetry={this.state.poetry.filter((poetry)=>poetry.featured)[0]}
                             story={this.state.story.filter((story)=>story.featured)[0]}
                             drawing={this.state.drawing.filter((drawing)=>drawing.featured)[0]}
                />
            );
        }

        const login =()=>{
            return(
                <Login/>
            );
        }

        const contactus  =()=>{
            return(
                <ContactUS/>
            );
        }

        return(
            <div>
                <Header/> 
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/contactus" component={contactus}/>
                    <Route exact path="/login" component={login}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;