let SampleArrays: string[] = ["A", "B", "CCD"];

for (let sampleArray of SampleArrays) {
    if (sampleArray == "B") {
        console.log(sampleArray);
    } else {
        console.log("Others")
    }
}