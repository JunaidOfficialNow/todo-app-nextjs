import AddIcon from './components/AddIcon'
import PenIcon from './components/PenIcon'
import SearchIcon from './components/SearchIcon'
import UserIcon from './components/UserIcon'
import './globals.css'
export const metadata = {
  title: 'Todos',
  description: 'Manage your todos',
}

export default function RootLayout({
  children,
  collections,
}: {
  children: React.ReactNode
  collections: React.ReactNode
}) {
  return (
    <html lang="en">
  <body className='h-screen w-full bg-black '>
    <header className='bg-grad border-b border-b-bord h-[15%] text-white text-4xl flex justify-evenly fixed z-10 w-full top-0'>
      <div className='ms-7 w-auto mt-5 font-serif flex gap-3'>
        <PenIcon/>
        Todos

      </div>
      <div className='w-4/12'>

      </div>
      <div className='me-7 w-auto flex gap-3 h-full items-center'>
        <AddIcon/>
        <SearchIcon/>
        <UserIcon/>

      </div>

    </header>
    <main className='h-full  w-full '>
      <div className='border-r border-r-bord min-h-full w-2/12 float-left'>
        {collections}

      </div>
      <div className='h-[100%] w-10/12 float-left overflow-y-auto scrollable-div '>

        {children}

      </div>

    </main>
    
  </body>
    </html>
  )
}
