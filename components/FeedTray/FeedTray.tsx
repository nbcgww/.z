'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Avatar, avatar_type } from '../Common/Avatar'
import { UserName } from '../Common/Name'
import { TimeAgo } from '../Common/TimeAgo'
import PostOption from '@/svgs/post_option.svg'

import PostLike from '@/svgs/post-like.svg'
import PostComment from '@/svgs/post-comment.svg'
import PostSend from '@/svgs/post-send.svg'

import PostSave from '@/svgs/post-save.svg'
import Image from 'next/image'
import Video from 'next-video'
import { feedTray } from '@/fakeshit/feedTray'

import { Pagination } from 'swiper/modules'

interface ReactAreaProps {
  likeCount: number
  commentCount: number
}

export const ReactArea = ({ likeCount, commentCount }: ReactAreaProps) => {
  return (
    <div>
      <div className="flex w-full justify-between py-[10px]">
        <div className="flex gap-[15px]">
          <PostLike />
          <PostComment />
          <PostSend />
        </div>
        <div>
          <PostSave />
        </div>
      </div>
      <div className="flex [&>*]:text-[14px] gap-[5px]">
        <p className="text-[#f70404]">{likeCount} likes</p> | <p className="text-[#8e04f7]">{commentCount} comments</p>
      </div>
    </div>
  )
}

interface ContentPostProps {
  userName: string
  content: string
}

export const ContentPost = ({ userName, content }: ContentPostProps) => {
  return (
    <div className="">
      <UserName name={userName} />
      <span className="ml-[10px] text-[14px] font-[500]">{content}</span>
    </div>
  )
}

export const FeedTray = () => {
  const imageOrVideo = (media: any) => {
    const { type, src } = media

    if (type === 'image') {
      return (
        <div className="w-full h-[500px] bg-[#08e6ff] relative">
          <Image src={src} className="" alt="" fill />
        </div>
      )
    }
    if (type === 'video') {
      return <Video src={src} />
    }
  }
  return (
    <>
      {feedTray.map(({ id, media, caption, user, timeDate, likeCount, commentCount }) => (
        <div key={id} className="w-[400px] mx-auto">
          <div className="w-full pb-[15px] mb-[15px] border-b-[1px] border-[#838383]">
            {/* header */}
            <div className="flex justify-between h-[50px] items-center">
              <div className="flex gap-[15px] items-center">
                <Avatar type={avatar_type.feed} src={user.avatar} />
                <UserName name={user.name} />
                <TimeAgo time={timeDate} />
              </div>
              <div className="">
                <PostOption />
              </div>
            </div>
            <div className="w-full">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoHeight={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Pagination]}
                pagination={{
                  dynamicBullets: false,
                }}
              >
                {media.map((i) => (
                  <SwiperSlide key={id}>{imageOrVideo(i)}</SwiperSlide>
                ))}
              </Swiper>
            </div>
            <ReactArea likeCount={likeCount} commentCount={commentCount} />
            <ContentPost userName={user.name} content={caption} />
          </div>
        </div>
      ))}
    </>
  )
}
