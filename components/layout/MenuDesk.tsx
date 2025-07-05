'use client'
import { lexend } from '@/utils/font'
import clsx from 'clsx'

import HomeIcon from '@/svgs/menu-home.svg'
import HomeIconSelected from '@/svgs/menu-home_selected.svg'

import SearchIcon from '@/svgs/menu-search.svg'
import SearchIconSelected from '@/svgs/menu-search_selected.svg'

import PostIcon from '@/svgs/menu-post.svg'

import ReelsIcon from '@/svgs/menu-reels.svg'
import ReelsIconSelected from '@/svgs/menu-reels_selected.svg'

import MessagerIcon from '@/svgs/menu-messager.svg'
import MessagerIconSelected from '@/svgs/menu-messager_selected.svg'

import NotificationIcon from '@/svgs/menu-notification.svg'
import NotificationIconSelected from '@/svgs/menu-notification_selected.svg'

import MoreIcon from '@/svgs/menu-more.svg'
import MoreIconSelected from '@/svgs/menu-more_selected.svg'

import { useState } from 'react'
import { Avatar } from '../Common/Avatar'

const Logo = () => {
  return (
    <>
      <span
        className={clsx(
          lexend.className,
          'pointer-events-none -translate-x-[3px] text-[35px] leading-[40px] select-none',
        )}
      >
        .z
      </span>
    </>
  )
}

export const MenuDesk = () => {
  enum EMenu {
    HOME,
    SEARCH,
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
      <div className="fixed top-0 left-0 z-[99] flex h-[60px] w-full items-center justify-between bg-[#ffffff62] px-[20px] backdrop-blur-[5px] md:hidden">
        <Logo />
        <div className="flex gap-[20px]">
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
          '!fixed bottom-0 left-0 z-[99] flex w-full items-center border-t-[1px] border-t-[#7b7b7b26] bg-[#ffffff4f] py-[20px] backdrop-blur-[5px] sm:top-0 sm:h-screen sm:w-[80px] sm:flex-col sm:justify-between sm:border-t-0 sm:border-r-[1px] sm:border-r-[#7b7b7b26]',
        )}
      >
        <div className="hidden sm:block">
          <Logo />
        </div>

        <div className="flex w-full justify-between gap-[50px] px-[20px] sm:w-auto sm:flex-col [&>div]:cursor-pointer">
          <div onClick={selectSection(EMenu.HOME)}>
            {selectedSection === EMenu.HOME ? <HomeIconSelected /> : <HomeIcon />}
          </div>
          <div onClick={selectSection(EMenu.SEARCH)}>
            {selectedSection === EMenu.SEARCH ? <SearchIconSelected /> : <SearchIcon />}
          </div>
          <div onClick={selectSection(EMenu.SEARCH)}>
            {selectedSection === EMenu.SEARCH ? <PostIcon /> : <PostIcon />}
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

          <div onClick={selectSection(EMenu.ACC)}>{selectedSection === EMenu.ACC ? <Avatar /> : <Avatar />}</div>
        </div>
        <div onClick={selectSection(EMenu.MORE)} className="hidden h-[40px] sm:block">
          {selectedSection === EMenu.MORE ? <MoreIconSelected /> : <MoreIcon />}
        </div>
      </div>
    </>
  )
}
