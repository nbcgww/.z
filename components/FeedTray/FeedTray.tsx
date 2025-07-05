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
import { useState } from 'react'
import Instaplay from 'player.style/instaplay/react'

import StarIcon from '@/svgs/feed-star.svg'
import ReplyIcon from '@/svgs/feed-reply.svg'
import { formatNumberCompact } from '@/utils/app'

interface ReactAreaProps {
  likeCount: number
  commentCount: number
}

export const ReactArea = ({ likeCount, commentCount }: ReactAreaProps) => {
  return (
    <div className="px-[10px] sm:px-0">
      <div className="flex w-full justify-between py-[10px]">
        <div className="flex gap-[15px]">
          <div className="flex items-end gap-[8px]">
            <button className="[&>svg]:h-[24px] [&>svg]:w-[24px]">
              <StarIcon />
            </button>
            <p>{formatNumberCompact(likeCount)}</p>
          </div>

          <div className="flex items-end gap-[8px]">
            <button>
              <PostComment />
            </button>
            <p>{formatNumberCompact(commentCount)}</p>
          </div>

          <div className="flex items-end gap-[8px]">
            <button>
              <PostSend />
            </button>
            <p>{formatNumberCompact(247132)}</p>
          </div>
        </div>
        <div>
          <button>
            <PostSave />
          </button>
        </div>
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
    <div className="px-[10px] pb-[5px] sm:px-0">
      <span className="text-[14px] font-[500]">{content}</span>
    </div>
  )
}

interface CommentAreaProps {
  data: any[]
}
export const CommentArea = ({ data }: CommentAreaProps) => {
  return (
    <div className="w-full px-[10px] sm:px-0">
      {data.map((i, idx) => (
        <div key={idx}>
          <div className="mb-[10px] flex gap-[8px]">
            <div className="w-[3px] flex-none bg-[#00c3ff]"></div>
            <div>
              <div className="flex items-center gap-[10px]">
                <Avatar type={avatar_type.feed} src={i.user.avatar} />
                <UserName name={i.user.name} />
                <TimeAgo time={i.timeDate} />
              </div>
              <div>
                <p className="line-clamp-5 text-[14px]">{i.comment}</p>
              </div>
              <div className="flex gap-[20px]">
                <div className="flex gap-[8px]">
                  <button className="[&>svg]:h-[18px] [&>svg]:w-[18px]" title="like">
                    <StarIcon />
                  </button>
                  <p>{formatNumberCompact(113987127389)}</p>
                </div>

                <div className="flex gap-[8px]">
                  <button className="[&>svg]:h-[18px] [&>svg]:w-[18px]" title="reply">
                    <ReplyIcon />
                  </button>
                  <p>{formatNumberCompact(19031924)}</p>
                </div>
              </div>
            </div>
          </div>
          {i.reply.map((j, idxj) => (
            <div className="mb-[10px] pl-[15px]" key={idxj}>
              <div className="w-full">
                <div className="flex gap-[8px]">
                  <div className="w-[3px] flex-none bg-[#26ff00]"></div>
                  <div>
                    <div className="flex items-center gap-[10px]">
                      <Avatar type={avatar_type.feed} src={j.user.avatar} />
                      <UserName name={j.user.name} />
                      <TimeAgo time={j.timeDate} />
                    </div>
                    <div>
                      <p className="text-[14px]">{j.comment}</p>
                    </div>
                    <div className="flex gap-[20px]">
                      <div className="flex gap-[8px]">
                        <button className="[&>svg]:h-[18px] [&>svg]:w-[18px]" title="like">
                          <StarIcon />
                        </button>
                        <p>{formatNumberCompact(113987127389)}</p>
                      </div>

                      <div className="flex gap-[8px]">
                        <button className="[&>svg]:h-[18px] [&>svg]:w-[18px]" title="reply">
                          <ReplyIcon />
                        </button>
                        <p>{formatNumberCompact(19031924)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export const FeedTray = () => {
  const handleReRenderSwiper = () => {}
  const imageOrVideo = (media: any) => {
    const { type, src } = media

    if (type === 'image') {
      return (
        <div className="relative aspect-[2/3] w-full bg-[#000]">
          <Image src={src} alt="" fill className="h-full w-full object-contain" />
        </div>
      )
    }
    if (type === 'video') {
      return <Video src={src} onLoadedData={handleReRenderSwiper} playsInline />
    }
  }
  return (
    <>
      {feedTray.map(({ id, media, caption, user, timeDate, likeCount, commentCount, comments }) => (
        <div key={id} className="mx-auto w-full sm:w-[500px]">
          <div className="mb-[15px] w-full border-b-[1px] border-[#00000020] pb-[15px]">
            {/* header */}
            <div className="flex h-[50px] items-center justify-between px-[10px] sm:px-0">
              <div className="flex items-center gap-[8px]">
                <Avatar type={avatar_type.feed} src={user.avatar} />
                <UserName name={user.name} />
                <TimeAgo time={timeDate} />
              </div>
              <button className="">
                <PostOption />
              </button>
            </div>
            <ContentPost userName={user.name} content={caption} />
            <div className="w-full">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Pagination]}
                pagination={{
                  dynamicBullets: false,
                }}
              >
                {media.map((i) => (
                  <SwiperSlide key={i.id}>{imageOrVideo(i)}</SwiperSlide>
                ))}
              </Swiper>
            </div>
            <ReactArea likeCount={likeCount} commentCount={commentCount} />
            <CommentArea data={comments} />
          </div>
        </div>
      ))}
    </>
  )
}
