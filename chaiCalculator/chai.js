function calculateChaiIngredients() {
    // Step 1: Ask the user how many cups they want
    let input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    
    // Step 2: Convert the input into a number
    let numberOfCups = Number(input);

    // Step 3: Check if the input is valid (a positive number)
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        console.log("Please enter a valid number greater than 0.");
        return; // Stop the function if input is bad
    }

    // Step 4: Define how much of each ingredient is needed per cup
    const waterPerCup = 200;   // ml
    const milkPerCup = 50;     // ml
    const teaLeavesPerCup = 1; // tablespoons
    const sugarPerCup = 2;     // teaspoons

    // Step 5: Multiply each amount by the number of cups
    let totalWater = waterPerCup * numberOfCups;
    let totalMilk = milkPerCup * numberOfCups;
    let totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    let totalSugar = sugarPerCup * numberOfCups;

    // Step 6: Print the results in a friendly message
    console.log("To make ${numberOfCups} cups of Kenyan Chai, you will need:");
    console.log("Water: ${totalWater} ml");
    console.log("Milk: ${totalMilk} ml");
    console.log("Tea Leaves (Majani): ${totalTeaLeaves} tablespoons");
    console.log("Sugar (Sukari): ${totalSugar} teaspoons");
    console.log("\nEnjoy your Chai Bora!");
}