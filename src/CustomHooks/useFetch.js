import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    async function getData(url) {
        try {
            const uData = await (await fetch(url)).json();
            console.log('uData: ', uData);
            setData(uData)
        } catch (error) {
            console.log('error: ', error);
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData(url)
    }, [url])

    return [loading, data, error];
}