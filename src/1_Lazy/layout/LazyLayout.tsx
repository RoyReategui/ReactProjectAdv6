import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
        <h1>LazyLayout Page</h1>
        {/* Las rutas hijas estaran aqui */}

        <ul>
            <li>
                <NavLink to="Lazy1" > Lazy 1 </NavLink>
            </li>
            <li>
                <NavLink to="Lazy2" > Lazy 2 </NavLink>
            </li>
            <li>
                <NavLink to="Lazy3" > Lazy 3 </NavLink>
            </li>
        </ul>

        <Routes>
            <Route path='lazy1' element={ <LazyPage1 />} />
            <Route path='lazy2' element={ <LazyPage2 />} />
            <Route path='lazy3' element={ <LazyPage3 />} />

            <Route path='*' element={ <Navigate replace to="lazy1" />} />
        </Routes>
    </div>
  )
}

export default LazyLayout;