function estimateTransactionFee() {
    // Step 1: Ask user for amount to send
    let input = prompt("Unatuma Ngapi? (KES):");

    // Step 2: Convert input to number
    let amountToSend = Number(input);

    // Step 3: Check if input is valid
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("Tafadhali weka kiasi cha pesa halali.");
        return;
    }

    // Step 4: Calculate 1.5% fee
    let calculatedFee = amountToSend * 0.015;

    // Step 5: Apply min (10) and max (70)
    let finalFee = Math.max(10, Math.min(70, calculatedFee));

    // Step 6: Round to nearest whole number
    finalFee = Math.round(finalFee); // Optional, but makes it cleaner

    // Step 7: Calculate total to be debited
    let totalDebit = amountToSend + finalFee;

    // Step 8: Print result
    console.log("Sending KES ${amountToSend}:");
    console.log("Calculated Transaction Fee: KES ${finalFee}");
    console.log("Total amount to be debited: KES ${totalDebit}");
    console.log("\nSend Money Securely!");
}