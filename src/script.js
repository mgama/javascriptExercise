//Find duplicates in an array
//This iterates on the array using 2 loops
function check_for_duplicate_values_in_array(test_array) {
  let duplicatesArray = [];

  for(var i = 0; i < test_array.length; i++) {
    for(var j = i + 1; j < test_array.length; j++) {
      if(test_array[i] === test_array[j]){
        //Duplicate value found
        console.log('Found duplicate value ' + test_array[i]);
        if(!duplicatesArray.includes(test_array[i])){
          duplicatesArray.push(test_array[i]);
        }
      }
    }
  }
  console.log('The current duplicatesArray length is ' + duplicatesArray.length);
  return duplicatesArray;
}
var testArray = [1,2,2,3];
console.log(check_for_duplicate_values_in_array(testArray));

var testArrayTwo = 'ttstring';
console.log(check_for_duplicate_values_in_array(testArrayTwo));

var testArrayThree = 'ttstringgg';
console.log(check_for_duplicate_values_in_array(testArrayThree));

var testArrayFour = 'four';
console.log(check_for_duplicate_values_in_array(testArrayFour));

var testArrayFive = '1';
console.log(check_for_duplicate_values_in_array(testArrayFive));

var testArraySix = ['car', 'car', 'house', 'home', 'house'];
console.log(check_for_duplicate_values_in_array(testArraySix));

//Find duplicates in an array using index approach and using iterable function forEach
//This only works for array inputs, and not for string values
function find_duplicates_by_indexes(test_array) {
  var duplicatesArray = [];
  if(Array.isArray(test_array)) {
    console.log('test_array ' + test_array + ' was detected as an array');
    
    test_array.forEach((item, index) => {
      if(test_array.indexOf(item) !== index) {
        duplicatesArray.push(item);
      }
    });
    console.log('From find_duplicates_by_indexes ' + duplicatesArray);
  } else {
    console.log('Warning: test_array value ' + test_array + 'is not an array');
  }
  return duplicatesArray;
}

console.log(find_duplicates_by_indexes(testArray));
console.log(find_duplicates_by_indexes(testArrayTwo));
console.log(find_duplicates_by_indexes(testArrayThree));
console.log(find_duplicates_by_indexes(testArrayFour));
console.log(find_duplicates_by_indexes(testArrayFive));
console.log(find_duplicates_by_indexes(testArraySix));

