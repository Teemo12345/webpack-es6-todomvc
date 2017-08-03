export default class Store{
	constructor(name,callback){
		const localStorage = window.localStorage;
		let liveTodos;
		this.getLocalStorage = ()=>{
			return liveTodos || JSON.parse(localStorage.getItem(name)||'[]');
		}
		this.setLocalStorage = (todos)=>{
			localStorage.setItem(name,JSON.stringify(liveTodos=todos));
		}
		if(callback){
			callback();
		}
	}
	insert(item,callback){
		const todos = this.getLocalStorage();
		todos.push(item);
		this.setLocalStorage();
		if(callback){
			callback()
		}
	}
}