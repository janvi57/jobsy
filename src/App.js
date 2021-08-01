import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import ClassComponent from './ClassComponent';
import ApiClass from './ApiClass';
import TodoApp from './TodoApp';
import Timer from './Timer';
import Home from './Home';
import Header  from './Header';
import Footer from './Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
      <header className="row">
                    <div className="col-sm-12 bg-info">
                    <Header/>
                    </div>
                    </header>
      
      <main className="row">
      <div className="col-sm-12">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Timer" component={Timer} />  
      <Route exact path="/ApiClass" component={ApiClass} />
      <Route exact path="/TodoApp" component={TodoApp} />
      <Route exact path="/ClassComponent" component={ClassComponent} />
      </Switch>
        </div>
        </main>
        <footer className="row">
                <div className="col-sm-12 bg-warning">
                <Footer />
                </div>
            </footer> 
        
      </div>  
    </Router>
  );
} 

export default App;
