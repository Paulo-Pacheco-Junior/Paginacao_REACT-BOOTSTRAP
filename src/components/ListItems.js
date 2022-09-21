import ListGroup from 'react-bootstrap/ListGroup';
import './ListItems.css';


const ListItems = ({photos}) => {
  return (
    <div className="container">
      <div className='image-grid mt-5 mb-2 pb-5 text-center justify-content-center bg-light'>
        {photos.map((item,index)=>{
          return (
            <ListGroup key={index} className='mt-3'>
              <img className='image-list' src={item.thumbnailUrl} alt={item.title} />
              <ListGroup.Item>{item.title}</ListGroup.Item>
            </ListGroup>           
          );
        })}
      </div>  
    </div>
  );
}

export default ListItems;