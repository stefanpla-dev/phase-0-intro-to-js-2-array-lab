// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    const moreCats = cats.slice();
    moreCats.push(name);
    return moreCats;
}

function prependCat(name){
    const fewerCats = cats.slice();
    fewerCats.unshift(name);
    return fewerCats;
}

function removeLastCat(){
    const oneLessCat = cats.slice(0, cats.length-1);
    return oneLessCat;
}

function removeFirstCat(){
    const fewerCats = cats.slice(1);
    return fewerCats;
}