// Packages
import React from "react"
import styled from "styled-components"
import { Variables, Font } from "components-react-julseb"

// Styles
const Container = styled(Font.P)`
    background-color: ${Variables.Colors.White};
    padding: ${Variables.Spacers.M};
    box-shadow: ${Variables.Shadows.S};
    border-radius: ${Variables.Radiuses.M};
`

const CardUser = ({ user }) => {
    return (
        <Container>
            {user.firstName} {user.lastName}
        </Container>
    )
}

export default CardUser
