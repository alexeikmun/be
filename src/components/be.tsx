import React, { useEffect, useRef } from 'react'

function polishDocument() {
  const oldHeader = (document as any).querySelectorAll('.king-header-wrapper')[1];
  const oldFooter = (document as any).querySelector('.ir217-footer');
  // Remove old header and footer
  oldHeader && oldHeader.remove();
  oldFooter && oldFooter.remove();
}

export default function BrilliantEarth({ uri }: { uri: string }) {
  const divRef = useRef<any>(null);
  const isFirstRender = useRef(true);
  const isCalled = useRef(false);

  useEffect(() => {
    if (isCalled.current) return;
    isCalled.current = true;
    (async () => {
      try {
        const response = await fetch(`https://www.brilliantearth.com/${uri}`, {
          headers: {
            'User-Agent': 'BE-FE-DEV'
          }
        });
        const html = await response.text();

        if (!html || !divRef.current) throw new Error("html prop cant't be null")
        if (!isFirstRender.current) return;
        isFirstRender.current = false;

        const slotHtml = document.createRange().createContextualFragment(html)
        divRef.current.innerHTML = '';
        divRef.current.appendChild(slotHtml);
        polishDocument();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [divRef, uri]);

  return <div ref={divRef} />
}