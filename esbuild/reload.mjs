// The files contents are passed to the developement version
// of the index.js file, which is then served to the browser.

new EventSource("/esbuild").addEventListener("change", (e) => {
  const { added, removed, updated } = JSON.parse(e.data);
  console.log(document.getElementsByTagName("link"));

  // css hot reloading
  for (const link of document.getElementsByTagName("link")) {
    const url = new URL(link.href);

    if (url.host === location.host && url.pathname === updated[0]) {
      const next = link.cloneNode();
      next.href = updated[0] + "?" + Math.random().toString(36).slice(2);
      next.onload = () => link.remove();
      link.parentNode.insertBefore(next, link.nextSibling);
      return;
    }
  }

  location.reload();
});
