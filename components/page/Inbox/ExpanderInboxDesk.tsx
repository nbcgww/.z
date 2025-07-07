// import { funnelDisplay } from '@/utils/font'
import clsx from 'clsx'

export const ExpanderInboxDesk = () => {
  return (
    <div className="">
      <h2 className={clsx('text-[16px]')}>Inbox</h2>
      <div className="mt-[10px] h-[40px]">
        <input
          className="h-[40px] w-full rounded-[15px] border-[2px] border-[#00000042] px-[10px] placeholder:text-[14px] focus:border-[#36ddff] focus:outline-0"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
  )
}
