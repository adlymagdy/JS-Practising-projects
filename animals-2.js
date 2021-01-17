let categories = [
  { id: 'animals', parent: null },
  { id: 'mammals', parent: 'animals' },
  { id: 'cats', parent: 'mammals' },
  { id: 'dogs', parent: 'mammals' },
  { id: 'chihuahua', parent: 'dogs' },
  { id: 'labrador', parent: 'dogs' },
  { id: 'persian', parent: 'cats' },
  { id: 'siamese', parent: 'cats' }
 ];

 function makeTree(tree) {
   if (tree.parent === null) {
     return
   }
   tree.forEach(function(t) {
     console.log(t.id)
   })
 }



/*function bigThanSix (c) {
  return c.id.length > 6
}
 
let catID = categories.filter(bigThanSix)*/

// let catID = categories.filter((c) => {
//   if (c.parent === null) {
//     return ''
//   }
//   return c.parent.length > 6;
// })
// console.log(catID);

function catParent (categories, parent){
  categories.filter((c) => {
    if (c.parent === parent) {
      console.log(c.id)
    }
  })
}

catParent(categories, 'mammals')
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

// console.log(makeTree(categories, null)