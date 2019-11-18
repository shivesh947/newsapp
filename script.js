function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

async function apisearch(namecoun)
{
const response = await fetch('https://newsapi.org/v2/top-headlines?country='+namecoun+'&apiKey=7c642db6ea3547b584cb66c897422530');
const myJson = await response.json();
// console.log(JSON.stringify(myJson));
var apidata=myJson
var data='';
console.log(myJson);
for(var i=0;i<10;i++)
{
  data=data+'<div class="card mb-4" key='+i+'><div class="row"><div class="col-md-4"> <img class="card-img" src='+apidata.articles[i].urlToImage+' /> </div> <div class="col-md-8"> <div class="card-body"> <h5 class="card-title">'+apidata.articles[i].title+'</h5> <p class="card-text">'+apidata.articles[i].description+' </p> <p class="card-text"> <small class="text-muted"><a href="'+apidata.articles[i].urlToImage+'">Read</a></small></p> </div> </div> </div>';
}
document.getElementById('newsheadline').innerHTML="<input type='hidden' id='count' value="+namecoun+" /><center><h1>LATEST NEWS</h1></center><br>"+data;
}

//  async function categoriessearch(namecat)
// {
// console.log('https://newsapi.org/v2/top-headlines?country='+countryname+'&category='+namecat+'&apiKey=7c642db6ea3547b584cb66c897422530')
// console.log(namecat);
// var countryname=document.getElementById('count').value;
// const response = await fetch('https://newsapi.org/v2/top-headlines?country='+countryname+'&category='+namecat+'&apiKey=7c642db6ea3547b584cb66c897422530');
// const myJson = await response.json();
// // console.log(JSON.stringify(myJson));
// var apidata=myJson
// var data='';
// console.log(myJson);
// for(var i=0;i<10;i++)
// {
//   data=data+'<div class="card mb-4"><div class="row"><div class="col-md-4"> <img class="card-img" src='+apidata.articles[i].urlToImage+' /> </div> <div class="col-md-8"> <div class="card-body"> <h5 class="card-title">'+apidata.articles[i].title+'</h5> <p class="card-text">'+apidata.articles[i].description+' </p> <p class="card-text"> <small class="text-muted"><a href="'+apidata.articles[i].urlToImage+'">Read</a></small></p> </div> </div> </div>';
// }
// document.getElementById('newsheadline').innerHTML="<center><h1>LATEST NEWS</h1></center><br>"+data;
// }

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
