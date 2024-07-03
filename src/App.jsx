import { Icon } from '@iconify/react';
import frostedLink from "./assets/frosted-link.png"
import SingleUser from './components/SingleUser';
import {initialUsers} from "./data/user"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [newPrivilege , setNewPrivilege] = useState('Can edit');

  const updatePrivilege = (index, newPrivilege) => {
    if (newPrivilege === 'Remove') {
      setUsers(users.filter((_, i) => i !== index));
    } else {
      setUsers(users.map((user, i) => 
        i === index ? { ...user, privilege: newPrivilege } : user
      ));
    }
  };


  return (
    <>
      <section className='grid place-items-center w-full h-[100dvh] bg-[#FAFAFA] no-select'>

        <div className='w-full max-w-[500px] md:aspect-[1/1.38] max-md:h-[100dvh] md:shadow-md md:rounded-[30px] bg-gradient-to-b from-[rgba(32,197,251,0.3)] from-0% to-30% to-[rgba(32,197,251,0)] overflow-hidden vertical gap-2 p-[1.389rem]'>

          {/* Main content */}
          <div className='w-full h-max vertical gap-4'>
              {/* Main Icon */}
              <div className='w-full grid place-items-center shrink-0'><img src={frostedLink} alt="" className='w-[8.333rem]' /></div>

              {/* Title and sub title */}
              <div className='w-full vertical gap-1 text-center *:w-full shrink-0'>
                <h1 className='font-semibold text-[1.389rem] txt-primary'>Invite People to Your Dashboard</h1>
                <h4 className='text-[0.833rem] text-[#6B7280]'>Share your file with others to collect feedback, collaborate, facilitate idea and enhance communications</h4>
              </div>

              {/* Input */}
              <div className='vertical md:horizontal w-full gap-2 shrink-0'>
                <div className='w-full horizontal h-[40px] border-[1.67px] border-solid border-[#E5E7EB] rounded-[0.833rem] pl-[0.833rem] py-[0.2rem] pr-[0.2rem]'>
                  <input type="email" placeholder='Enter email address' className='w-full focus:outline-none bg-transparent text-[.975rem] txt-primary font-medium placeholder:font-normal' />

                  <DropdownMenu>
                    <DropdownMenuTrigger className='shrink-0 focus:outline-none h-full'  >
                      <button className='horizontal gap-1 shrink-0 bg-black/[.03] hover:bg-black/[.06] txt-primary h-full rounded-[0.633rem] font-medium px-[0.833rem]'>
                        <span className='text-[0.833rem] '>{newPrivilege}</span>
                        <Icon icon="solar:alt-arrow-down-linear" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setNewPrivilege('Owner')} className="horizontal gap-2 text-[.85rem]"><Icon icon="solar:crown-line-bold" className='text-lg text-amber-500' /><span>Make Owner</span></DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setNewPrivilege('Can view')} className="horizontal gap-2 text-[.85rem]"><Icon icon="mdi:eye-check" className='text-lg' /><span>Can View</span></DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setNewPrivilege('Can edit')} className="horizontal gap-2 text-[.85rem]"><Icon icon="mdi:file-text-edit" className='text-lg' /><span>Can Edit</span></DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <button className='text-[0.969rem] font-medium shrink-0 md:w-max w-full  h-[40px] px-4 btn-primary text-white rounded-[0.833rem] btn-shadow'>Send Invitations</button>
              </div>
          </div>
          
          <div className='w-full h-full overflow-y-scroll overflow-x-hidden shrink-1 py-2 vertical md:scrollbar scroll-smooth gap-[1.111rem]'>
                {users.map((user,index)=>(
                  <SingleUser 
                    key={index} 
                    user={user} 
                    index={index} 
                    updatePrivilege={updatePrivilege}  
                  />
                ))}
          </div>

          {/* Bottom Section */}
          <div className='w-full h-auto shrink-0 horizontal justify-between max-sm:vertical max-sm:items-center max-sm:gap-3'>

            <button className='horizontal gap-2 px-1 py-2 hover:bg-black/[.03] rounded-md max-sm:px-3 txt-primary'>
              <Icon icon="solar:lock-bold" />
              <span className='text-xs font-medium'>Only people with access can view</span>
              <Icon icon="solar:alt-arrow-down-linear" />
            </button>

            <button className='horizontal gap-1 border-[1.67px] border-solid border-primary-text rounded-xl  px-3 py-[.3rem] hover:btn-primary hover:btn-shadow txt-primary hover:text-white'>
              <Icon icon="solar:link-bold" className='text-[1.2rem]' />
              <span className='text-[.88rem] font-medium'>Copy link</span>
            </button>

          </div>
        </div>

      </section>
    </>
  )
}

export default App
