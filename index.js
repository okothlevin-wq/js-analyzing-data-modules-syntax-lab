
// Required once, outside of combineUsers
require('datejs');

/*
 * Step 1: Create the combineUsers function with a rest argument
 * @param {...Array} args - An indeterminate amount of arrays 
 */
function combineUsers(...args) {
  // Step 2: Initialize the return object with a 'users' key
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and merge using spread operator
  args.forEach(arr => {
    combinedObject.users = [...combinedObject.users, ...arr];
  }
  );

  // Step 5: Get today's date in M/d/yyyy format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 6: Return the combined object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};