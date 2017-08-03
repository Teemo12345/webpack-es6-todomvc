import {qs,$on} from '../components/helpers'
// import Store from './services/store'

class view{
	constructor(template){
		this.template = template;
		this.$newTodo = qs('.new-todo');
	}
	bindAddItem(handler){
		console.log(handler)
		$on(this.$newTodo,'change',({target})=>{
			const title = target.value.trim();
			// console.log(title)
			if(title){
				handler(title)
			}
		})
	}
}
export default view;