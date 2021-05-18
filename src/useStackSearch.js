import {useState, useEffect} from 'react';

const UseStackSearch = (term) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://api.stackexchange.com/2.2/search?order=desc&sort=votes&intitle=${term}&site=stackoverflow`)
                .then(response => response.json())
                .then(result => {
                    setData(result)
                }).catch(error => {
                    console.log(error);
                });
        }

        fetchData().then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        });
    }, [term])

    return {data};
};

export default UseStackSearch;
