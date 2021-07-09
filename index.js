// Write your solution here!

const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
   const allCats = [...cats, name];
   return allCats;
}

function prependCat(name){
    const allCatz = [name, ...cats];
    return allCatz;
}

function removeLastCat(){
   return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
    return cats.slice(1);
}