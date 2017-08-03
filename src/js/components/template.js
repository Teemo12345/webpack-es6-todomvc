export default class Template{
  itemList(items){
    return items.reduce(function(a,item){
      return a+`
        <li data-id="${item.id}"${item.completed?'" class="completed"':''}>
          <input class="toggle" type="checkbox" ${item.completed?'checked':''}>
          <label>${item.title}</label>
          <button class="destroy"></button>
        </li>
      `
    },"")
  }
}