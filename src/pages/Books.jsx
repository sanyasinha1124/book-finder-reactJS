// File: src/pages/Books.jsx
// ---------------------------
import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import BookCard from '../components/BookCard'


export default function Books(){
const [query, setQuery] = useState('javascript')
const [books, setBooks] = useState([])
const [loading, setLoading] = useState(false)


useEffect(() => {
search(query)
}, [])


const search = async (q) => {
if (!q) return
setLoading(true)
try{
const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&maxResults=20`)
const data = await res.json()
setBooks(data.items || [])
}catch(err){
console.error(err)
setBooks([])
}finally{
setLoading(false)
}
}


return (
<div className="space-y-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<h2 className="text-2xl font-semibold">Library</h2>
<div className="w-full md:w-1/2">
<SearchBar onSearch={(q)=>{ setQuery(q); search(q) }} placeholder="Find books, authors or ISBN" />
</div>
</div>


{loading ? <p>Loading...</p> : (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
{books.map(b => (
<BookCard book={b} key={b.id} />
))}
</div>
)}


</div>
)
}