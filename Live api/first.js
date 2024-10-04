document.getElementById("btn1").addEventListener("click",dataDisplay);

async function dataDisplay(){

let table=`<table border="1" width="90%">
           <tr>
               <th> slug </th>
               <th> URL</th>
               <th> Title </th>
               <th> Content </th>
               <th> Image </th>
           </tr>

`

let api="https://jsonplaceholder.org/posts";
const obj=await fetch(api);
const data=await obj.json();

data.map((item)=>{

   table+=`<tr>
               <td> ${item.slug} </td>
               <td> ${item.url}</td>
               <td> ${item.title} </td>
               <td> ${item.status} </td>
               <td> <img src='${item.image}' width="100" height="100"> </td>
           </tr>
`    

})

table+="</table>";
document.getElementById("demo").innerHTML=table;


}