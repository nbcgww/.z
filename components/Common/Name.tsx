import { raleway } from '@/utils/font'
import clsx from 'clsx'

interface Props {
  name: string
}

export const UserName = ({ name }: Props) => {
  return (
    <div
      className={clsx(
        'bg-[#000000] flex-none px-[12px] h-[35px] py-[2px] text-[white] text-[14px] font-bold inline',
        raleway.className,
      )}
    >
      {name}
    </div>
  )
}
