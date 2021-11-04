// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')
var newListItem = document.createElement('li')
newListItem.textContent = "cream"
list[0].appendChild(newListItem)


// ADD NEW ITEM START OF LIST
var newItem2 = document.createElement('li')
newItem2.textContent = "kale"
list[0].prepend(newItem2)

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(let i = 0; i < 6; i++)
    document.getElementsByTagName('li')[i].classList.add("cool")
var span = document.createElement('span')
span.innerText = "6"
document.getElementsByTagName('h2')[0].insertAdjacentElement("beforeend", span)

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
