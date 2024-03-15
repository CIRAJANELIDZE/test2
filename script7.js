
/* 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
  
ა) თუ რიცხვები ტოლია : a  და b ტოლია*/
function number (a, b) {
    if (a==b){
        return " a  და b ტოლია";
    }else if (a>b){
      return "a  მეტია b -ზე"
    }else{
        return" a  ნაკლებია  b -ზე"
    }
}  
     console.log(number(5,7));
        


/* 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), 
დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , false , თუ არ არის მეტი 100 ზე*/

 function numbers (c, d){
       
       if (c+d>100){
         return true
       } else {
           return false
       }
 }  
       console.log(numbers(50,60));

/* 3.დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას 
აღებულ ქულას ( ქულების ჯამს). ფუნქციას აქვს სამი პარამეტრი
პირველი პარამეტრი - 1 ქულიანების რაოდენობა
მეორე პარამეტრი -  2 ქულიანების რაოდენობა
მესამე - 3 ქულიანების რაოდენობა */

 let add =function (team1, team2, team3) {
    return (team1 +( team2 *2) +(team3*3));
 }
    console.log(add(1,2,3));

/* 4.დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, 
უნდა შექმნათ  start დან end-ჩათვლით  რიცხვების მასივი(მაგალითად თუ start არის 3 და 
end არის 6 მასივის ელემენტები უნდა იყოს [3,4,5,6] ) ( arr.push()- მასივში ელემენტის დამატება)*/

function sum (start,end){
    let arr = [ ]
    for (let i=start; i<end; i++){
       arr.push (i)

    } console.log(arr)
}      
       sum(1,7);
    

/*5. ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, დაწერეთ ფუნქცია 
რომელიც პერსონის ასაკის მიხედვით დაბეჭდავს 
თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია */

    let  person ={
    firstname: "cira",
    lastname : "janelidze",
    age : 37,
 }
   function isudalt(age){
    if (age<18){
        return("არასრულწლოვანია")

    }else{
        return ( "სრულწლოვანია")
    }
   }
     console.log(person.firstname,isudalt(person.age));

/*6.გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ.
 Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი)*/

  let phones = [ "iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
  for (let i=0; i< phones.length; i++){
    console.log(phones [i]);
  }

  /*7. Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), დაბეჭდეთ რიცხვები 1 დან
   num ის ჩათვლით ( გამოიყენეთ while ციკლი).*/

    const num = 23;
    let i=1;
    while ( i< 23){
        console.log(i);
       i++}
    
/*Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 14 - ის ჩათვლით , 
გამოიყენეთ სასურველი ციკლი ( for, while)*/

  const  k=1;
  for (k=2; a<13; k+=2){
    console.log(k);
  }

 



     