function addTask () 
{
    var input = document.getElementById("input");
    // get current text from input field
    var newTask = input.value;
    // only add new item to list if some text was entered 
    if (newTask != "") 
    {
        // create new HTML list item
        var item = document.createElement("li");
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' + 
            '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' + newTask;
        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item); 
        input.value="";
        input.placeholder="Add here...";
    }
}

// change styling used for given item
function markDone (item) 
{
    item.className = 'finished';
}

function remove (item) 
{
    // remove item completely from document
    if(item.className=='finished')
    {
        item.remove();
    }

}

function doAbout() 
{
    var text = document.getElementById("divabout");
    text.innerHTML="1. Write a task in the add here section and click on the Add Task button to add to the list." + 
    "<br>" + "2. To check off an item from the list click the green tick." + "<br>" + 
    "3. Click on the red cross to remove the item. Make sure to check off the item before you remove it.";
    text.className="aboutcolor";
}

function clearAbout() 
{
    var text = document.getElementById("divabout");
    text.innerHTML="";    
}
