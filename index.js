// let str=prompt("ad yaz")
// let regex=new RegExp("[A-Z]{1}[a-z]{0,} [A-Z]{1}[a-z]{0,}")

// if(regex.test(str)==true){
//     console.log("ad duzdur")
// }
// else{
//     console.log("duz ad yaz")
// }

// let str="color colour"
// let regex=new RegExp("colo[u]?r")
// console.log(regex.test(str))

// let str=prompt("eska")
// let regex=new RegExp("gr[e|a]?y")
// console.log(regex.test(str))

let number=prompt("nomreni yaz")
let regex=new RegExp("([+]994)-(077|070|055|050)-[0-9]{3}-[0-9]{2}-[0-9]{2}")
if(regex.test(number)===true){
    console.log("nomre duzdur")
}
else{
    console.log("nomre sehvdir")
}