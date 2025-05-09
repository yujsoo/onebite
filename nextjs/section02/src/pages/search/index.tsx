import SearchableLayout from '@/components/searchable-layout'
import { useRouter } from "next/router"
import { ReactNode } from 'react';
import books from "@/mock/book.json"
import BookItem from '@/components/book-item';


export default function Page(){
    return (
        <div>{books.map((book) => <BookItem key={book.id} {...book}></BookItem>)}</div>
    )
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
  }