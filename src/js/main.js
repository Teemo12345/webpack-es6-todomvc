import "todomvc-app-css/index.css";
import {$on} from './components/helpers';
import Controller from './controller/controller';
import Store from './services/store';
import View from './controller/view'
import Template from './components/template';
const template = new Template();
const view = new View(template)
const store = new Store("todos")
const controller = new Controller(store,view);
const setView = ()=> controller.setView(document.location.hash);

$on(window,'load',setView);
$on(window,'hashchange',setView)