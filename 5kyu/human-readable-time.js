//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
// -HH = hours, padded to 2 digits, range: 00 - 99
// -MM = minutes, padded to 2 digits, range: 00 - 59
// -SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

//Parameters - Given a non-negative integer that does not exceed 359999, which indicates time in seconds.
//Return - Return a value in hours, minutes, and seconds that is in the format of HH:MM:SS.
//Examples - 
    // strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
    // strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
    // strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
    // strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
    // strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
    // strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
    // strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
    // strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
    // strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
    // strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
////Pseudo Code - 
    //1. Divide seconds by 3600 to get the number of full hours by using a Math.floor
    //2. Subtract the time held by the variable hours from the total seconds.
    //3. With the remaining seconds divide by 60 to get the full minutes by using a Math.floor
    //4. Subtract the time held by the variable minutes from the total seconds.
    //5. Turn hours, minutes and seconds into strings and padd zeroes in case their value is less than 10

function humanReadable (seconds) {
    let hours = Math.floor(seconds/3600)
    hours = hours.toString().padStart(2,'0')
    seconds = seconds - hours*3600
    let minutes = Math.floor(seconds/60)
    minutes = minutes.toString().padStart(2,'0')
    seconds = seconds - minutes * 60
    seconds = seconds.toString().padStart(2,'0')
    return `${hours}:${minutes}:${seconds}`;
}
