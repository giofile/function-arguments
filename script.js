const printWall = function(item){
    console.log("The wall has been painted " + item );

}


const testColor = "green"
const testColorTwo = "blue"

printWall(testColor)
printWall(testColorTwo)
printWall() //gets undefined

const printWallTwo = function(itemOne, itemTwo){
    console.log("The north wall has been painted " + itemOne);
    console.log("The south-east wall has been painted " + itemTwo);
}

const testColorThree = "orange";
const testColorFour = "grey";

printWallTwo(testColorThree,testColorFour)
printWallTwo(testColorFour, testColorThree)
