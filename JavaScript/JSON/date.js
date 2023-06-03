
// Serializing and Deserializing JSON with Date objects

const data = {
    name: 'ganesh',
    birthDate: new Date()
};

const serializedData = JSON.stringify(data);
console.log(serializedData);

const deserializedData = JSON.parse(serializedData);
console.log(deserializedData.birthDate);