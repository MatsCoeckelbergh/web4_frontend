import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Logo from './Images/user-profile.png'
import LoginPhoto from './Images/social3.png'
import MessageOverview from './components/message-overview';
import Login from './components/login';
import Status from './components/status'
import Main from './components/mainPage'

function App() {
    const user = sessionStorage.getItem('user')
    if(user == null)
    {
        
        {
            return (
                <>
                
                <div className='homescreen'>
                <div className='intro'>
                    {!window.location.href.includes("/login") &&
                    <h2>Welcome to our site!</h2>
                    }
                    {!window.location.href.includes("/login") &&
                    <hr></hr>
                    }
                    
                    {!window.location.href.includes("/login") &&
                    <p>If you want to use all the functionalities of our site, please go to the <a href="/login">login page</a></p>
                    }
                    </div>
                    {!window.location.href.includes("/login") &&
                    <img src={LoginPhoto}/>
                    }
                    </div>
                
                <Routes>
                        <Route path="/login" element={<Login/>}/>
                </Routes>
                <div>
        <svg className='waves' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(151,74,15,0.7" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(151,74,15,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(151,74,15,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(151,74,15)" />
        </g>
        </svg>
        </div>
                </>
            )
        }
        

    }
    
    return (
        <>  
             
        <header>
                <div className='three'>
                <h4>FakeBook</h4>
            </div>
                <div className='profileInfo'>
                    <div className='profilePhoto'>
                    <img src={Logo} />
                    </div>
                    
                    <p>{sessionStorage.getItem("user")}</p>
                </div>
                
            </header>

            <main className='overviewScreen'>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/overview" element={<Main />} />
                </Routes>
            </main>
            <div className='footer'>
        <svg className='waves' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
        <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(151,74,15,0.7" />
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(151,74,15,0.5)" />
        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(151,74,15,0.3)" />
        <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(151,74,15)" />
        </g>
        </svg>
        </div>
        </>
    );
}

export default App;
