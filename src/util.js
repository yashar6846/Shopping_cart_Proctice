export const Add = (num1 = 0, num2 = 0) => {
    return num1 + num2;
  };
  
  // test('Add undefined with a number', () => {
  //     const result = Add(undefined, 3)
  //     expect(result).toBe(3)
  // })
  
  export const AddItemToList = (list, newItem) => {
    let isNew = true;
    const newList = list
      ? list.map((item) => {
          if (item.id === newItem.id) {
            item.count++;
            isNew = false;
          }
          return item;
        })
      : [];
    if (isNew) {
      newList.push({ ...newItem, count: 1 });
    }
    return newList;
  };
  
  export const RemoveOneFromList = (List, item) => {
    const newList = List.map((ListItem) => {
      const newItem = { ...ListItem };
      if (ListItem.id === item.id) {
        newItem.count--;
      }
      return newItem;
    });
  
    return newList.filter((ListItem) => ListItem.count > 0);
  };
  