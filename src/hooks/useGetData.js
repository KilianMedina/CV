import { useState, useEffect } from 'react';
const api = 'https://us-central1-my-api-cv.cloudfunctions.net/api'

const useGetData = () => {
    const [myData, setData] = useState([]);

    useEffect(() => { //se encarga de hacer la peticion
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))       
    }, []);

    return myData;
}

export default useGetData;
