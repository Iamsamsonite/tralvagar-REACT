import React, {useState, useEffect} from 'react'

const Countries = () => {

    const [data, setData] = useState([]);

    const fetchData = () => {
        const myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");

        const method = {
            method: 'GET',
            headers: myHeader
        }

        const url = "https://countriesnow.space/api/v0.1/countries/population/cities";

        fetch(url, method)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setData(result.data)
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <>
    
    <table className='table table-collapse'>
        <thead>
            <tr>
                <th>Country</th>
                <th>City</th>
            </tr>              
        </thead>
        <tbody>
        {data.length > 0 ? (
            data.map((item, index) => 
                <tr key={index}>
                    <td>{item.country}</td>
                    <td>{item.city}</td>

                </tr>
            )
        ) : (
            <p>Loading</p>
        )}
        </tbody>
    </table>
      
    </>
  )
}

export default Countries
