// Object এ Key গুলো বের করার জন্য এই নিয়মটা  করা যায়//
const computer={
    brand:"Apple",
    price:30000,
    processor: "Intel",
    ssd:"512gb",
    motherboared:"gigbyte"
}
const keys=Object.keys(computer);
console.log(keys)

// আর যদি Value বের করতে হয় তাহলে এই নিয়মে বের করতে হবে।
const value=Object.values(computer);
console.log(value)