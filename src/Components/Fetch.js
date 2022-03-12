import useFetch from "../CustomHooks/useFetch";

export default function Fetch({
    url,
    loadingComponent = <p>Loading...</p>,
    errorComponent = (error) => <pre>{error}</pre>,
    renderData
}){
    const [loading, data, error] = useFetch(url);

    if(loading) return loadingComponent
    if(error) return errorComponent(error)
    if(!data) return null
    return renderData(data)
}