import { lazy, LazyExoticComponent } from 'react';


type JSXComponent = ()=> JSX.Element

interface Route{
    to: string;
    path: string;
    Component:   LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}

const Lazy1 = lazy(()=> import(/*webpackChunkName:"LazyLoadPage1"*/ '../1_Lazy/LazyPage1'))
const CoponentPattern = lazy(()=> import('../2_Component_patter/pages/ShoppingPage'))
const ShopinPage = lazy( ()=> import('../3_Cards/pages/ShopinPage') )




export const routes: Route[] = [
    {
        to : '/shopping',
        path : 'shopping',
        Component : CoponentPattern,
        name : 'shopping-Page'
    },
    {
        to : '/lazy1',
        path : 'lazy1',
        Component : Lazy1,
        name : 'Lazy-1'
    },
    {
        to : '/card',
        path : 'card',
        Component : ShopinPage,
        name : 'Card Page'
    },
];