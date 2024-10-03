import { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import styles from "./Text.module.css";
// import './CustomButtons.scss';

const TextOnlyParallax = () => {
  const alignCenter = { display: "flex", alignItems: "center" };
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function centerPageOnScroll() {
      const currentPage = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2
      );
      const pageTop = currentPage.offsetTop;
      const pageHeight = currentPage.offsetHeight;
      const viewportHeight = window.innerHeight;
      window.scrollTo({
        top: pageTop - viewportHeight / 2 + pageHeight / 2,
        behavior: "smooth",
      });
    }

    window.addEventListener("scroll", centerPageOnScroll);
    return () => window.removeEventListener("scroll", centerPageOnScroll);
  }, []);

  const sections = [
    { offset: 1.5, speed: 1.5, content: 'Education', link: '/education' },
    { offset: 2.5, speed: 1.5, content: 'Modal', link: '/ImageModal' },
    { offset: 3.5, speed: 1.0, content: 'Projects', link: '/projects' },
    { offset: 4.5, speed: 1.0, content: 'Project Model', link: '/ProjectWModal' },
    { offset: 5, speed: 1.5, content: 'Contact', link: '/contact' },
  ];




  const handleSectionClick = (link) => {
    navigate(link);
  };

  const isHomePage = location.pathname === '/';

  return (
    <div>
      <div className={styles.background} />
 
      {isHomePage ? (
        <Parallax pages={6}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            style={{ ...alignCenter, justifyContent: "center" }}
          >
            <div className={styles.scrollText}>
              <h1>Hello, my name is Robert</h1>
              <p>If you&rsquo;d like to know a little bit more about me,</p>
              <p>please keep scrolling</p>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 1, end: 2 }}
            style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
          >
            <div className={`${styles.stickyText} ${styles.sticky}`}>
              <h1>I am currently finishing school</h1>
              <h1>and have been studying Software Development</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 3, end: 4 }}
            style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
          >
            <div className={`${styles.stickyText} ${styles.sticky}`}>
              <h1>I worked at a wireless communications company</h1>
              <h1>doing support and web design</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            sticky={{ start: 5, end: 6 }}
            style={{ ...alignCenter, justifyContent: "flex-start", zIndex: -1 }}
          >
            <div className={`${styles.stickyText} ${styles.sticky}`}>
              <h1>Please feel free to reach out to me</h1>
              <h1>Click on the contact text for a contact form</h1>
            </div>
          </ParallaxLayer>

          {sections.map((section) => (
            <ParallaxLayer
              key={section.content}
              offset={section.offset}
              speed={section.speed}
              style={{ ...alignCenter, justifyContent: "flex-end", zIndex: 2 }}
            >
              <div 
                className={styles.clickableText}
                onClick={() => handleSectionClick(section.link)}
              >
                {section.content}
              </div>
            </ParallaxLayer>
          ))}
        </Parallax>
      ) : (
        <div className={styles.contentPage}>
          
          <Link to="/" className={styles.backButton}>
            Back to Main
          </Link>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default TextOnlyParallax;