'use client'
import { lexend } from '@/utils/font'
import clsx from 'clsx'

import HomeIcon from '@/svgs/menu-home.svg'
import HomeIconSelected from '@/svgs/menu-home_selected.svg'

import SearchIcon from '@/svgs/menu-search.svg'
import SearchIconSelected from '@/svgs/menu-search_selected.svg'

import PostIcon from '@/svgs/menu-post.svg'
import PostIconSelected from '@/svgs/menu-post_selected.svg'

import ReelsIcon from '@/svgs/menu-reels.svg'
import ReelsIconSelected from '@/svgs/menu-reels_selected.svg'

import MessagerIcon from '@/svgs/menu-messager.svg'
import MessagerIconSelected from '@/svgs/menu-messager_selected.svg'

import NotificationIcon from '@/svgs/menu-notification.svg'
import NotificationIconSelected from '@/svgs/menu-notification_selected.svg'

import MoreIcon from '@/svgs/menu-more.svg'
import MoreIconSelected from '@/svgs/menu-more_selected.svg'

import { useState } from 'react'
import { Avatar, avatar_type } from '../Common/Avatar'

import { useScroll } from 'react-use'

const Logo = () => {
  return (
    <>
      <button
        className={clsx(
          lexend.className,
          'pointer-events-none -translate-x-[3px] text-[35px] leading-[40px] select-none',
        )}
      >
        .z
      </button>
    </>
  )
}

export const MenuDesk = () => {
  enum EMenu {
    HOME,
    SEARCH,
    ADD,
    REEL,
    MESSAGER,
    NOTIFICATION,
    MORE,
    ACC,
  }
  const [selectedSection, setSelectedSection] = useState(EMenu.HOME)

  const selectSection = (section: EMenu) => () => {
    setSelectedSection(section)
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-[99] flex h-[80px] w-full items-center justify-between bg-[#fff] px-[20px] backdrop-blur-[5px] sm:hidden">
        <Logo />
        <div className="flex gap-[30px]">
          <div onClick={selectSection(EMenu.MESSAGER)}>
            {selectedSection === EMenu.MESSAGER ? <MessagerIconSelected /> : <MessagerIcon />}
          </div>
          <div onClick={selectSection(EMenu.NOTIFICATION)}>
            {selectedSection === EMenu.NOTIFICATION ? <NotificationIconSelected /> : <NotificationIcon />}
          </div>
        </div>
      </div>
      <div
        className={clsx(
          '!fixed bottom-0 left-0 z-[99] flex h-[80px] w-full items-center border-t-[1px] border-t-[#7b7b7b26] bg-[#fff] backdrop-blur-[5px] sm:top-0 sm:h-screen sm:w-[80px] sm:flex-col sm:justify-between sm:border-t-0 sm:border-r-[1px] sm:border-r-[#7b7b7b26]',
        )}
      >
        <div className="mt-[20px] hidden sm:block">
          <Logo />
        </div>

        <div className="flex w-full -translate-y-[14px] justify-between gap-[50px] px-[20px] sm:w-auto sm:translate-y-0 sm:flex-col [&>div]:cursor-pointer">
          <div onClick={selectSection(EMenu.HOME)}>
            {selectedSection === EMenu.HOME ? <HomeIconSelected /> : <HomeIcon />}
          </div>
          <div onClick={selectSection(EMenu.SEARCH)}>
            {selectedSection === EMenu.SEARCH ? <SearchIconSelected /> : <SearchIcon />}
          </div>
          <div onClick={selectSection(EMenu.ADD)}>
            {selectedSection === EMenu.ADD ? <PostIconSelected /> : <PostIcon />}
          </div>
          <div onClick={selectSection(EMenu.REEL)}>
            {selectedSection === EMenu.REEL ? <ReelsIconSelected /> : <ReelsIcon />}
          </div>
          <div onClick={selectSection(EMenu.MESSAGER)} className="hidden sm:block">
            {selectedSection === EMenu.MESSAGER ? <MessagerIconSelected /> : <MessagerIcon />}
          </div>
          <div onClick={selectSection(EMenu.NOTIFICATION)} className="hidden sm:block">
            {selectedSection === EMenu.NOTIFICATION ? <NotificationIconSelected /> : <NotificationIcon />}
          </div>

          <div onClick={selectSection(EMenu.ACC)}>
            {
              <Avatar
                type={avatar_type.menu}
                src="https://instagram.fhan5-8.fna.fbcdn.net/v/t51.2885-19/432266620_2709233765896208_7391032803882825897_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fhan5-8.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QF0wYY8ffCc9nFoqmgoOL3bWQinK2Z4TzIJDgHkVv8ro3440GemItSBr65s7HxJPXc&_nc_ohc=bN0SSq03BA8Q7kNvwE1bo56&_nc_gid=9tN1Kd3iVK8W0S-kjB6wbA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfPkl48rmmnZOpF9H6dg46Ha5xp91PLXq9rwG8XIPuVidQ&oe=68633BF4&_nc_sid=10d13b"
              />
            }
          </div>
        </div>
        <div onClick={selectSection(EMenu.MORE)} className="mb-[20px] hidden h-[40px] sm:block">
          {selectedSection === EMenu.MORE ? <MoreIconSelected /> : <MoreIcon />}
        </div>
      </div>
    </>
  )
}
