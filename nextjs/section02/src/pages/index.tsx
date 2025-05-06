import SearchableLayout from '@/components/searchable-layout'
import style from './index.module.css'
import { ReactNode } from 'react';
import books from "@/mock/book.json"
import BookItem from '@/components/book-item';
import { InferGetServerSidePropsType } from 'next';

// ssr방식으로 사전 렌더링이 이루어진다. 
export const getServerSideProps = () => {
  // 컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수

  const data = "hello"

  return {
    props: {
      data,
    }
  }
}

export default function Home({
  data
}:InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(data)
  
  return <div className={style.container}>
    <section>
      <h3>지금 추천하는 도서</h3>
      {books.map((book) => <BookItem key={book.id} {...book}></BookItem>)}
    </section>
    <section>
      <h3>등록된 모든 도서</h3>
    </section>
  </div>
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}