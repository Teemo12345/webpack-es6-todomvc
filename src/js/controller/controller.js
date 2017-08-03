class Controller{
	constructor(store,view){
		this.store = store;
		this.view = view;
		this._activeRoute = '';
		this._lastActiveRoute = null;
		console.log(this)
		view.bindAddItem(this.addItem.bind(this))
	}
	setView(raw){
		const route = raw.replace(/^#\//,'');
		// console.log(route)
		this._activeRoute = route;
	}
	addItem(title){
		this.store.insert({id:Date.now(),title,completed:false},()=>{console.log("add")})
	}
}
export default Controller;