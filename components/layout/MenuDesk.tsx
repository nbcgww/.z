'use client'
import { lexend } from '@/utils/font'
import clsx from 'clsx'

import HomeIcon from '@/svgs/menu-home.svg'
import HomeIconSelected from '@/svgs/menu-home_selected.svg'

import SearchIcon from '@/svgs/menu-search.svg'
import SearchIconSelected from '@/svgs/menu-search_selected.svg'

import ReelsIcon from '@/svgs/menu-reels.svg'
import ReelsIconSelected from '@/svgs/menu-reels_selected.svg'

import MessagerIcon from '@/svgs/menu-messager.svg'
import MessagerIconSelected from '@/svgs/menu-messager_selected.svg'

import NotificationIcon from '@/svgs/menu-notification.svg'
import NotificationIconSelected from '@/svgs/menu-notification_selected.svg'

import MoreIcon from '@/svgs/menu-more.svg'
import MoreIconSelected from '@/svgs/menu-more_selected.svg'

import { useState } from 'react'

export const MenuDesk = () => {
  enum EMenu {
    HOME,
    SEARCH,
    REEL,
    MESSAGER,
    NOTIFICATION,
    MORE,
  }
  const [selectedSection, setSelectedSection] = useState(EMenu.HOME)

  const selectSection = (section: EMenu) => () => {
    setSelectedSection(section)
  }

  return (
    <>
      <div
        className={clsx(
          lexend.className,
          'fixed top-0 left-0 w-[80px] h-screen  flex flex-col justify-between items-center py-[20px] border-r-[1px] border-r-[#7b7b7b26]',
        )}
      >
        <span
          className={clsx(
            lexend.className,
            'text-[35px] leading-[40px] select-none pointer-events-none -translate-x-[3px]',
          )}
        >
          .z
        </span>
        <div className="flex flex-col gap-[50px] [&>div]:cursor-pointer">
          <div onClick={selectSection(EMenu.HOME)}>
            {selectedSection === EMenu.HOME ? <HomeIconSelected /> : <HomeIcon />}
          </div>
          <div onClick={selectSection(EMenu.SEARCH)}>
            {selectedSection === EMenu.SEARCH ? <SearchIconSelected /> : <SearchIcon />}
          </div>
          <div onClick={selectSection(EMenu.REEL)}>
            {selectedSection === EMenu.REEL ? <ReelsIconSelected /> : <ReelsIcon />}
          </div>
          <div onClick={selectSection(EMenu.MESSAGER)}>
            {selectedSection === EMenu.MESSAGER ? <MessagerIconSelected /> : <MessagerIcon />}
          </div>
          <div onClick={selectSection(EMenu.NOTIFICATION)}>
            {selectedSection === EMenu.NOTIFICATION ? <NotificationIconSelected /> : <NotificationIcon />}
          </div>
        </div>
        <div onClick={selectSection(EMenu.MORE)} className="h-[40px]">
          {selectedSection === EMenu.MORE ? <MoreIconSelected /> : <MoreIcon />}
        </div>
      </div>
    </>
  )
}
