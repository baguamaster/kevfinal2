google.books.load();

function previewBook() {
    var isbn = $("#isbn").val();
    console.log(isbn)
    //sessionStorage.setItem("isbn",isbn); //session storage was used as workaround but not good to use
    return (isbn);
}

function initialize() {
    previewBook();
    var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
    var isbn = previewBook()
    //var isbnNum = sessionStorage.getItem("isbn");
    console.log("ISBN:" + isbn)
    viewer.load("ISBN:" + isbn);

}


