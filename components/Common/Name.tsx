import { raleway } from '@/utils/font'
import clsx from 'clsx'

interface Props {
  name: string
}

export const UserName = ({ name }: Props) => {
  return (
    <button>
      <span
        className={clsx(
          'inline flex-none bg-[#000000] px-[10px] py-[2px] text-[14px] leading-[20px] font-[500] text-[white]',
          raleway.className,
        )}
      >
        {name}
      </span>
    </button>
  )
}
