import React from "react"
import { NewsFeedCard } from "components/NewsFeedPages/NewsFeedCard"
import { dbService } from "components/db/api"
import { useAsync } from "react-async-hook"

type newsOptions = {
  uid: string
  limit: number
  startAfterId: string
}

const news = (options: newsOptions) =>
  useAsync(async () => {
    const { uid, limit, startAfterId } = options
    const notifications = await dbService().getNotifications({
      uid,
      limit,
      startAfterId
    })
    return notifications
  }, [options])

const NewsFeed = () => {
  return (
    <div>
      <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} />
      <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} />
      <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} />
      <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} />
      <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} />
      <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} />
      <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} />
    </div>
  )
}

export default NewsFeed
