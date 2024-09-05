const mobile={
    brnad: 'Samsumng',
    price:25000,
    ram:'4gb',
    color:'Blue',
    cemera:'12px',
}
// এইটা কিছুটা for of এর মতো কিন্ত in শুধু Objecte এ কাজ করে।
for(const subject in mobile){
    console.log(subject)
    console.log(mobile[subject])
}