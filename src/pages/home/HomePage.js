import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { goToDetailsPage } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/BASE_URL"
import { BASE_IMG } from "../../constants/BASE_IMG";
import * as s from "./styled";
import { API_KEY } from "../../constants/API_KEY";
import dmdb from "../../assets/img/tmdb-logo.png"

export default function HomePage() {
    const navigate = useNavigate();

    const [page, setPage] = useState(1)
    const [movie, setMovie] = useState([])

    const goToNextPage = () => {
        setPage(page + 1)

    }
    const goToBackPage = () => {
        setPage(page - 1)

    }
    const goToFirstPage = () => {
        setPage(1)

    }
    const goToNextTwoPage = () => {
        setPage(page + 2)

    }
    const goToNextThreePage = () => {
        setPage(page + 3)

    }
    const goToNextFourPage = () => {
        setPage(page + 4)

    }
    const goToBackTwoPage = () => {
        setPage(page - 2)

    }

    const Pagination = () => {
        if (page === 1) {
            return (<s.Next>
                <s.PaginationButtonStartEnd>{page}</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToNextPage()}>{page + 1}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextTwoPage()}>{page + 2}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextThreePage()}>{page + 3}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextFourPage()}>{page + 4}</s.PaginationButton>
                <s.PaginationButtonStartEnd onClick={() => goToNextPage()}>&#62;</s.PaginationButtonStartEnd>
            </s.Next>)
        } else if (page === 2) {
            return (<s.Next>
                <s.PaginationButtonStartEnd onClick={() => goToBackPage()}>&#60;</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToBackPage()}>{page - 1}</s.PaginationButton>
                <s.PaginationButtonStartEnd>{page}</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToNextPage()}>{page + 1}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextTwoPage()}>{page + 2}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextThreePage()}>{page + 3}</s.PaginationButton>
                <s.PaginationButtonStartEnd onClick={() => goToNextPage()}>&#62;</s.PaginationButtonStartEnd>
            </s.Next>)
        } else {
            return (<s.Next>
                <s.PaginationButtonStartEnd onClick={() => goToFirstPage()}>1</s.PaginationButtonStartEnd>
                <s.PaginationButtonStartEnd onClick={() => goToBackPage()}>&#60;</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToBackTwoPage()}>{page - 2}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToBackPage()}>{page - 1}</s.PaginationButton>
                <s.PaginationButtonStartEnd>{page}</s.PaginationButtonStartEnd>
                <s.PaginationButton onClick={() => goToNextPage()}>{page + 1}</s.PaginationButton>
                <s.PaginationButton onClick={() => goToNextTwoPage()}>{page + 2}</s.PaginationButton>
                <s.PaginationButtonStartEnd onClick={() => goToNextPage()}>&#62;</s.PaginationButtonStartEnd>
            </s.Next>)
        }
    }

    const getMovies = () => {
        axios.get(`${BASE_URL}3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=${page}`)
            .then((res) => {
                console.log(page)
                setMovie(res.data.results)
            })
            .catch((error) => {
                console.log({ error })
            })
    }

    useEffect(() => {
        getMovies()
    }, [page])

    return (
        <s.Body>
            <s.Header>
                <s.Logo src={dmdb}></s.Logo>
            </s.Header>
            <s.Main>
                {
                    movie.map((movie) => {
                        return (
                            <s.CardMovies onClick={() => goToDetailsPage(navigate, movie.id)}>
                                <s.ImagesPoster>
                                    <s.PosterPath src={`${BASE_IMG}${movie.poster_path}`}
                                        title={`${movie.title}`}
                                        alt={`Poster ${movie.title}`}
                                    />
                                </s.ImagesPoster>
                                <s.Title>{movie.title}
                                </s.Title>
                            </s.CardMovies>
                        )
                    })
                }
            </s.Main>
            <s.PaginationStyle>
                {Pagination()}
            </s.PaginationStyle>
            <s.Footer>
                <s.TextFooter>
                    <a href="https://github.com/walison33-fillipe" target="_blank" rel="noopener noreferrer">© 2022 by Walison Fillipe</a>
                </s.TextFooter>
            </s.Footer>
        </s.Body>
    )
}
