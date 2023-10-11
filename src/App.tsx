import './App.css';
import styled from 'styled-components';
import icons from './assets/images/icons-sprite.svg'; 

const logo: string = 'square';

function App() {
    return (
        <div className="App">
            <Title>Welcome to IT-INCUBATOR</Title>

            <svg fill='lightblue' width='200' height='200'>
                <use xlinkHref={`${icons}#${logo}`} />
            </svg>
        </div>
    );
}

export default App;

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;