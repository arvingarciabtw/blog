import styles from '../styles/HomePage.module.css';
import { Link } from 'react-router';
import NavBar from '../components/NavBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import data from '../data';

const blogs = data.reverse();

function ArticlesSection({ year, children }) {
  return (
    <section className={styles.sectionArticles}>
      <h3 className={styles.year}>{year}</h3>
      <div className={styles.containerArticleLinks}>{children}</div>
    </section>
  );
}

function ArticleLink({ title, date, url }) {
  return (
    <Link to={`/${url}`} className={styles.containerArticleLink}>
      <p className={styles.title}>{title}</p>
      <p className={styles.date}>{date}</p>
    </Link>
  );
}

function HomePage() {
  return (
    <>
      <NavBar />
      <Content>
        <h1 className={styles.heading}>Blog</h1>
        <p className={styles.subheading}>
          Since August 2025, I have been self-studying web development. Below,
          you can see my learnings throughout my journey.
        </p>
        <ArticlesSection year="2025">
          {blogs.map((blog) => (
            <ArticleLink
              key={blog.id}
              url={blog.url}
              title={blog.title}
              date={blog.date}
            />
          ))}
        </ArticlesSection>
      </Content>
      <Footer />
    </>
  );
}

export default HomePage;
