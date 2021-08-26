const user = { id: 11, name: 'Gorib Amir', job: 'actor' };
const stringified = JSON.stringify(user);

// console.log(user);
// console.log(stringified);   

const shop = {
    name: 'alia bhat',
    address: 'ranavir road',
    profit: 1000,
    products: ['laptop', 'mobile', 'pepsi'],
    woner: {
        name: 'Alia',
        profesion:'actor'
    },
    isExpensive: false
};
const shopStingigfid = JSON.stringify(shop);
// console.log(shop);
console.log(shopStingigfid);
const converted = JSON.parse(shopStingigfid);
console.log(converted.woner);