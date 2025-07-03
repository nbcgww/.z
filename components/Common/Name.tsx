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
          'bg-[#000000] flex-none px-[10px] leading-[20px] py-[2px] text-[white] text-[14px] inline font-[500]',
          raleway.className,
        )}
      >
        {name}
      </span>
    </button>
  )
}
