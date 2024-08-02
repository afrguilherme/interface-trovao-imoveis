import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff2eb;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.div`
  margin-top: 50px;
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.div`
  width: 100%;

  h1 {
    color: #3c4453;
    font-size: 35px;
    font-weight: 500;
  }
`

export const FavoritesContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  min-height: 400px;
  height: fit-content;
  margin-top: 30px;
  padding: 20px 35px;
  box-shadow: 2px 2px 30px -10px rgba(0, 0, 0, 0.75);
  border-radius: 20px;
`

export const FavoritesHeader = styled.div`
  background-color: #fff;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(60, 68, 83, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FavoriteCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  h2 {
    color: #3c4453;
    font-size: 20px;
    font-weight: 500;
  }

  p {
    color: rgba(60, 68, 83, 0.7);
  }
`

export const Select = styled.select`
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid #ccc;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #058690;
  }

  option {
    padding: 8px;
  }
`
