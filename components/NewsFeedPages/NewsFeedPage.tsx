import React, { useState } from "react"
import { NewsFeedCard } from "./NewsFeedCard"
import { dbService, Notification } from "../db/api"
import { useAsync } from "react-async-hook"
import styled from "styled-components"

type NewsOptions = {
  uid: string
  page: number
  pageSize: number
  startAfterId: string | null
}

const news = (options: NewsOptions) =>
  useAsync<Notification[]>(async () => {
    const { uid, page, pageSize } = options
    const startAfterId =
      page > 1 ? await getLastVisibleId(page - 1, pageSize) : null
    const notifications = await dbService().getNotifications({
      uid,
      limit: pageSize,
      startAfterId
    })
    return notifications
  }, [options])

const getLastVisibleId = async (page: number, pageSize: number) => {
  const notifications = await dbService().getNotifications({
    uid: "user-id",
    limit: pageSize,
    startAfterId: null
  })
  return notifications[notifications.length - 1]?.id
}

const NewsFeedPage = () => {
  const [page, setPage] = useState<number>(1)
  const { loading, result } = news({ uid: "user-id", page, pageSize: 10 })

  const handlePrevPage = () => {
    setPage(page => page - 1)
  }

  const handleNextPage = () => {
    setPage(page => page + 1)
  }

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && result && (
        <>
          <div>
            <Header>
              <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                NewsFeed
              </h1>
              <NewsFeedCheckboxes>
                <label className="newsfeed-checkmarks">
                  <input type="checkbox" name="checkbox" value="value" />
                  Organization Updates
                </label>
                <label>
                  <input type="checkbox" name="checkbox" value="value" />
                  Bill Updates
                </label>
              </NewsFeedCheckboxes>
            </Header>
          </div>
          <div>
            {result.map((notification: Notification) => (
              <NewsFeedCard
                key={notification.id}
                Date={notification.date}
                nameFeed={notification.name}
                newsFeed={notification.news}
                isBill={notification.isBill}
              />
            ))}
          </div>
          <div>
            <button onClick={handlePrevPage} disabled={page === 1}>
              Previous Page
            </button>
            <button onClick={handleNextPage} disabled={result.length < 10}>
              Next Page
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default NewsFeedPage

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;

  @media (max-width: 767px) {
    font-size: 1rem;
    flex-direction: column;
    align-items: center;
  }
`

const NewsFeedCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  color: #12266f;

  @media (max-width: 767px) {
    font-size: 1rem;
    flex-direction: row;
  }
`
