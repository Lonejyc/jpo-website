import Loading from './components/Loading/Loading'
import './App.css'
import { useState } from 'react';

function App() {
    const [ isLoading, setIsLoading ] = useState(true);


    return (
        <>
            {isLoading && <Loading onLoad={() => setIsLoading(false)} />}
            {!isLoading && (<main className='main'>
                <h1>Bienvenue sur le site des JPO</h1>
            </main>)}
        </>
    )
}

export default App  