// Question No. 1: Value Detective
function describeValue(value) {
    let type = typeof value;
    let truthyOrFalsy;

    if (value) {
        truthyOrFalsy = "truthy";
    } else {
        truthyOrFalsy = "falsy";
    }

    return type + " | " + truthyOrFalsy;
}


// Question No. 2: Bangladesh Weekend Machine
function getDayType(day) {
    let lowerCaseDay = day.toLowerCase();

    switch (lowerCaseDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}


// Question No: 3: Username Gatekeeper
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}


// Question No. 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50; // Minimum fare for first 2 km

    // Calculate extra distance charge if more than 2 km
    if (distance > 2) {
        let extraKm = distance - 2;
        fare = fare + (extraKm * 15);
    }

    // Add waiting charges ///////
    let waitingCharge = waitingMinutes * 2;
    let totalFare = fare + waitingCharge;

    // Apply night charge if it is night time
    if (isNight === true) {
        let nightExtra = totalFare * 0.20;
        totalFare = totalFare + nightExtra;
    }

    return totalFare;
}


// Question No 5: Run Chase Commentator   //////
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
        return "Lost"
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate > 6 && requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
