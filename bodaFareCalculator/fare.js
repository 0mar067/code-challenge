function calculateBodaFare() {
    // Step 1: Ask the user for distance
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");

    // Step 2: Convert input to number
    let distanceInKm = Number(input);

    // Step 3: Check if input is valid
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Tafadhali weka idadi ya kilometer yenye maana.");
        return;
    }

    // Step 4: Define the fare rules
    const baseFare = 50;      // KES
    const chargePerKm = 15;   // KES per km

    // Step 5: Calculate total fare
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    // Step 6: Print the result in Swahili style!
    console.log("Uko kwote? Io ni ${distanceInKm} km:");
    console.log("Ukikalia Pikipiki: KES ${baseFare}");
    console.log("Mpaka Uko: KES ${distanceInKm * chargePerKm}");
    console.log("Total: KES ${totalFare}");
    console.log("\nPanda Pikipiki!");
}