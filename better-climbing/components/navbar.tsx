import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Icon } from '@iconify/react'
import BC from '../public/logo.svg'
import mdiMenu from '@iconify/icons-mdi/menu'
import mdiMenuClose from '@iconify/icons-mdi/menu-close'
import Link from 'next/link'

type NavBarProps = {
  links: {
    name: string
    href: string
  }[]
}

const NavBar = ({ links }: NavBarProps) => (
  <div className='sticky top-0 z-40 flex items-center justify-center flex-shrink-0 h-16 px-8 py-4 shadow-md bg-slate-100/70 backdrop-filter'>
    <div className='flex items-center justify-between w-full max-w-7xl'>
      <Link href='/' passHref>
        <a className='flex items-end'>
          <BC width='30px' height='30px' />
          <span className='hidden mb-px ml-4 font-extrabold tracking-widest text-slate-900 md:block whitespace-nowrap'>
            BETTER COACHING
          </span>
        </a>
      </Link>
      {/* Links - Visible at and above md */}
      <nav className='hidden md:block md:ml-10 md:space-x-8'>
        {links.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className='font-medium text-gray-500 hover:text-gray-900'>
              {item.name}
            </a>
          </Link>
        ))}
        {/* <Link href='#'>
          <a className='font-medium text-indigo-600 hover:text-indigo-500'>
            Log in
          </a>
        </Link> */}
        <Link href='/cart'>
          <a className='font-semibold'>Cart</a>
        </Link>
      </nav>
      {/* Hamburger Menu - Visible below md */}
      <DropdownMenu className='md:hidden' links={links} />
    </div>
  </div>
)

type DropdownMenuProps = NavBarProps & Record<string, any>

function DropdownMenu({ links, ...delgated }: DropdownMenuProps) {
  return (
    <Popover {...delgated}>
      <Popover.Button className='inline-flex items-center p-2 text-base font-medium text-black rounded-md text-opacity-90 group hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
        {({ open }) =>
          open ? (
            <Icon icon={mdiMenuClose} className='w-6 h-6' />
          ) : (
            <Icon icon={mdiMenu} className='w-6 h-6' />
          )
        }
      </Popover.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'>
        <Popover.Panel
          as='nav'
          className='absolute right-0 z-10 px-2 py-4 transition origin-top-right transform top-full md:hidden'>
          <div className='p-2 overflow-hidden bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-10'>
            <div className='px-2 space-y-1'>
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'>
                  {item.name}
                </a>
              ))}
            </div>
            <a
              href='#'
              className='block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100'>
              Log in
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default NavBar
