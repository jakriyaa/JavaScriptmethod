const car={
    clolor: "red",
    price:100000,
    speed:"highspeed",
    'comp-any':"To Yo Ta"
}
// Object এর value/key যদি অন্যরকম হয় তাহলে এইভাবে ডিক্লিয়ার করা হয়।
console.log(car['comp-any'])
// আর Normally Object থেকে একটা মান বের করার জন্য . দিয়েই মান বের করা যায়।
console.log(car.clolor)