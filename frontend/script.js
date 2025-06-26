document.getElementById('ping').onclick = async () => {
  const res = await fetch('/api');
  const text = await res.text();
  document.getElementById('output').textContent = text;
}; 