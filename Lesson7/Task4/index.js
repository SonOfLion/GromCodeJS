// ['Ann', 'Tom', 'Bob', 'Kate'];['Tom', 'Bob'] => ['Good job, Ann', 'Good job, Kate'];

const getMessagesForBestStudents = (allStudents, failedStudents) =>
    allStudents
    .filter(name => !failedStudents.includes(name))
    .map(name => 'Good job, ' + name);


const allStudents = ['Ann', 'Tom', 'Bob', 'Kate'];
const failedStudents = ['Tom', 'Bob'];

console.log(getMessagesForBestStudents(allStudents, failedStudents));

//1.Find passed students.
//2.Add text "Good job".