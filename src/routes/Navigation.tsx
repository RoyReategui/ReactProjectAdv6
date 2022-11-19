import { Suspense } from 'react';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={ null }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ reactLogo } alt="Logo React" />
                    {
                        routes.map( nav =>(
                            <li key={nav.name}>
                                <NavLink to={ nav.to } className={ ({ isActive })=> isActive? 'nav-active':''} >{ nav.name }</NavLink>
                            </li>
                        ))
                    }
                </nav>

                <Routes>
                    {
                        routes.map(ele =>(  
                            <Route 
                                key={ele.name} 
                                path={ ele.path } 
                                element={ <ele.Component /> }  
                            />
                            
                        ))
                    }
                    {/* replace es para que la persona no se vaya para atras */}
                    <Route path='/*' element={ <Navigate to={ routes[0].to } replace /> }  ></Route>

                </Routes>


            </div>
        
        </BrowserRouter>
    </Suspense>
  )
}
