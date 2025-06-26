'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import { storyTray } from '@/fakeshit/storyTray'
import clsx from 'clsx'

export const StoryTray = () => {
  return (
    <div className="py-[20px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={8}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {storyTray.map((story) => (
          <SwiperSlide key={story.user}>
            <div className="flex flex-col items-center cursor-pointer">
              <div
                className={clsx(
                  'w-[80px] h-[80px] rounded-[50%] p-[3px]',
                  story.seen ? 'bg-[#8888887b]' : 'from-[#cb35fd] bg-gradient-to-bl to-[#905bf1]',
                )}
              >
                <div className="p-[3px] bg-[white] w-full h-full rounded-[50%]">
                  <div className="w-full h-full rounded-full bg-[blue] overflow-hidden">
                    <Image alt="" width={75} height={75} src={story.avatar} />
                  </div>
                </div>
              </div>
              <span className="text-[14px] mt-[5px]">{story.user}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
