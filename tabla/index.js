let sortDirection=false;
let personData=[

  {name:'Dylan',age:31},
  {name:'Dylan',age:31},
  {name:'Dylan',age:31},
  {name:'Dylan',age:31},
];
window.onload=()=>{
loadTableData(personData);

}

function loadTableData(personData){


  const tableBody=document.getElementById('tableData');
  let dataHtml='';
  for(let person of personData){

dataHtml+=`<tr><td>${person.name}</td><td>${person.age}</td></tr>`;

  }
  console.log(dataHtml)
  tableBody.innerHTML=dataHtml;
}