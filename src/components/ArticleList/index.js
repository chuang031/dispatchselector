import { NavLink, Route, Switch } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
import {loadArticles} from '../../store/articleReducer'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

const ArticleList = () => {
    const dispatch = useDispatch();
    const articles = useSelector((store)=> store.articleState.entries)
    
  useEffect(() => {
      dispatch(loadArticles());
  }, [dispatch]);
  //dispatch not changing
  
  return (
    <div>
      <h1>Article List</h1>
      
      <ol>
       {articles.map(({id, title})=> (
         //can destructure the keys from each article
         <li key={id}>
           <NavLink to={`/article/${id}`}>{title} </NavLink>
           </li>
       ))}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle />
        </Route>
      </Switch>
    </div>
  );
};

export default ArticleList;