import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { LazyPage1, LazyPage2, LazyPage3 } from '../1_Lazy';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={ reactLogo } alt="Logo React" />
                <li>
                    <NavLink to="/lazy1" className={ ({ isActive })=> isActive? 'nav-active':''} >lazy1</NavLink>
                </li>
                <li>
                    <NavLink to="/Lazy2" className={ ({ isActive })=> isActive? 'nav-active':''} >Lazy2</NavLink>
                </li>
                <li>
                    <NavLink to="/Lazy3" className={ ({ isActive })=> isActive? 'nav-active':''} >Lazy3</NavLink>
                </li>
            </nav>

            <Routes>
                <Route path='Lazy1' element={ <LazyPage1 /> }  ></Route>
                <Route path='Lazy2' element={ <LazyPage2 /> }  ></Route>
                <Route path='Lazy3' element={ <LazyPage3 />  }  ></Route>

                <Route path='/*' element={ <Navigate to="/Lazy1" /> }  ></Route>

            </Routes>


        </div>
    
    </BrowserRouter>
  )
}
