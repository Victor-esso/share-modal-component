import { Icon } from '@iconify/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import PropTypes from 'prop-types';


const SingleUser = ({ user, index, updatePrivilege }) => {


  const handlePrivilegeChange = (newPrivilege) => {
    updatePrivilege(index, newPrivilege);
  };


  return (
    <div className='horizontal justify-between w-full gap-2'>
            <div className=' w-[2.778rem] aspect-square  shrink-0 relative flex items-end justify-center '>
            <div className='w-full h-full rounded-full  overflow-hidden flex justify-center items-center' style={{backgroundColor:user.bg}}>
                <img src={"./images/" + user.photo} alt="" className='w-[2.778rem] -mb-[1px]' />
            </div>
            <div className=' absolute right-[-0.20rem]'>
                <div className='relative w-max h-max'>
                <Icon icon="ph:seal-check-fill"  className='text-[#00BDFA] text-lg z-10 relative' />
                <div className='absolute w-[13px] aspect-square abs-center bg-white rounded-full z-0'></div>
                </div>
            </div>
            </div>
            <div className='w-full h-full'>
                <h3 className='text-[.975rem] font-medium text-primary capitalize'>{user.name}</h3>
                <div className='text-[0.833rem] w-full overflow-x-scroll no-scrollbar relative h-[20px]'>
                <div className='w-max horizontal gap-2 absolute '>
                    <span className='capitalize font-medium' style={{color:user.color}}>{user.position}</span>
                    <div className='w-1 h-1 rounded-full text-[#9CA3AF] bg-[#9CA3AF]' ></div>
                    <span className='text-[#9CA3AF] text-line-1'>{user.email}</span>
                </div>
                </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger className='shrink-0 focus:outline-none'  >
                  <button className='shrink-0 text-[0.833rem] capitalize font-medium px-[0.833rem] py-[0.417rem] bg-[#F3F4F6] hover:bg-black/[.06] horizontal rounded-[0.695rem] horizontal gap-2 focus:outline-none'>
                    <span>{user.privilege}</span>
                    <Icon icon="solar:alt-arrow-down-linear" />
                  </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handlePrivilegeChange('Owner')} className={`horizontal gap-2 text-[.85rem] focus`}><Icon icon="solar:crown-line-bold" className='text-lg text-amber-500' /><span>Make Owner</span></DropdownMenuItem>
                <DropdownMenuItem onClick={() => handlePrivilegeChange('Can View')} className="horizontal gap-2 text-[.85rem]"><Icon icon="mdi:eye-check" className='text-lg' /><span>Can View</span></DropdownMenuItem>
                <DropdownMenuItem onClick={() => handlePrivilegeChange('Can Edit')} className="horizontal gap-2 text-[.85rem]"><Icon icon="mdi:file-text-edit" className='text-lg' /><span>Can Edit</span></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handlePrivilegeChange('Remove')} className="horizontal gap-2 text-red-600 hover:bg-gradient-to-b from-red-500 to-red-700 hover:!text-white text-[.85rem]"><Icon icon="mdi:trash-can-empty" className='text-lg ' /><span>Remove</span></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
    </div>
  )
}

SingleUser.propTypes = {
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updatePrivilege: PropTypes.func.isRequired,
};

export default SingleUser