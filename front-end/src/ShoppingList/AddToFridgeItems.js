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

export function compileAddToFridgeItems() {
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
    add.dateadded = vals[i].getAttribute("date");
    add.daysleft = 5; // PLACEHOLDER FOR FUTURE WHEN WE AUTOMATICALLLY PUT IN STORAGE TIME
    objects.push(add);
  }

  // returns array of objeccts of all items that are to be added
  return objects;
}
