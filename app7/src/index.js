import "babel-polyfill"
import Layout from './components/layout';
import Menu from './components/menu'
import Main from './components/main';

let el = document.getElementById('layout');
const layout = new Layout(el, new Menu(), new Main());
layout.render(); 
