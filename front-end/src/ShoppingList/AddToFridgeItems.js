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

  // empty model object
  const foodItem = {
    userId: "",
    title: "",
    amount: "",
    daysleft: 0,
    type: 0,
    dateadded: "",
    notes: "",
  };

  let vals = getSelectedCheckboxItems("itemCheckbox");
  // ALL VALUES FROM SCHEMA ARE PASS THROUGH HERE
  for (let i = 0; i < vals.length; i++) {
    let add = Object.create(foodItem);
    add.id = vals[i].getAttribute("id");
    add.userId = vals[i].getAttribute("userId");
    add.title = vals[i].getAttribute("value");
    add.amount = vals[i].getAttribute("amount");
    add.type = vals[i].getAttribute("food");
    add.notes = vals[i].getAttribute("notes");
    add.dateadded = "April 12, 2021";

    try {
      const findItem = storageitems.find((elem) => elem.name === add.title);
      add.daysleft = findItem.defaultTime;
      console.log("Found item and retrieved accurate storage time of ", findItem.defaultTime)
    } catch (e) {
      console.log("Couldn't find the item! Now using default storage times for added item.")
      if (add.type === 1) {
        add.daysleft = 5;
      } else if (add.type === 2) {
        add.daysleft = 6;
      } else if (add.type === 3) {
        add.daysleft = 7;
      } else {
        add.daysleft = 8;
      }
    }
    objects.push(add);
  }
  // returns array of objeccts of all items that are to be added
  return objects;
}
