const chk = document.getElementById('chk')

chk.addEventListener('change', (e) => {
  document.body.classList.toggle('dark', e.target.checked);
})
