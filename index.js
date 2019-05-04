// Convert the below into ES6 using an Arrow Function and Filter

const arr = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
];

const newArr = [];

for(let i= 0; i < arr.length; i++){
    if(arr[i].name === "ford" ){
        newArr.push(arr[i]);
    }
}

console.log("Filter results:", newArr);


// Converted Form 

let filteredCarMakes = automobileCars => {
    return automobileCars.name === 'Ford';
};

    const arr = [

        { name: 'Chevy', count: 2 },
        { name: 'Ford', count: 5 },
        { name: 'Acura', count: 3 },
        { name: 'Honda', count: 16 }

].filter(filteredCarMakes);
  
console.log("Filtered Automible Car Makes:", arr);



// Combine the two arrays below using ES6

const arr = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

function addNewStudent(array, newArray) {
    for(let i = 0; i < newArray.length; i++) {
        array.push(newArray[i]);
    }
}

addNewStudent(arr, newStudents);


// Combined Form 

const arr = ['Bill', 'Joe', 'Emily', 'Andrea'];
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const combinedArray = [...arr, ...newStudents];

console.log(combinedArray);
