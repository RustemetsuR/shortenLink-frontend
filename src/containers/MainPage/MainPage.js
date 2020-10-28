import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import { changeInput, fetchShortLink } from '../../store/actions';
import './MainPage.css';

const MainPage = () => {

    const dispatch = useDispatch();
    const shortenLink = useSelector(state => state.shortenLink);
    const inputValue = useSelector(state => state.inputValue);


    useEffect(() =>{}, [dispatch]);

    const shortLink = event => {
        event.preventDefault();
        const data = {
            shortenLink: null,
            url: inputValue,
        };
        dispatch(fetchShortLink(data));
        dispatch(changeInput(''));
    };


    const inputValueChanger = event => {
        const value = event.target.value;
        dispatch(changeInput(value));
    };
    
    return (
        <div>
            <Container>
                <h1>Shorten your link!</h1>
                <form onSubmit={shortLink}>
                    <input required placeholder='Link' value={inputValue} onChange={inputValueChanger} />
                <button type='submit'>Short</button>
                </form>
                {shortenLink !== '' ? 
                <div>
                    <h3>
                        There is your shorten link!
                    </h3>
                    <a href={shortenLink}>{shortenLink}</a>
                </div>: null}
            </Container>
        </div>
    );
};

export default MainPage;