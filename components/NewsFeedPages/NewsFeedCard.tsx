import Timestamp from "react-timestamp"
import styled from "styled-components"

type Props = {
  Date: string
  nameFeed: string
  newsFeed: string
}

export function NewsFeedCard({ Date, nameFeed, newsFeed }: Props) {
  const date = "Mon Jan 16 2023 16:37:14 GMT-0500 (Eastern Standard Time)"

  return (
    <Container>
      <Header>
        <Avatar>
          <img loading="lazy" src="/images/newsfeeds.svg" alt="" />
        </Avatar>

        <HeaderLeft>
          <DisplayedName>Bill</DisplayedName>
          <Bio>
            An Act creating a green bank to promote clean energy in massachsetts
          </Bio>
          <Timestamp
            style={{ fontSize: "14px" }}
            relative
            date={date}
            autoUpdate
          />
        </HeaderLeft>
      </Header>
      <NewsDisplay>
        <Text>
          The Boston Fire Department Union has selected S.999 as one of their
          priority bills, selecting the stance of opposition
        </Text>
      </NewsDisplay>
    </Container>
  )
}

const Container = styled.div`
  width: 90vw;
  max-width: 730px;
  margin: auto;
  margin-top: 2vh;
  @media (max-width: 767px) {
    width: 95vw;
  }
`

const Header = styled.div`
  padding: 19px 18px;
  display: flex;
  color: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #1a3185;
`

const Avatar = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 99999px;

  img {
    width: 100%;
    border-radius: 100%;
  }
`

const HeaderLeft = styled.div`
  margin-left: 11.48px;
`

const DisplayedName = styled.div`
  font-family: poppins;
  font-size: 1.4rem;
  color: #ffff;

  @media (max-width: 767px) {
    font-size: 1rem;
  }
`

const Bio = styled.div`
  font-size: 1rem;

  @media (max-width: 767px) {
    font-size: 0.75rem;
  }
`

const NewsDisplay = styled.div`
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const Text = styled.p`
  font-size: 0.75;
  max-width: 683px;
  flex-wrap: wrap;
  padding: 1rem 1.5rem;
  font-family: poppins;
  color: black;
  @media (max-width: 767px) {
    font-size: 14px;
  }

  @media (max-width: 575px) {
    font-size: 12px;
    padding: 0.5rem 1rem;
  }
`
