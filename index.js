let a = document.getElementById("input");
let button = document.getElementById("btn");
let b = document.querySelector(".sec");
// let item=document.querySelectorAll(".dropdown-item");
// for(let i=0;i<item.length;i++){
  //   console.log(item[i].innerHTML);
  // }
  
  let item=document.querySelectorAll(".dropdown-item");
  let item2=document.querySelectorAll(".dropdown-item2");

  async function show() {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=961d58a4d48add64764c344bc1db77ae&region=IN&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=hi`;
    let req = await fetch(url);
    let res = await req.json();
    let data = res.results;
    console.log(data);
  
    b.innerHTML=""
    data.map((e) => {
      // e.preventDefault();
      let title = e.title
      let poster = e.poster_path;
      let release_date = e.release_date;
  
      b.innerHTML += `
        <div class=" cards card px-3 my-4"  onclick="dataa(this)" style="width: 16rem;">
        <p id="id">${e.id}</p>
        <img class="card-img-top mx-auto my-2 border border-3 border-danger rounded-end shadow-lg bg-body-tertiary rounded"  src="https://image.tmdb.org/t/p/w500/${poster}" alt="Image Not found">
        <h4>Name :-${title}</h4>
        <h5>Release :-${release_date}</h5>
        </div>
        `
    }) 
}
show()



  async function movies() {
    item.forEach((bt)=>{
      bt.addEventListener('click',async (e)=>{ 
        e.preventDefault();
    let choice=e.target.innerHTML
    console.log(choice);
    let url = `https://api.themoviedb.org/3/movie/${choice}?api_key=961d58a4d48add64764c344bc1db77ae`;
    let req = await fetch(url);
    let res = await req.json();
    let data = res.results;
    console.log(data);
  
    b.innerHTML=""
    data.map((e) => {
      // e.preventDefault();
      let title = e.title
      let poster = e.poster_path;
      let release_date = e.release_date;
  
      b.innerHTML += `
        <div class=" cards card px-3 my-4"  onclick="dataa(this)" style="width: 16rem;">
        <p id="id">${e.id}</p>
        <img class="card-img-top mx-auto my-2 border border-3 border-danger rounded-end shadow-lg bg-body-tertiary rounded"  src="https://image.tmdb.org/t/p/w500/${poster}" alt="Image Not found">
        <h4>Name :-${title}</h4>
        <h5>Release :-${release_date}</h5>
        </div>
        `
    }) 
      })
    })
}
movies()

async function tvShow() {
  item2.forEach((bt)=>{
    bt.addEventListener('click',async (e)=>{ 
      e.preventDefault();
  let choice=e.target.innerHTML
  console.log(choice);
  let url = `https://api.themoviedb.org/3/tv/${choice}?api_key=961d58a4d48add64764c344bc1db77ae`;
  let req = await fetch(url);
  let res = await req.json();
  let data = res.results;
  console.log(data);

  b.innerHTML=""
  data.map((e) => {
    // e.preventDefault();
    let title = e.original_name
    let poster = e.poster_path;
    let release_date = e.first_air_date;

    b.innerHTML += `
      <div class=" cards card px-3 my-4"  onclick="dataa(this)" style="width: 16rem;">
      <p id="id">${e.id}</p>
      <img class="card-img-top mx-auto my-2 border border-3 border-danger rounded-end shadow-lg bg-body-tertiary rounded"  src="https://image.tmdb.org/t/p/w500/${poster}" alt="Image Not found">
      <h4>Name :-${title}</h4>
      <h5>Release :-${release_date}</h5>
      </div>
      `
  }) 
    })
  })
}
tvShow()












async function findmovie() {
  b.innerHTML = ""
  let search = a.value;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=bf120023c7b06e0129123be41a466fe6&&query=${search}`;

  let req = await fetch(url);
  let res = await req.json();
  let data = res.results;
  console.log(data)


  data.map((e) => {
    // e.preventDefault();
    let title = e.title
    let poster = e.poster_path;
    let release_date = e.release_date;

    b.innerHTML += `
        <div class=" cards card px-3 my-4" onclick="dataa(this)"  style="width: 16rem;">
        <p id="id">${e.id}</p>
        <img class="card-img-top mx-auto my-2 border border-3 border-danger rounded-end shadow-lg bg-body-tertiary rounded"  src="https://image.tmdb.org/t/p/w500/${poster}" alt="Image Not found">
        <h4>Name :-${title}</h4>
        <h5>Release :-${release_date}</h5>
        </div>
        `
  })
}

button.addEventListener('click', async function (e) {
  // e.parentNode.removeChild();
  b.innerHTML = ""
  e.preventDefault();
  let search = a.value;
  let url = `https://api.themoviedb.org/3/search/movie?api_key=bf120023c7b06e0129123be41a466fe6&&query=${search}`;

  let req = await fetch(url);
  let res = await req.json();
  let data = res.results;
  console.log(data)


  data.map((e) => {
    // e.preventDefault();
    let title = e.title
    let poster = e.poster_path;
    let release_date = e.release_date;

    b.innerHTML += `
      <div class="card cards px-3 my-4" onclick="dataa(this)"  style="width: 16rem;">
      <p id="id">${e.id}</p>
      <img class="card-img-top mx-auto my-2 border border-3 border-danger rounded-end shadow-lg bg-body-tertiary rounded"  src="https://image.tmdb.org/t/p/w500/${poster}" alt="Image Not found">
      <h4>Name :-${title}</h4>
      <h5>Release :-${release_date}</h5>
      </div>
      `
  })
})

async function dataa(e) {
  let mid = e.firstChild.nextSibling.innerHTML;
  console.log(mid);
  let url = `https://api.themoviedb.org/3/movie/${mid}?api_key=961d58a4d48add64764c344bc1db77ae`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  b.innerHTML = "";

  let title = data.title
  let poster = data.poster_path;
  let release_date = data.release_date;
  b.innerHTML += `
  <div class="card cards px-3 my-4" onclick="dataa(this)"  style="max-width: 840px;">
      <div class="row">
      <div class="col-md-4">
      <img class="card-img-top mx-auto my-2 border border-3 border-danger rounded-end shadow-lg bg-body-tertiary rounded"  src="https://image.tmdb.org/t/p/w500/${poster}" alt="Image Not found">
    </div>
    <div class="col-md-8 d-flex justify-content-center align-items-start flex-column">
    <h1>Name :-${title}</h1>
    <h3>Release :-${release_date}</h3>
    <h5>Overview:-${data.overview}</h5>
    </div>
    </div>
      </div>
  `
}





// let c=document.querySelectorAll(".cards");
//         c.addEventListener('click',(e)=>{
//           console.log(e)
//         })   