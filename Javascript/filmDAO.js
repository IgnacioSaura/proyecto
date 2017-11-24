class filmDAO{
    getFilm(){

    }
    addfilm(film){
        return axios.post('http://localhost:3000/films', film)
}
updatefilm(film){
}
deletefilm(film){
filmDataAccesObject.deleteFilm(film)
.then(function(){
    films= films.filter(function(f));

}



//var FDAO = filmDAO();
//var film= {};
//FDAO.addfilm(film);