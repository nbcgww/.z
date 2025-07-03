import clsx from 'clsx'
import Image from 'next/image'

interface Props {
  type: avatar_type
}

export const Avatar = ({ type }: Props) => {
  return (
    <>
      <div
        className={clsx('w-[25px] h-[25px] rounded-full overflow-hidden', {
          'w-[35px] h-[35px]': type === avatar_type.feed,
        })}
      >
        <Image
          alt=""
          width={75}
          height={75}
          src={
            'https://instagram.fhan5-8.fna.fbcdn.net/v/t51.2885-19/432266620_2709233765896208_7391032803882825897_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fhan5-8.fna.fbcdn.net&_nc_cat=108&_nc_oc=Q6cZ2QF0wYY8ffCc9nFoqmgoOL3bWQinK2Z4TzIJDgHkVv8ro3440GemItSBr65s7HxJPXc&_nc_ohc=bN0SSq03BA8Q7kNvwE1bo56&_nc_gid=9tN1Kd3iVK8W0S-kjB6wbA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfPkl48rmmnZOpF9H6dg46Ha5xp91PLXq9rwG8XIPuVidQ&oe=68633BF4&_nc_sid=10d13b'
          }
        />
      </div>
    </>
  )
}

export enum avatar_type {
  story,
  feed,
  menu,
}
