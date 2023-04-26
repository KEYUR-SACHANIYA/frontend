import React from 'react'

const Table = ({ data = [], currentPage = 0 }) => {
  return (
    <div>
        {
            data.length ? 
                    <table className='list'>
                    <thead>
                        <tr>
                            <th className='number'>#</th>
                            <th className='placeName'>Place Name</th>
                            <th className='country'>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.slice(currentPage*3 - 3, currentPage*3).map((item, index) => {
                                return  <tr key={item.id}>
                                <td className='number'>{index+ currentPage*3-3 + 1}</td>
                                <td className='placeName'>{item.name}</td>
                                <td className='country'>{item.country}</td>
                            </tr>
                            })
                        }
                    </tbody>
                </table>
            : <h1>No Data Found</h1>
        }
    </div>
  )
}

export default Table