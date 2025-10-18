import NavBar from '../components/NavBar';
import Content from '../components/Content';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <NavBar />
      <Content>
        <p>This is where the home page content will live.</p>
      </Content>
      <Footer />
    </>
  );
}

export default HomePage;
