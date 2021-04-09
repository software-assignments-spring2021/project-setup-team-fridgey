export function getSelectedCheckboxItems(name) {
  let values = [];
  // grabs all checkboxes that are checked
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  checkboxes.forEach((checkbox) => {
    values.push(checkbox);
  });
  
  // returns arrays of all checkboxes that are checked
  return values;
}

export function compileAddToFridgeItems(storageitems) {
  let objects = [];
  // model object
  const foodItem = {
    id: 1,
    title: "Apples",
    amount: "Lots",
    type: 0,
    dateadded: { $date: { $numberLong: 161448318100 } },
  };

  let vals = getSelectedCheckboxItems("itemCheckbox");

  for (let i = 0; i < vals.length; i++) {
    let add = Object.create(foodItem);
    add.id = vals[i].getAttribute("id");
    add.title = vals[i].getAttribute("value");
    add.type = vals[i].getAttribute("food");
    add.amount = vals[i].getAttribute("amount");
    add.dateadded = vals[i].getAttribute("date"); //April 1, 2021

    try{
      const findItem = storageitems.find(elem => elem.food === add.title)
      add.daysleft = findItem.storage_time_medium;
      } catch (e){
        console.log("doesnt work!")
        console.log(e);
        console.log(add.type);
        if (add.type == 1){
          add.daysleft = 5;
        }
        else if (add.type == 2){
          add.daysleft = 6;
        }
        else if (add.type == 3){
          add.daysleft = 7;
        }
        else {
          add.daysleft = 8;
        }
    }
    objects.push(add);
  }
  // returns array of objeccts of all items that are to be added
  return objects;
}
