import {qs,$on} from '../components/helpers'
// import Store from './services/store'

class view{
	constructor(template){
		this.template = template;
		this.$newTodo = qs('.new-todo');
		this.$todoList = qs('.todo-list');
		this.$main = qs('.main')
	}
	bindAddItem(handler){
		$on(this.$newTodo,'change',({target})=>{
			const title = target.value.trim();
			// console.log(title)
			if(title){
				handler(title)
			}
		})
	}
	showItems(items){
		this.$todoList.innerHTML = this.template.itemList(items);
	}
	setMainVisibility(visible){
		this.$main.style.display = !!visible?'block':'none';
	}
	clearNewTodo(){
		this.$newTodo.value=''
	}
}
export default view;