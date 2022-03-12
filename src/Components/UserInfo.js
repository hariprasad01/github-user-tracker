import Fetch from "./Fetch"
export default function UserInf({ userName }) {

    const renderData = (data) => {
        return (
            <div>
                <img
                    src={data.avatar_url}
                    alt={data.login}
                    style={{ width: 200 }}
                />
                <div>
                    <h1>{data.login}</h1>
                    {data.name && <p>{data.name}</p>}
                    {data.location && <p>{data.location}</p>}
                </div>
                <div>{data.message}</div>
            </div>
        )
    }

    return <Fetch url={`https://api.github.com/users/${userName}`} renderData={renderData}></Fetch>

}