import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../1_Lazy/pages/NoLazy';

type JSXComponent = ()=> JSX.Element

interface Route{
    to: string;
    path: string;
    Component:   LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string
}

const LazyLayout = lazy(()=> import(/*webpackChunkName:"LazyLoadPage1"*/ '../1_Lazy/layout/LazyLayout'))

const Lazy1 = lazy(()=> import(/*webpackChunkName:"LazyLoadPage1"*/ '../1_Lazy/pages/LazyPage1'))
const Lazy2 = lazy(()=> import(/*webpackChunkName:"LazyLoadPage2"*/ '../1_Lazy/pages/LazyPage2'))
const Lazy3 = lazy(()=> import(/*webpackChunkName:"LazyLoadPage3"*/ '../1_Lazy/pages/LazyPage3'))


export const routes: Route[] = [
    {
        path : '/lazyload/*',
        to : '/lazyload/',
        Component : LazyLayout,
        name : 'LazyLayout - Dash'
    },
    {
        to : '/no-lazy',
        path : 'no-lazy',
        Component : NoLazy,
        name : 'No lazy'
    },


];