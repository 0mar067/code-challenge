function calculateChaiIngredients() {
    // Ask the user how many cups they want
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    
    // Convert the input into a number
    let numberOfCups = Number(input);

    // Check if the input is valid (a positive number)
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number greater than 0.");
        return; 
    }

    //  Define how much of each ingredient is needed per cup
    const waterPerCup = 200;   
    const milkPerCup = 50;     
    const teaLeavesPerCup = 1; 
    const sugarPerCup = 2;     

    //  Multiply each amount by the number of cups
    let totalWater = waterPerCup * numberOfCups;
    let totalMilk = milkPerCup * numberOfCups;
    let totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    let totalSugar = sugarPerCup * numberOfCups;

    //  Print the results in a friendly message
   console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
   console.log(`Water: ${totalWater} ml`);
   console.log(`Milk: ${totalMilk} ml`);
   console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
   console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
   console.log("\nEnjoy your Chai Bora!");
}
calculateChaiIngredients();