'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import { storyTray } from '@/fakeshit/storyTray'
import clsx from 'clsx'

export const StoryTray = () => {
  return (
    <div className="mx-auto w-full py-[20px] sm:w-[600px]">
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {storyTray.map((story) => (
          <SwiperSlide key={story.user}>
            <div className="flex cursor-pointer flex-col items-center">
              <div
                className={clsx(
                  'h-[80px] w-[80px] rounded-[50%] p-[3px]',
                  story.seen ? 'bg-[#8888887b]' : 'bg-gradient-to-bl from-[#cb35fd] to-[#905bf1]',
                )}
              >
                <div className="h-full w-full rounded-[50%] bg-[white] p-[3px]">
                  <div className="h-full w-full overflow-hidden rounded-full bg-[blue]">
                    <Image alt="" width={75} height={75} src={story.avatar} />
                  </div>
                </div>
              </div>
              <span className="mt-[5px] text-[14px]">{story.user}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
