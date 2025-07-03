import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  type: avatar_type
  src: string
}

export const Avatar = ({ type, src }: Props) => {
  return (
    <>
      <div
        className={clsx('w-[25px] h-[25px] rounded-full overflow-hidden', {
          'w-[35px] h-[35px]': type === avatar_type.feed,
        })}
      >
        <Image alt="" width={75} height={75} src={src} />
      </div>
    </>
  )
}

export enum avatar_type {
  story,
  feed,
  menu,
}
