import styles from "../../styles/HomePage.module.css";
import { Link } from "react-router";
import NavBar from "../NavBar";
import Content from "../Content";
import Footer from "../Footer";
import data from "../../data";

interface ArticlesSection {
  year: string;
  children: React.ReactNode;
}

interface ArticleLink {
  title: string;
  date: string;
  url: string;
}

const blogs = data.reverse();

function ArticlesSection({ year, children }: ArticlesSection) {
	return (
		<section className={styles.sectionArticles}>
			<h2 className={styles.year}>{year}</h2>
			<div className={styles.containerArticleLinks}>{children}</div>
		</section>
	);
}

function ArticleLink({ title, date, url }: ArticleLink) {
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
					{blogs.map(blog => (
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
