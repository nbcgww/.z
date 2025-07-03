import { formatDistanceToNow } from 'date-fns'

export const TimeAgo = () => {
  return <div className="text-[14px] font-[500] text-[#5c5c5c]">{formatDistanceToNow(new Date(2014, 6, 2))}</div>
}
