let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}


sportsOne.push("Baseball");
sportsOne.push("Bike");

for (let tempSport of sportsOne) {
    console.log(tempSport);
}