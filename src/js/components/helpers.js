export function $on(target,type,callback,capture){
	target.addEventListener(type,callback,!!capture)
}
export function qs(selector,scope){
	return (scope||document).querySelector(selector);
}