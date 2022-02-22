// Packages
import React, { useState, useEffect } from "react"
import { Font, Grid, Loader, Wrapper, Main } from "components-react-julseb"

// Components
import Pagination from "../components/Pagination"
import getUsers from "../api/getUsers"
import CardUser from "../components/CardUser"

const ListUsers = () => {
    // Consts
    const dataLimit = 90 // Set number of items per page
    const pageLimit = 5 // Set maximum number of pages shown in pagination

    // Data
    const [allUsers, setAllUsers] = useState([])
    const [currentPage, setCurrentPage] = useState()
    const [totalPages, setTotalPages] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getUsers("/users.json")
            .then(res => {
                setAllUsers(res)
                setTotalPages(Math.ceil(res.length / dataLimit))
                setIsLoading(false)
            })
            .catch(err => console.log(err))
        
        setCurrentPage(parseInt(window.location.href.split("/")[4]))
    }, [])

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return allUsers.slice(startIndex, endIndex)
    }

    return (
        <Wrapper>
            <Main>
                <Font.H1>All users</Font.H1>

                {isLoading ? (
                    <Loader />
                ) : allUsers.length === 0 ? (
                    <Font.P>Data is empty.</Font.P>
                ) : (
                    <Grid col={3}>
                        {getPaginatedData().map((user, i) => (
                            <CardUser user={user} key={i} />
                        ))}
                    </Grid>
                )}

                {totalPages > 1 && (
                    <Pagination
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        data={allUsers}
                        totalPages={totalPages}
                        dataLimit={dataLimit}
                        pageLimit={pageLimit}
                    />
                )}
            </Main>
        </Wrapper>
    )
}

export default ListUsers
