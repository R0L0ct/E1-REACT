import styled from "styled-components"
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const StyledH1 = styled.h1`
font-size: 100px;
display: flex;
justify-content: center;
align-items: center;
height: 500px;
`

const Home = () => {
return (
<StyledH1><KeyboardDoubleArrowLeftIcon fontSize="200px"/>HOME<KeyboardDoubleArrowRightIcon fontSize="200px"/></StyledH1>
)
}

export default Home
