var amount = 0;
var totalTasks = 0;
function SaveItem() {
	var name = document.forms.ToDo.name.value;
	var data = document.forms.ToDo.data.value;
	if(data == "No" && localStorage.getItem(name) != data)
		amount++;
	if(data == "Yes" && localStorage.getItem(name) != data)
		if(amount < 0)
		amount = 0;
	totalTasks++;
	localStorage.setItem(name, data);
	doShowAll();

}
function ModifyItem() {
	var name = document.forms.ToDo.name.value;
	var data = document.forms.ToDo.data.value;
		if(data == "No" && localStorage.getItem(name) != data)
		amount++;
		if(data == "Yes" && localStorage.getItem(name) != data)
		amount--;
		if(amount < 0)
		amount = 0;
		localStorage.setItem(name, data);
	doShowAll();
}
function RemoveItem() {
	var name = document.forms.ToDo.name.value;
	document.forms.ToDo.data.value = localStorage.removeItem(name);
	amount--;
	totalTasks--;
	if(amount < 0)
		amount = 0;
		totalTasks = 0;
	doShowAll();
}
function ClearAll() {
	localStorage.clear();
		amount = 0;
		totalTasks = 0;
	doShowAll();

}
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";

		var list = "<tr><th>Task</th><th>Completed?</th></tr>";
		var count = "Tasks to be completed: " + amount;
		var tasks = "Total number of tasks in the list: " + totalTasks;
		var i = 0;

		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Task</th><th>Completed</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
		document.getElementById('count').innerHTML = count;
		document.getElementById('total').innerHTML = tasks;
	} else {
		alert('Cannot store ToDo List as your browser do not support local storage');
	}
}
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	} else {
			return false;
	}
}
