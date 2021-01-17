

 
let categories = {
  name: 'animals', children: [
    {
      name: 'mammals',
      children: [{
        name: 'Cats',
        children: [{name: 'persian', children: []}, {name: 'siamese', children: []}]
      }, {
        name: 'Dogs',
        children: [{name: 'chihuahua', children: []},{name: 'labrador', children: []}] 
      }]
    }
  ] 
};

 function printChildrenNames (tree) {
   if (tree.children.length === 0) {
     return;
   }
   tree.children.forEach(function (child) {
     console.log (`-${child.name}`) ;
     printChildrenNames(child);
   });
 }
 printChildrenNames(categories)


/*function bigThanSix (c) {
  return c.id.length > 6
}
 
let catID = categories.filter(bigThanSix)*/

/*let catID = categories.filter((c) => {
  if (c.parent === null) {
    return ''
  }
  return c.parent.length > 6;
})



console.log(catID);*/

/*
{
  animals: {
    mammals: {
      dogs: {
        chihuahua: null
        labrador: null
      }
      cats: {
        persian: null
        siamese: null
      }
    }
  }
}
 */

// function makeTree(categories, parent) {
//   let node = {};
//   categories
//     .filter(c => c.parent === parent);
//     categories.forEach(c => node[c.id] = makeTree(categories, c.id))
//   return node;
// }

// console.log(makeTree(categories, null))