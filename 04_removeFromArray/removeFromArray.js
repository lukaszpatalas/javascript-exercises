// Function is taking variables store and forDeletion
// then use for loop to search forDeletion in store
// try remove forDeletion from store using splice()
// return store

const removeFromArray = function (store, ...forDeletion) {
    for (const element of forDeletion) {
        for (let a = 0; a < store.length; a++) {
            if (store[a] === element) {
                store.splice(a, 1);
            }
        }
    }
    return store;
};

// Do not edit below this line
module.exports = removeFromArray;
