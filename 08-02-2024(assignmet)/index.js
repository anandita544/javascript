let library=[];
function Book(id,title,author)
{
    this.id=id;
    this.title=title;
    this.author=author;
    this.isBorrowed=false;
    
}

function addBook(id,title,author){
    
    const book = new Book(id, title, author);
    library.push(book);
}
    
    

function borrowBook(id)
{   const book = library.find(book => book.id === id)
    
    if(isBorrowed==false){
    isBorrowed==true;
}
else{
    console.log("book is not available");
}
}
function returnBook(id){
    isBorrowed==false;
}
function listAvailableBooks()

{
    for(i=0;i<library.length;i++)
    {
        if(isBorrowed==false)
        {
            console.log(library[i]);
    }
}
}
function searchBook(title)
{
    for(i=0;i<library.length;i++)
    {
        if(library.title==title)
        {
            console.log(i);
        }
        else{
            console.log("null");
        }
    }
}

let book1=new Book(1001,"making india awesome","chetan bhagat",false);
addBook();

let book2=new Book(1002,"one indian girl","chetan bhagat",false);
addBook(1002,"one indian girl","chetan bhagat",false);

let book3=new Book(1003,"a river sutra","gita mehta",false);
addBook();