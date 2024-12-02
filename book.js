function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(read == true){
        return "The " + this.title + " by " + this.author + ", " + this.pages + " pages, read"
        }else{
        return "The " + this.title + " by " + this.author + ", " + this.pages + " pages, not read yet"   
        }

    };
}
const hobbit = new Book('hobbit','su autor',300,false);
console.log(hobbit.info());
const principito = new Book('el principito','su autor', 95, true);
console.log(principito.info());