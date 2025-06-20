import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeart, IoLogoReact } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';

export const Sidebar = () => {

    const menuItems = [
        {
            path: '/dashboard/main',
            icon: <IoBrowsersOutline size={40}></IoBrowsersOutline>,
            title: 'Dashboard',
            subtitle: 'Visualization'
        },
        {
            path: '/dashboard/counter',
            icon: <IoCalculator size={40}></IoCalculator>,
            title: 'Counter',
            subtitle: 'Counter Client Side'
        },
         {
            path: '/dashboard/pokemons',
            icon: <IoFootball size={40}></IoFootball>,
            title: 'Pokemons',
            subtitle: 'Static Generation'
        },
        {
            path: '/dashboard/favorites',
            icon: <IoHeart size={40}></IoHeart>,
            title: 'Favorites',
            subtitle: 'Global State'
        }
    ];

    return (
        <div
          id="menu"
          style={{width:'400px'}}
          className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll"
        >
          <div id="logo" className="my-4 px-6">
            <h1 className="flex item-centertext-lg md:text-2xl font-bold text-white">
              <IoLogoReact className='pr-2'></IoLogoReact>
              <span>Dash</span>
              <span className="text-blue-500">8</span>.
            </h1>
            <p className="text-slate-500 text-sm">
              Manage your actions and activities
            </p>
          </div>
          <div id="profile" className="px-6 py-10">
            <p className="text-slate-500">Welcome back,</p>
            <a href="#" className="inline-flex space-x-2 items-center">
              <span>
                <Image
                  className="rounded-full w-8 h-8"
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
                  alt="User avatar"
                  width={50}
                  height={50}
                ></Image>
              </span>
              <span className="text-sm md:text-base font-bold">
                Javier Celada
              </span>
            </a>
          </div>

          <div id="nav" className="w-full px-6">
            {
                menuItems.map(item => (
                    <SidebarMenuItem key={item.path} {...item}></SidebarMenuItem>
                ))
            }
          </div>
        </div>
    );
}