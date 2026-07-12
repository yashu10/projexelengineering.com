import Script from 'next/script';

export default function ClientScripts() {
  return (
    <>
      <Script src="/js/blog-data.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
