import { FeedTray } from '@/components/FeedTray/FeedTray'
import { StoryTray } from '@/components/StoryTray/StoryTray'

export default function Home() {
  return (
    <div>
      <StoryTray />
      <FeedTray />
    </div>
  )
}
