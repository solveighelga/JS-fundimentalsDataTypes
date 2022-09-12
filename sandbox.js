/* Here is an example of variable assignment. I will also be using this throughout the project. */
    let age = 30; // age is the variable here and it is now stored in memeory.
    let year = 1992;

    console.log(age); // here it rememeberd what I set age to before and sends it to the console.
    console.log(age, year); // it is possible to send multiple variables to the console by adding a ','

/* Here is an example of Sting Concentration / arithmetic operations.
CamelCase: when you want to write something out you have the words stuck together with a uppercase letter (funnName).
Stings contain '' or "" */
    let firstName = 'Sólveig';
    let lastName ='Hákonardóttir';
    let fullName = firstName + ' ' + lastName; // here I added ' ' in the middle to make space between the two words.
    
    console.log(fullName.length); // the length of my full name + the space I made
    console.log(fullName);
    console.log(fullName[0]); // here I wanted the first letter from the full name to appear in my console. Javascript starts counding from 0 not 1.


/* Boolean are true or false statements; used to evaluate certain conditions */
    let email = 'solveighelga@gmail.com';
    let names = ['solveig', 'helga', 'maria']; // here is an example of Arrays
    
    let result = email.includes('@'); // this is ture because my email includes a @ symbol.
    
    console.log(result);
    console.log(names[0] == 'solveig'); // it the first name in my arrays the same as 'solveig'


/* Example of Objects */
    const animal = {
        animalName: 'Hannes', // here are my properties
        animalAge: 4,
        animalType: 'cat'
    };

    console.log(animal);
    console.log(animal.animalName); // here I wanted to extract only the animal name
 
    animal.animalAge = 6;
    console.log(animal.animalAge); // updated the age value for Hannes

    delete animal.animalType; // here I deleted the animal type from the object animal.
    console.log(animal);

/* Math method */
    let myVar = 10 * 10; // I used multiplication
    console.log(myVar);

/* Usind Date() to find date and time */
let now = new Date();
console.log(now);