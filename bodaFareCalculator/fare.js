function calculateBodaFare() {
    //  Ask the user for distance
    let input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");

    // Convert input to number
    let distanceInKm = Number(input);

    //  Check if input is valid
    if (isNaN(distanceInKm) || distanceInKm < 0) {
        console.log("Tafadhali weka idadi ya kilometer yenye maana.");
        return;
    }

    //  Define the fare rules
    const baseFare = 50;      // KES
    const chargePerKm = 15;   // KES per km

    // Calculate total fare
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    // Print the result in Swahili style!
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}
calculateBodaFare();