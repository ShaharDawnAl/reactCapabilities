import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
//import {Greet} from './components/Greet'; if using export a function in Greet.js
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';
import './AppStyles.css';
import styles from './AppStyles.module.css';
import Forms from './components/Forms';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounter2 from './components/ClickCounter2';
import HoverCounter2 from './components/HoverCounter2';
//import User  from './components/User';
import Counter2 from './components/Counter2';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

//State Less function class (no this.state can be used here)
class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello />
        {/*For properties we know we pass for sure we'll use attributes like name, heroName...
        ***props cannot be changed****/}
        <Greet name="Bruce" heroName="Batman"><p>This is children props</p></Greet>
        <Greet name="Clark" heroName="Superman"><button>Action</button></Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />

        <Message />
        <Counter />
        {/* when not using jsx <Hello />*/}
        <h2><FunctionClick /></h2>
        <h1><ClassClick /></h1>
        <h1><EventBind /></h1>
        <h1><ParentComponent /></h1>
        <UserGreeting />
        <NameList />

        <StyleSheet primary={true} />
        <Inline />
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>

        <h2><Forms /></h2>

        <LifeCycleA />

        <FragmentDemo />
        <Table />

        <ParentComp />

        <RefsDemo />
        <FocusInput />
        <FRParentInput />
        <PortalDemo />

        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>

        <ClickCounter name="Shahar" />
        <HoverCounter />
        {
          /*<ClickCounter2 />
            <HoverCounter2 />
            <User render={ (isLoggedIn) => isLoggedIn ? 'Shahar': 'Guest' } />
          */
        }


        <Counter2 /*render can be called whatever you want*/
          render={(count, incrementCount) =>
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          } />

        <Counter2 /*render can be called whatever you want*/
          render={(count, incrementCount) =>
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          } />

        {/*if you don't want to use the props there's another way*/}
        {/*
        <Counter2> 
          {(count,incrementCount) => 
            <ClickCounter2 count={count} incrementCount={incrementCount} /> 
          } 
        </Counter2>

        <Counter2> 
          {(count,incrementCount) => 
            <HoverCounter2 count={count} incrementCount={incrementCount} /> 
          } 
        </Counter2>
        */}

        {/*Using React.createContext() to provide a value to deeply nested compoenent 
        without having to pass it as a prop through every intermediate compoenent */}
        <UserProvider value="SShahar">
          <ComponentC />
        </UserProvider>

        <ComponentC />

        <br />

        {/*get all the list of posts*/}
        <PostList />
        <br />
        {/*post to list*/}
        <PostForm />


      </div>
    );
  }
}

export default App;
