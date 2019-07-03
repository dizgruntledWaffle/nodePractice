import React from 'react'
import { render} from 'react-dom'
import Library from './Library'

 let bookList = [
    {"title": "The Sun Also Rises", "author": "Ernest Hemingway", "pages": 89},
    {"title": "stuff", "author": "julie", "pages": 290},
    {"title": "what", "author": "lollie", "pages": 360}
 ]
    
render(
    <Library books={bookList}/>,
document.getElementById('root')
)


