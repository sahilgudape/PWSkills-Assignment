const books = [
    {
        name : 'Rich Dad Poor Dad',
        Author : 'Robert T. Kiyosaki and Sharon Lechter',
        year : 1997
    },
    {
        name: 'The Psychology of Money',
        Author: 'Morgan Housel',
        year: 2014
    },
    {
        name: 'The 4 Hour Work Week',
        Author: 'Timothy Ferriss',
        year: 2017
    },
    {
        name: 'How to Win Friends and Influence People',
        Author: 'Dale Carnegie',
        year: 1936
    },
    {
        name: 'The 48 Laws of Power',
        Author: 'Robert Greene',
        year: 1998
    },
]

const filteredBooks = books.filter((book) =>{
    return book.year >=2010
})

const returnFilteredBooks = filteredBooks.map((book)=>{
    return{
        ...book,
        Author: book.Author.toUpperCase(),
    };
})

console.log(returnFilteredBooks);