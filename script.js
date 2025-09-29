<script>
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menuMobile = document.getElementById('mainMenu');

  if (!menuToggle || !menuMobile) return;

  // Função para abrir/fechar menu mobile
  const toggleMenu = () => {
    menuMobile.classList.toggle('hidden'); // alterna visibilidade
  };

  // Clique no botão abre/fecha menu
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Fecha o menu ao clicar fora
  document.addEventListener('click', (e) => {
    if (!menuMobile.contains(e.target) && !menuToggle.contains(e.target)) {
      menuMobile.classList.add('hidden');
      // fecha todos os submenus
      document.querySelectorAll('.submenu-parent-mobile').forEach(parent => {
        parent.classList.remove('active');
      });
    }
  });

  // Lógica para abrir/fechar submenus
  document.querySelectorAll('.submenu-parent-mobile > a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });
});
</script>