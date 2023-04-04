// Write your Character component here

import React from "react"
import styled from 'styled-components'


const StyledCharacter = styled.div`
display:flex;
font-size: 40px;
flex-direction: column;
padding: 8px;
color: #388697;
`

const Character = (props) => {
    return(
        <StyledCharacter className="character">
            <div>
            {props.info.name}
            </div>
        </StyledCharacter>
    )
}
export default Character