// Packages
import React from "react"
import { useNavigate, createSearchParams } from "react-router-dom"
import {
    Pagination as Container,
    PaginationButton,
} from "components-react-julseb"

const Pagination = ({
    currentPage,
    setCurrentPage,
    data,
    totalPages,
    dataLimit,
    pageLimit,
    ...props
}) => {
    // Consts
    const navigate = useNavigate()

    // Pagination
    const nextPage = () => {
        setCurrentPage(currentPage + 1)
        navigate({
            pathname: "/",
            search: createSearchParams({
                page: currentPage + 1,
            }).toString(),
        })
        window.scrollTo(0, 0)
    }

    const prevPage = () => {
        setCurrentPage(currentPage - 1)
        navigate({
            pathname: "/",
            search: createSearchParams({
                page: currentPage - 1,
            }).toString(),
        })
        window.scrollTo(0, 0)
    }

    const changePage = e => {
        const pageNumber = Number(e.target.textContent)
        setCurrentPage(pageNumber)
        navigate({
            pathname: "/",
            search: createSearchParams({
                page: pageNumber,
            }).toString(),
        })
        window.scrollTo(0, 0)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return new Array(pageLimit)
            .fill()
            .map((_, i) => start + i + 1)
            .filter(item => item <= totalPages)
    }

    return (
        <Container>
            <PaginationButton
                onClick={prevPage}
                prev
                disabled={currentPage === 1 && true}
            />

            {getPaginationGroup()[0] !== 1 && (
                <>
                    <PaginationButton number={1} onClick={changePage} />
                    <PaginationButton more />
                </>
            )}

            {getPaginationGroup().map(item => (
                <PaginationButton
                    number={item}
                    key={item}
                    onClick={changePage}
                    active={currentPage === item && true}
                />
            ))}

            {getPaginationGroup()[getPaginationGroup().length - 1] !==
                totalPages && (
                <>
                    <PaginationButton more />

                    <PaginationButton
                        number={totalPages}
                        onClick={changePage}
                    />
                </>
            )}

            <PaginationButton
                onClick={nextPage}
                next
                disabled={currentPage === totalPages && true}
            />
        </Container>
    )
}

export default Pagination
