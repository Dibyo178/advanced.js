const students=[
    {id:12, name:'kd'},
    {id:13, name:'md'},
    {id:15, name:'swd'},
    {id:18, name:'gf'},
]
const output=[];
for (let i = 0; i< students.length; i++) {
    const element=students[i];
    const result=element.name;       //1st way get name property...
   output.push(result);
    
    
}
// console.log(output);

const names=students.map(s=>s.name);

const id=students.map(s=>s.id);
const bigger=students.filter(s=>s.id>14);
const bigger1=students.find(s=>s.id>14)
console.log(bigger);
console.log(bigger1);

