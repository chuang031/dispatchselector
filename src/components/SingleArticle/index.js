import './SingleArticle.css';
import { useParams } from 'react-router-dom'

import {useSelector} from 'react-redux'

const SingleArticle = () => {
  const {id} = useParams()
  // const chosenArticle = articles.find((el)=> el.id === id)
  
  // const articles = useSelector((store)=> store.articleState.entries)
  // const chosenArticle= articles.find((el)=>el.id === id)
  
  const chosenArticle = useSelector((store)=>{
    const articles = store.articleState.entries
    return articles.find((el)=>el.id === id)
  })
  
  
  return (
    <div className='singleArticle'>
      <h1>{chosenArticle?.title}</h1>
      <img
        src={chosenArticle?.imageUrl}
        alt={chosenArticle?.title}
      />
      <p>
      {chosenArticle?.body}
      </p>
    </div>
  );
  
    //   <div className='singleArticle'>
    //   <h1>{chosenArticle?.title}</h1>
    //   <img
    //     src={chosenArticle?.imageUrl}
    //     alt={chosenArticle?.title}
    //   />
    //   <p>
    //   {chosenArticle?.body}
    //   </p>
    // </div>
};

export default SingleArticle;
