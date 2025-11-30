import styles from "../../styles/ArticlePage.module.css";
import { useParams } from "react-router";
import NavBar from "../NavBar";
import Content from "../Content";
import Footer from "../Footer";
import blogs from "../../data";

function ArticlePage() {
	const { url } = useParams();
	const blog = blogs.find(b => b.url === url);

	if (!blog) {
		return (
			<div className={styles.notFound}>
				<h1>Oops!</h1>
				<p>Blog not found.</p>
			</div>
		);
	}

	return (
		<>
			<NavBar />
			<Content>
				<article>
					<h1 className={styles.title}>{blog.title}</h1>
					<p className={styles.date}>{blog.date}</p>
					<div className={styles.containerArticleContent}>{blog.content}</div>
				</article>
			</Content>
			<Footer />
		</>
	);
}

export default ArticlePage;
