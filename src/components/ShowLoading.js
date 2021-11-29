import useJsonFetch from "../hocks/useJsonFetch";

export default function ShowLoading() {
    const { data, isLoading } = useJsonFetch(process.env.REACT_APP_DATA_URL, 'loading');
  
    return <div>{isLoading? 'Loading...': data}</div>
}