var films = [];
var fDao= new filmDAO();

function addFilm(e, form) {
    e.preventDefault();

    // obtengo todos los datos del formulario
    var filmName = form.filmName.value;
    var filmYear = Number(form.filmYear.value);
    var filmGenre = form.filmGenre.value;
    var filmVoters = Number(form.filmVoters.value);
    var filmTotalVotes = Number(form.filmTotalVotes.value);

    // me fijo si la pelicula ya esta cargada
    var existingFilm = getFilm(filmName);

    // si esta cargada?
    if (existingFilm != undefined) {
        alert("La película ya está en nuestra base de datos");

        // si no esta cargada
    } else {
        var film = {
            name: filmName,
            year: filmYear,
            genre: filmGenre,
            voters: filmVoters,
            totalVotes: filmTotalVotes,
            raiting: getRaiting(filmVoters, filmTotalVotes)
        };

        // agrego la pelicula al array
        films.push(film);

        // limpio el formulario
        cleanAddFilmForm(form);

        // la agrego a la tabla
        addFilmToTable(film);
        fDao.addfilm(film);
    }
}

function getRaiting(voters, totalVotes) {
    return (totalVotes / voters).toFixed(2);
}

function getFilm(filmName) {
    // return films.find(x => x.name == filmName);
    return films.find(function (film) {
        return film.name.toLowerCase() == filmName.toLowerCase();
    });
}

function cleanAddFilmForm(form) {
    form.filmName.value = "";
    form.filmYear.value = "";
    form.filmGenre.selectedIndex = 0;
    form.filmVoters.value = "";
    form.filmTotalVotes.value = "";
}

function addFilmToTable(film) {
    var tableBody = document.getElementById('filmsTableBody');
    var newFilmRow = tableBody.insertRow();
    newFilmRow.classList.add('text-center');

    var nameCell = newFilmRow.insertCell(0);
    nameCell.innerHTML = film.name;

    var yearCell = newFilmRow.insertCell(1);
    yearCell.innerHTML = film.year;

    var genreCell = newFilmRow.insertCell(2);
    genreCell.innerHTML = film.genre;

    var averageCell = newFilmRow.insertCell(3);
    averageCell.innerHTML = film.raiting;

    var deleteAction = document.createElement('span');
    deleteAction.className = "glyphicon glyphicon-remove clickable";
    deleteAction.addEventListener("click", function () {
        var row = getRowByFilmName(film.name);
        tableBody.deleteRow(row.rowIndex - 1);
    });
    var actionsCell = newFilmRow.insertCell(4);
    actionsCell.appendChild(deleteAction);

}

function getRowByFilmName(filmName) {
    var tableBody = document.getElementById('filmsTableBody');

    for (var i = 0; i < tableBody.rows.length; i++) {
        var actualRow = tableBody.rows[i];
        if (actualRow.cells[0].innerText == filmName)
            return actualRow;
    }
}

function filterFilms(e, filterForm) {
    e.preventDefault();

    var filteredFilms = [];
    var filterName = filterForm.nameFilter.value;
    var filterYear = filterForm.yearFilter.value;
    var filterGenre = filterForm.genreFilter.value;
    var filterRaiting = filterForm.raitingFilter.value;

    films.forEach(function (film) {
        if (filterName != "" && film.name.indexOf(filterName) == -1)
            return;

        if (filterYear != "" && film.year < Number(filterYear))
            return;

        if (filterGenre != "nofilter" && film.genre != filterGenre)
            return;

        if (filterRaiting != "" && film.raiting < Number(filterRaiting))
            return;

        filteredFilms.push(film);
    });

    renderTable(filteredFilms);
}

function renderTable(films) {

    // limpio el body de la tabla
    var tableBody = document.getElementById('filmsTableBody');
    tableBody.innerHTML = "";

    // agrego el array de films a la tabla
    films.forEach(function (film) {
        addFilmToTable(film);
    });
}

function cleanFiltersAndReRender() {
    var filterForm = document.getElementById('filterFilmsForm');

    filterForm.nameFilter.value = "";
    filterForm.yearFilter.value = "";
    filterForm.genreFilter.selectedIndex = 0;
    filterForm.raitingFilter.value = "";

    renderTable(films);
}

function orderByNames(){
    var iconElement = document.getElementById("orderByName")
   
    films.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        
        if (nameA > nameB) return 1;

        return 0;
    
});
//iconElement.classList.remove();
//iconElement.classList.add()

//var iconElement=document.getElementById("orderByNameIcon");
//if(iconElement.classList.contains("glyphicon-sort-by-alphabet-alt")) {

}
renderTable(films)
