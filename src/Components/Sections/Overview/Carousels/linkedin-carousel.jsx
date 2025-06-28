import { useEffect } from 'react';
import styled from 'styled-components';


function Linkedin() {
  setTimeout(() => {
    const elfsightLink = document.querySelector('a[href*="elfsight.com"]');
    if (elfsightLink) elfsightLink.remove();
}, 1000);
  useEffect(() => {
    const elfsightLink = document.querySelector('a[href*="elfsight.com"]');
    if (elfsightLink) elfsightLink.remove();
    if (elfsightLink) elfsightLink.style.display = 'none';
  }, []);

    return (
      <CarouselSection>
      <script src="https://static.elfsight.com/platform/platform.js" async></script>
        <div className="elfsight-app-4b26e22d-a2e5-410a-851b-03e546d81dcf" data-elfsight-app-lazy></div>
      </CarouselSection>
    );
}
export default Linkedin


const CarouselSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;

.WidgetBackground__Content-sc-1ho7q3r-2.jkIBsh a[href*="elfsight.com"] {
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

.ShortenedText__Container-sc-1x39ulp-0.brTBJP.es-text-shortener-container,
.ShortenedText__ShortenedTextComponent-sc-1x39ulp-1.gksSyl.es-text-shortener {
    max-height: unset !important;
    height: 600px !important;
}

.ShortenedText__Container-sc-1x39ulp-0.brTBJP.es-text-shortener-container {
    overflow-y: auto !important;
}

`;
