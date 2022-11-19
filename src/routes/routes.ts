import { lazy, LazyExoticComponent } from 'react';


type JSXComponent = ()=> JSX.Element

interface Route{
    to: string;
    path: string;
    Component:   LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}

const Lazy1 = lazy(()=> import(/*webpackChunkName:"LazyLoadPage1"*/ '../1_Lazy/LazyPage1'))
const Lazy2 = lazy(()=> import(/*webpackChunkName:"LazyLoadPage2"*/ '../1_Lazy/LazyPage2'))
const Lazy3 = lazy(()=> import(/*webpackChunkName:"LazyLoadPage3"*/ '../1_Lazy/LazyPage3'))


export const routes: Route[] = [
    {
        to : '/lazy1',
        path : 'lazy1',
        Component : Lazy1,
        name : 'Lazy-1'
    },
    {
        to : '/lazy2',
        path : 'lazy2',
        Component : Lazy2,
        name : 'Lazy-2'
    },
    {
        to : '/lazy3',
        path : 'lazy3',
        Component : Lazy3,
        name : 'Lazy-3'
    },
    // {
    //     to : '/lazy4',
    //     path : 'lazy4',
    //     Component : LazyPage4,
    //     name : 'Lazy-4'
    // }

];