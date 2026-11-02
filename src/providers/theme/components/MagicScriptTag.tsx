const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function() {
      var theme;
      try { theme = localStorage.getItem('color-theme'); } catch (e) {}
      if (theme !== 'light' && theme !== 'dark') {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      document.documentElement.dataset.theme = theme;
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export default MagicScriptTag;
