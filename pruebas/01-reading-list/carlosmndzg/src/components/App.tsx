import BooksProvider from '../context/BooksProvider'
import ContentBox from './ContentBox'
import Header from './Header'
import NotPendingBooksBox from './NotPendingBooksBox'
import PendingBooksBox from './PendingBooksBox'

const App = () => {
  return (
    <BooksProvider>
      <Header />
      <ContentBox>
        <NotPendingBooksBox />
        <PendingBooksBox />
      </ContentBox>
    </BooksProvider>
  )
}

export default App
