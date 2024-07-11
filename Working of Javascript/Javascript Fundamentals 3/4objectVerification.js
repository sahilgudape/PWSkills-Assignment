function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

const object = {Name: 'abc', age: '20'};
console.log(hasProperty(object, 'Name'));
console.log(hasProperty(object, 'address'));