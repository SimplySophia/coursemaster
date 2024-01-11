function searchCourses() {
    //Get search input value
    var searchInputValue = document.getElementById('#courses').value;

    //perform the search
    alert('Choose your Courses: ' + searchInputValue);
}

var searchBtn = document.getElementById('searchBtn');

// add a click event listener
searchBtn.addEventListener('click', function(){
    //actions to perform when clicked
    alert('Upload Courses')
})

