/**
 *
const user = { name: "Asru", age: 25 };
user.city = "assam"; //Add new property
console.log(user, user.hasOwnProperty("age")); //Access property
delete user.age; //Delete a property
console.log(user, user.hasOwnProperty("age")); //Check if key exists

//Count object keys
keysCount = Object.keys(user);

console.log(keysCount.length);

//Loop through object

for (const key in user) {
  console.log(user[key]);
}

//merging two objects
const a = { id: 2, name: "Asru" };
const b = { id: 1, age: 25 };

console.log({ ...a, ...b });

//Convert object to array

console.log(Object.entries(user));

// Remove duplicate

const arr = [
  { id: 1, name: "A" },
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const newArr = arr.filter((obj, ind, arr) => {
  return ind === arr.findIndex((obj1) => obj1.id === obj.id);
});

console.log(newArr);
 */

/**
 * Merge the objects by id
 * 
 * const a = [
  { id: 1, name: "Asru" },
  { id: 2, name: "Ravi" },
];

const b = [
  { id: 1, age: 25 },
  { id: 2, age: 30 },
];

const mergedArr = a.map((obj) => {
  const ageObj = b.find((ob) => ob.id === obj.id);
  return { ...obj, ...ageObj };
});

console.log(mergedArr);
 */

/**
 * Remove duplicate objects
 * const arr = [
  { id: 1, name: "A" },
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const duplicateArr = arr.filter((obj, ind, arr) => {
  return ind === arr.findIndex(obj1 => obj1.id === obj.id);
});

console.log(duplicateArr)
 */

/**
 * Count how many times each id appears
 * 
const arr = [{ id: 1 }, { id: 2 }, { id: 1 }, { id: 3 }, { id: 2 }];

const countObj = arr.reduce((acc,obj)=>{
  acc[obj.id] = (acc[obj.id] || 0) + 1
  return acc
},{})

console.log(countObj);
 */

/**
 * Group objects by property
 const users = [
  { name: "A", city: "BLR" },
  { name: "B", city: "DEL" },
  { name: "C", city: "BLR" },
];

const grouped = users.reduce((acc, user) => {
  if (!acc[user.city]) acc[user.city] = [];
  acc[user.city].push(user);
  return acc;
}, {});

console.log(grouped)


/**
 *Find object with max age
 * const users = [
  { name: "A", age: 20 },
  { name: "B", age: 40 },
  { name: "C", age: 30 },
];

let maxAge = { age: 0 };

users.map((obj) => {
  if (obj.age > maxAge.age) {
    maxAge = obj;
  }
});

const maxAgeUser = users.reduce((max, user) =>
  user.age > max.age ? user : max
);

console.log(maxAgeUser);
 */


/**
 * Convert array → object
 */

const arr = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

let obArr = {}

arr.map((obj)=>{
  obArr[obj.id] = obj
})

console.log(obArr)