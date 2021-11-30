//process.argv is an array containing the command line arguments. Need to slice it by 2 in order to add additional command line arguments
const args = process.argv;
let alarmTimer = args.slice(2);

alarmTimer.sort;

for (const num of alarmTimer) {
  if(num > 0 || NaN) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num * 1000); //1 sec
    
  }
};


//TEST CASES

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.