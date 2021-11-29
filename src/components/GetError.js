import useJsonFetch from "../hocks/useJsonFetch";

export default function GetError() {
    const { hasError } = useJsonFetch(process.env.REACT_APP_DATA_URL, 'error');
  
    return <div>{hasError.toString()}</div>
}