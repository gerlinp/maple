import React from "react"
import NewsFeedPage from "components/NewsFeedPages/NewsFeedPage"
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
  return <NewsFeedPage />
}

export default NewsFeed
