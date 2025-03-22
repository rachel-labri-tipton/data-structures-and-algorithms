function deepMerge(target, source) {
    // Iterate over each key in the source object
    for (const key in source) {
        // Check if the key is a property of the source object
        if (source.hasOwnProperty(key)) {
            // If both target and source are objects
            if (typeof target[key] === 'object' && target[key] !== null && typeof source[key] === 'object' && source[key] !== null) {
                // Merge properties of the objects recursively
                target[key] = deepMerge(target[key], source[key]);
            } else {
                // Otherwise, assign the value from source to target
                target[key] = source[key];
            }
        }
    }
    return target;
}

// Example usage:
const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    }
};

const obj2 = {
    b: {
        d: 4,
        e: 5
    },
    f: 6
};

const mergedObject = deepMerge(obj1, obj2);
console.log(mergedObject);


//By including the check target[key] !== null and source[key] !== null, we ensure that we're only trying to merge objects that are not null. This enhances the robustness of the merging function, preventing potential errors during runtime.