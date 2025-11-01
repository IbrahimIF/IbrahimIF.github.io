import { useEffect } from 'react';
import styled from 'styled-components';

function Linkedin() {
  useEffect(() => {
    const applyFixes = () => {
      const posts = document.querySelectorAll('.eapps-linkedin-feed-posts-item');
      posts.forEach(post => {
        const textContainer = post.querySelector('.eapps-linkedin-feed-post-text, [class*="text"], [class*="content"]');
        if (textContainer && !post.querySelector('.custom-read-more')) {
          if (textContainer.scrollHeight > 800) {
            textContainer.style.maxHeight = '800px';
            textContainer.style.overflow = 'hidden';
            textContainer.style.transition = 'max-height 0.3s ease';
            
            const readMoreBtn = document.createElement('button');
            readMoreBtn.textContent = 'Read more';
            readMoreBtn.className = 'custom-read-more';
            readMoreBtn.style.cssText = `
              background: #0077b5;
              color: white;
              border: none;
              padding: 4px 8px;
              border-radius: 3px;
              cursor: pointer;
              font-size: 11px;
              margin-top: 8px;
            `;
            
            readMoreBtn.onclick = () => {
              if (textContainer.style.maxHeight === 'none') {
                textContainer.style.maxHeight = '800px';
                textContainer.style.overflow = 'hidden';
                readMoreBtn.textContent = 'Read more';
              } else {
                textContainer.style.maxHeight = 'none';
                textContainer.style.overflow = 'visible';
                readMoreBtn.textContent = 'Read less';
              }
            };
            
            post.appendChild(readMoreBtn);
          }
        }
      });
    };
    setTimeout(applyFixes, 3000);
  }, []);

  return (
    <CarouselSection>
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div className="elfsight-app-4b26e22d-a2e5-410a-851b-03e546d81dcf" data-elfsight-app-lazy></div>
    </CarouselSection>
  );
}

export default Linkedin;

const CarouselSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;

  .WidgetBackground__Content-sc-1ho7q3r-2.jkIBsh a[href*="elfsight.com"],
  a[href*="elfsight.com"] {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    height: 0 !important;
    width: 0 !important;
    overflow: hidden !important;
    max-height: 0 !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Remove fixed height, allow auto expansion */
  .ShortenedText__Container-sc-1x39ulp-0.brTBJP.es-text-shortener-container,
  .ShortenedText__ShortenedTextComponent-sc-1x39ulp-1.gksSyl.es-text-shortener {
    max-height: none !important;
    height: auto !important;
  }

  .ShortenedText__Container-sc-1x39ulp-0.brTBJP.es-text-shortener-container {
    overflow: visible !important;
  }

  /* Allow posts to expand */
  .eapps-linkedin-feed-posts-item {
    height: auto !important;
  }

  .custom-read-more {
    transition: background 0.2s ease;
  }

  .custom-read-more:hover {
    background: #005885 !important;
  }
`;