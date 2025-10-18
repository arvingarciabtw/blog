import styles from '../styles/HomePage.module.css';
import NavBar from '../components/NavBar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { Link } from 'react-router';

function ArticlesSection({ year, children }) {
  return (
    <section className={styles.sectionArticles}>
      <h3 className={styles.year}>{year}</h3>
      <div className={styles.containerArticleLinks}>{children}</div>
    </section>
  );
}

function ArticleLink({ title, date }) {
  return (
    <Link to="/:id" className={styles.containerArticleLink}>
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
          <ArticleLink title="React: State and Rendering" date="OCT 12" />
          <ArticleLink title="React: The Basics" date="SEP 14" />
          <ArticleLink title="Advanced HTML and CSS" date="SEP 07" />
          <ArticleLink title="Test Driven Development" date="AUG 31" />
          <ArticleLink title="JavaScript: The Halfway Point" date="AUG 24" />
          <ArticleLink title="Intermediate HTML and CSS" date="AUG 17" />
          <ArticleLink title="Web Development Foundations" date="AUG 10" />
          <ArticleLink title="Back to Square One" date="AUG 02" />
        </ArticlesSection>
      </Content>
      <Footer />
    </>
  );
}

export default HomePage;
