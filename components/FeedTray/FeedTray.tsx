import { Avatar, avatar_type } from '../Common/Avatar'
import { UserName } from '../Common/Name'
import { TimeAgo } from '../Common/TimeAgo'
import PostOption from '@/svgs/post_option.svg'

import PostLike from '@/svgs/post-like.svg'
import PostComment from '@/svgs/post-comment.svg'
import PostSend from '@/svgs/post-send.svg'

import PostSave from '@/svgs/post-save.svg'

interface ReactAreaProps {}

export const ReactArea = ({}: ReactAreaProps) => {
  return (
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
  return (
    <>
      <div className="w-[400px] mx-auto">
        <div className="w-full">
          {/* header */}
          <div className="flex justify-between h-[50px] items-center">
            <div className="flex gap-[15px] items-center">
              <Avatar type={avatar_type.feed} />
              <UserName name="sdajkf" />
              <TimeAgo />
            </div>
            <div className="">
              <PostOption />
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[500px] bg-[#08e6ff]"></div>
          </div>
          <ReactArea />
          <ContentPost
            userName="kasldfjlkkl"
            content={`jksdaklfsjdklfsajdklfjskldf
            sadkljfhklsadfj
            l;ksadf;`}
          />
        </div>
      </div>
    </>
  )
}
