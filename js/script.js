function newItem() {

  // Adding a new item
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  // Error message if nothing is added
  if (inputValue === '') {
    alert('You must write something!')
  } else {
    $('#list').append(li);
  }

  // Crossing out an item
  function crossOut(){
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut(){
    li.toggleClass('strike');
  });

  // Adding the delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');

  function deleteListItem(){
    li.addClass('delete');
  }

  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);
  crossOutButton.on('click', deleteButton)

  // Reordering the items
  $('#list').sortable();
}
