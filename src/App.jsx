import { useEffect, useState } from 'react';
import { Transition, SwitchTransition, CSSTransition } from 'react-transition-group';
import './App.css';
import Todos from './components/Todos';

function App() {
    const [loaderVisible, setLoaderVisible] = useState(false);
    const [mode, setMode] = useState('out-in');
    const [toggle, setToggle] = useState(false);

    const changeHandler = (e) => {
        setMode(e.target.value);
    }

    // useEffect(() => {
    //     setTimeout(() => setLoaderVisible(true), 1000);
    //     setTimeout(() => setLoaderVisible(false), 5000);
    // }, []);

    return (
        <div className="app">
            <h1>Transition</h1>
            <button 
                className="show"
                onClick={ () => {setLoaderVisible(!loaderVisible)} }
            >
                { loaderVisible ? 'hide' : 'show' }
            </button>
            <div className="radio">
                <label htmlFor="out-in" className="label1">out-in</label>
                <input onChange={ (e) => changeHandler(e) } id="out-in" value="out-in" type="radio" name="radio" />
                <label htmlFor="in-out" className="label2">in-out</label>
                <input onChange={ (e) => changeHandler(e) } id="in-out" value="in-out" type="radio" name="radio" />
                <div className="anim">
                    <SwitchTransition mode={ mode }>
                        <CSSTransition
                            key={toggle}
                            timeout={ 500 }
                            classNames='fade'
                        >
                            <button onClick={ () => setToggle(!toggle) }>
                                { toggle ? "Goodbye, world!" : "Hello, world!" }
                            </button>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="wrap">
                <Transition
                    in={ loaderVisible }
                    timeout={ 500 }
                    mountOnEnter
                    unmountOnExit
                    onEnter={ () => console.log('onEnter') }
                    onEntering={ () => console.log('onEntering') }
                    onEntered={ () => console.log('onEntered') }
                    onExit={ () => console.log('onExit') }
                    onExiting={ () => console.log('onExiting') }
                    onExited={ () => console.log('onExited') }
                >
                    { state =>  <div className={ `circle ${state}` } /> }
                </Transition>
            </div>

           <div className="wrap">
            <Todos />
           </div>

        </div>
    );
}

export default App;
