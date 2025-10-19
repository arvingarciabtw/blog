import styles from '../styles/ArticlePage.module.css';
import { useParams } from 'react-router';
import NavBar from '../components/NavBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import blogs from '../data';

function ArticlePage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h1>Blog not found.</h1>;
  }

  return (
    <>
      <NavBar />
      <Content>
        <article>
          <h1>{blog.title}</h1>
          <p className={styles.date}>{blog.date}</p>
          <div className={styles.containerArticleContent}>{blog.content}</div>
        </article>
      </Content>
      <Footer />
    </>
  );
}

export default ArticlePage;
