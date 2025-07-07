import { formatDistanceToNow } from 'date-fns'

interface Props {
  time: string | Date
}

export const TimeAgo = ({ time = new Date(2014, 6, 2) }: Props) => {
  return <div className="text-[13px] text-[#5c5c5c]">{formatDistanceToNow(time)}</div>
}
