import Button from 'react-bootstrap/Button';

const Pagination = ({pages, setIndexOfCurrentPage, currentPage}) => {

  const handleButton = (e) => {
    e.preventDefault();
    setIndexOfCurrentPage(Number(e.target.value));
  }

  return (
    <div className="container ">
      <div className='text-center mb-5 '>
        {pages.map((page,index)=>{
          return (  
            <Button
              key={index}
              value={index}
              onClick={handleButton}
              className={index === currentPage ? 'mx-1 my-1 btn-secondary' : 'mx-1 my-1'}
            >
             {page}
            </Button>
          );
        })}
      </div>    
    </div>
  );
}

export default Pagination;