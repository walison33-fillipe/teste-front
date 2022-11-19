import styled from "styled-components"

export const Body = styled.div`
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content:center;
    background-color: #202020;
    `

export const Header = styled.div`
    background-color: black;
    width: 100vw;
    height: 80px;
    box-sizing: border-box;
    overflow-x: hidden;
`

export const Logo = styled.img`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
`

export const CardMovies = styled.div`
    width: 200px;
    margin: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    &:hover {
		cursor: pointer;}
`
export const PosterPath = styled.img`
    border-radius: 5px;
    width: 200px;
    height: 300px;
    box-sizing: border-box;
    &:hover {
		cursor: pointer;
    transform: scale(1.05);
    transition: transform .2s;
	}
`

export const ImagesPoster = styled.div`
    border-radius: 5px;
    box-sizing: border-box;
    height: 300px;
    width: 200px;
    display: flex;
    justify-content: center;
`

export const Title = styled.p`
    color: #FFFFFF;
    font-family:'Arial Narrow Bold', sans-serif;
    text-transform: uppercase;
    font
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
`


export const Main = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;
`

export const Footer = styled.div`
    background-color: #202020;
    height: 50px;
    box-sizing: border-box;
    overflow-x: hidden;
    display: flex;
    flex-direction: center;
    width: 100vw;
`

export const TextFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    background-color: black;
    width: 100vw;
    :hover{
        cursor: pointer;
    }
`

export const PaginationStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const Next = styled.div`
    width: 500px;
    padding: 1em;
    margin: 1em;
    display: flex;
    justify-content: space-around;
`

export const PaginationButton = styled.div`
    border-radius: 200px;
    width: 30px;
    height: 30px;
    padding: 1em;
    margin: 1em;
    display: flex;
    justify-content: space-around;
    color: #000000;
    background-color: #FFA500;
    font-weight:bold;
    align-items: center;
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
    :active{
        border-radius: 5px;
        transition: all .3s;;
        background-color: #FF4500;
        transition: all .2s;
        transform: scale(0.98);
    }
`

export const PaginationButtonStartEnd = styled.div`
    border-radius: 300px;
    width: 30px;
    height: 30px;
    padding: 1em;
    margin: 1em;
    display: flex;
    justify-content: space-around;
    color: #000000;
    background-color: #FF4500;
    background-image: linear-gradien;
    font-weight:bold;
    align-items: center;
    :hover{
        cursor: pointer;
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
    :active{
        border-radius: 5px;
        transition: all .3s;;
        background-color: #FF4500;
        transition: all .2s;
        transform: scale(0.98);
        border-radius: 5px;
    }
`