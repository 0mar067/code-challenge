function estimateTransactionFee() {
    //  Ask user for amount to send
    let input = prompt("Unatuma Ngapi? (KES):");

    // Convert input to number
    let amountToSend = Number(input);

    // Check if input is valid
    if (isNaN(amountToSend) || amountToSend <= 0) {
        console.log("input the correct amount.");
        return;
    }

    //  Calculate 1.5% fee
    let calculatedFee = amountToSend * 0.015;

    //  Apply min (10) and max (70)
    let finalFee = Math.max(10, Math.min(70, calculatedFee));

    //  Round to nearest whole number
    finalFee = Math.round(finalFee); // Optional, but makes it cleaner

    //  Calculate total to be debited
    let totalDebit = amountToSend + finalFee;

    //  Print result
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${finalFee}`);
    console.log(`Total amount to be debited: KES ${totalDebit}`);
}
estimateTransactionFee();