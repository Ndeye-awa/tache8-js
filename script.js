const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Exo 1: Utilisez la méthode .map() pour doubler chaque nombre du tableau

const leDoubleDesNombres = nombres.map(nombre => nombre * 2);
console.log("le double du nombre est:", leDoubleDesNombres);

//Exo 2: Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau avec uniquement les chaînes dont la longueur est supérieure à 3.

const chaines = ["mariama", "awa", "binta", "khoudoss", "aby", "falilou", "ame", "nafi"];
const chainesLongueur = chaines.filter(chaine => chaine.length > 3);
console.log("Chaînes avec une longueur > 3:", chainesLongueur);

//Exo 3: Utilisez la méthode .reduce() pour résumer tous les nombres dans un tableau de nombres

const sommeDesNombres = nombres.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
console.log("Somme des nombres:", sommeDesNombres);

//Exo 4: Utilisez la méthode .sort() pour trier un tableau de chaînes par ordre alphabétique
const chainesTri = chaines.slice().sort();
console.log("Chaines triées:", chainesTri);

//Exo 5: Utilisez la méthode .forEach() pour imprimer chaque élément d'un tableau
chaines.forEach(chaine => console.log("Chaîne:", chaine));
