'use client'
import NewChat from "../components/NewChat"
import { useSession, signOut } from 'next-auth/react'

function SideBar(){
    const {data: session } = useSession();
    
    return(
        <div className="p-2 flex flex-col h-screen">
            <div className="flex-1">
                <div>
                    <NewChat />
                    <div>

                    </div>
                </div>


            </div>
            {session && (
                <img 
                    onClick={() => signOut()}
                    src={session.user?.image!} 
                    alt='Profile pic'
                    className='h-12 w-12 rounded-full cursor-pointer mx-auto
                    hover:opacity-50'
                />
            )}
        </div>
    )
}

export default SideBar