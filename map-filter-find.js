const students = [
    {id:1, name:"tahsin"},
    {id:2, name:"rifat"},
    {id:3, name:"showrav"}
];

const names = [];

for (let i = 0; i < students.length; i++) {
    names.push(students[i]);
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i].name);
}

//map - all element access korbe, output ekta array dibe, condition dile true false kore holew ekta array dibe
const onlyNames = students.map(s => s.name);
const onlyIds = students.map(s => s.id);

console.log(onlyNames);
console.log(onlyIds);

//filter - jegula condition fulfill korbe tader array dibe
const greaterThen1 = students.filter(s => s.id>1);
console.log(greaterThen1);

//find - first je condition fulfill korbe take shudu return dibe, ar ektao na paile undefined dibe
const greaterThen1UsingFind = students.find(s => s.id>1);
console.log(greaterThen1UsingFind);
