import React from "react"
import { NewsFeedCard } from "./NewsFeedCard"
import { dbService } from "../db/api"
import { useAsync } from "react-async-hook"
import styled from "styled-components"

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

const NewsFeedPage = () => {
  return (
    <div>
      <div>
        <Header>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>NewsFeed</h1>
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
        <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} isBill={true} />
        <NewsFeedCard Date={""} nameFeed={""} newsFeed={""} isBill={false} />
      </div>
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
