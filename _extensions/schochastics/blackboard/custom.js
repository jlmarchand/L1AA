<script>
document.addEventListener('DOMContentLoaded', () => {
  const fix = () => {
    document.querySelectorAll(
      '.reveal .slides section.scrollable, .reveal .slides section[style*="overflow"]'
    ).forEach(s => {
      s.style.setProperty('overflow-y', 'auto', 'important');
      s.style.setProperty('overflow-x', 'hidden', 'important');
    });
  };
  if (window.Reveal && Reveal.on) {
    Reveal.on('ready', fix);
    Reveal.on('slidechanged', fix);
  }
  fix();
});
</script>

