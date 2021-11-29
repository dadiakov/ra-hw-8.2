import useJsonFetch from "../hocks/useJsonFetch";

export default function GetData() {
    const { data } = useJsonFetch(process.env.REACT_APP_DATA_URL, 'data');
  
    return <div>{data}</div>
}