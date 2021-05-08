import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="images/logo.png" alt="logo" />
      </header>
      <nav className="nav">
        <div>
          <a href="q#">Profile</a>
        </div>
        <div>
          <a href="q#">Messages</a>
        </div>
        <div>
          <a href="q#">News</a>
        </div>
        <div>
          <a href="q#">Music</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
          <div>
            Ava + desc
          </div>
          <div>
            My post
            <div>
              New post
            </div>
            <div>
              <div>Post 1</div>
              <div>Post 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






export default App;
