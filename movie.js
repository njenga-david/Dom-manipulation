let movies=[
    {
    id:ceil(Math.ramdom()*1000),
    image:'https://unsplash.com/photos/a-man-dressed-as-a-mermaid-holding-a-spear-H5EW96bwj7k',
    title:'Best worriors',
    description:' best movie shows'
}
];

function displayMovies(){
    let html="";
      movies.forEach(movies=>{
        html+='<div class="item">
        <img src="${movie.image}" alt="">
            <h1>{movie.title}</h1>
            <p>{movie.title}</p>
            <button>Watch</button>';
      });


}