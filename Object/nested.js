// Nested এর মানে হলো Object এর মাঝে আরো Object এর নির্দিষ্ট মান বের করার জন্য বের করা হয়।
const collage={
    name: "Netrakona Government School & Collage",
    class:['10','9'],
    depertment:['Science','Comarce','Samajik'],
    uniq:{
        color:'blue',
        room:'Air Condiotn',
        module:{
            first:'online',
            second:'Offliene'
        }
    }
}
// Onject এর মানকে চেঞ্জ করার জন্যও একই নিয়ম ফলো করেত হয়।
collage.uniq.module.first='class ei hoy na'
// আবার যদি কেও অবজেক্ট এর ভিতরে গিয়ে কোন arrey এর মান পরিবর্তন করতে চায় তাহলে এইভাবে করা যায়।
collage.depertment[2]="Orthoniti"
console.log(collage.depertment[2])