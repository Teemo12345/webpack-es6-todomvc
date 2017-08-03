class Controller{
	constructor(store,view){
		this.store = store;
		this.view = view;
		this._activeRoute = '';
		this._lastActiveRoute = null;
		view.bindAddItem(this.addItem.bind(this))
	}
	setView(raw){
		const route = raw.replace(/^#\//,'');
		console.log(route+"---")
		this._activeRoute = route;
	}
	addItem(title){
		this.store.insert({id:Date.now(),title,completed:false},()=>{this._filter(true)})
	}
	_filter(force){
		const route = this._activeRoute;
		if(force||this._activeRoute!==''||this._lastActiveRoute!==route){
			this.store.find({
				"":{},
				'active':{completed:false},
				'completed':{completed:true}
			}[route],this.view.showItems.bind(this.view))
		}
		this.store.count(function(total){})
	}
}
export default Controller;