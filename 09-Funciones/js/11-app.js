// parametros en un arrow function 

// Parametros
const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// si es sólo un parametro no ocupamos los paréntesis
const aprendiendo1 = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

//multiples parámetros si requieren los paréntesis 
const aprendiendo2 = (tecno1, tecno2) => console.log(`Apendiendo ${tecno1}  ${tecno2}`);

aprendiendo2('JS', 'CSS');