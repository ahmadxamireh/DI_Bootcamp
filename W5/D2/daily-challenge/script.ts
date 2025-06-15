/*
Daily Challenge: Union Type Validator

Create a function called validateUnionType(value: any, allowedTypes: string[]): boolean
that takes a value and an array of allowed types (as strings).
The function should return true if the value is one of the allowed types;
otherwise, it should return false. Demonstrate its usage by validating variables with different types.
 */

function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const type = typeof value;
    // Special case for null (because typeof null === 'object')
    if (value === null) {
        return allowedTypes.includes("null");
    }
    return allowedTypes.includes(type); // or: allowedTypes.some(type => typeof value === type)
}

// Expected: true (number is allowed)
console.log(validateUnionType(42, ["string", "number"]));

// Expected: true (string is allowed)
console.log(validateUnionType("hello", ["string"]));

// Expected: false (boolean is not allowed)
console.log(validateUnionType(true, ["number", "string"]));

// Expected: true (boolean is allowed)
console.log(validateUnionType(false, ["boolean"]));

// Expected: false (undefined is not allowed)
console.log(validateUnionType(undefined, ["string", "number"]));

// Expected: true (undefined is allowed)
console.log(validateUnionType(undefined, ["undefined"]));

// Expected: false (null is not allowed unless explicitly listed)
console.log(validateUnionType(null, ["number", "string"]));

// Expected: true (null is allowed)
console.log(validateUnionType(null, ["object", "null"])); // See note below

// Expected: true (object is allowed)
console.log(validateUnionType({name: "Ahmad"}, ["object"]));

// Expected: false (symbol is not allowed)
console.log(validateUnionType(Symbol("id"), ["string", "number"]));

// Expected: true (function is allowed)
console.log(validateUnionType(() => {}, ["function"]));

// Expected: true (null is allowed)
console.log(validateUnionType(null, ["null"]))