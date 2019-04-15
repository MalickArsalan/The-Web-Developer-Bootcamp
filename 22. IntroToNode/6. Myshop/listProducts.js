let faker = require('faker');
console.log('='.repeat(20));
console.log("welcome to my shop!".toUpperCase());
console.log('='.repeat(20));
for (let i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"))
}
