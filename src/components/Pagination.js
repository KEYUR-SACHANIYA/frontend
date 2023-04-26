import React from 'react'

const Pagination = ({ data = [], setCurrentPage, currentPage, inputNumber, setInputNumber, handleInput }) => {
    const pages = []
    for(let page=1; page <= Math.ceil(data.length/3); page++) {
        pages.push(page)
    }

  return (
    <>  
        {
        data.length ? <>
            <ul className='pagination'>
                {
                    pages.map((page, index) => <li key={page} style={{ background: currentPage === page ? 'grey' : "" }} onClick={() => setCurrentPage(page)}>
                            {page}  
                    </li>)
                }
            </ul>
            <div className='paginationSearch'>
                <input type='number' className='paginationInput' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
                <button className='paginationButton' onClick={handleInput} disabled={inputNumber>10}>Fetch</button>   
            </div>
        </> : <></>
        }
    </>
  )
}

export default Pagination