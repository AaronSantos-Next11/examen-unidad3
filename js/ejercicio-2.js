/* 
Make a script that asks for 3 ages and 3 names on the keyboard and indicates the name of the eldest.

Haz un script que pida 3 edades y 3 nombres en el teclado e indica el nombre del mayor. 
*/

    let age_person = prompt('Write a age of person:')

    let name_person = prompt('Write a name of person:')

    console.log(name_person + ' and ' + age_person);
    
    // ---------------------------
    
    let age_person_2 = prompt('Write a age of person:')
    
    let name_person_2 = prompt('Write a name of person:')
    
    console.log(name_person_2 + ' and ' + age_person_2);
    
    // ---------------------------
    
    let age_person_3 = prompt('Write a age of person:')
    
    let name_person_3 = prompt('Write a name of person:')
    
    console.log(name_person_3 + ' and ' + age_person_3);
    

    let result_3 = name_person + ' and ' + age_person

    if (age_person > age_person_2) {
        console.log( name_person + " is older and the age is " + age_person)

    } else if (age_person_2 > age_person_3) {
        console.log( name_person_2 + " is older and the age is " + age_person_2 )

    } else {
        console.log(name_person_3 + " is older and the age is " + age_person_3)

    }
