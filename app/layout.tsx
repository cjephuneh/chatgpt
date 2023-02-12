import '../styles/globals.css'
import SideBar from '../components/SideBar'
import { SessionProvider } from '../components/SessionProvider'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Login from '../components/Login'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
      <SessionProvider session={session}>
        {!session ? (
          <Login />
        ):(
          <div className='flex'>
            <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
            <SideBar />
            </div>

            {/*ClientProvider - Notifications*/}
          
          
          <div className="bg-[#343541] flex-1">{children}</div>

          </div>
        )}
        </SessionProvider>
      </body>
    </html>
  )
}
