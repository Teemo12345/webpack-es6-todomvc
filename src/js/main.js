import "todomvc-app-css/index.css";
import {$on} from './components/helpers';
import Controller from './controller/controller';
import Store from './services/store';
import View from './controller/view'

const view = new View()
console.log(view)
const store = new Store("todos")
const controller = new Controller(store,view);
const setView = ()=> controller.setView(document.location.hash);

$on(window,'load',setView);