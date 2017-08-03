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
		this.setLocalStorage(todos);
		if(callback){
			callback()
		}
	}
	find(query,callback){
			console.log(query)
		
		const todos = this.getLocalStorage();
		let k;
		let tds = todos.filter(function(todo){
			for(k in query){
				if(query[k]!==todo[k]){
					return false;
				}
			
			}
				return true;
		})
		console.log(tds)
		callback(tds)
	}
	count(callback){
		console.log(this.find)
		this.find({},function(data){
			console.log(data)
		})
	}
}