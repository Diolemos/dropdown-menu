const profileImage = document.getElementById('profile-img');
const dropdownMenu = document.getElementById('dropdown-menu');

profileImage.addEventListener('click',()=>{
    dropdownMenu.classList.toggle('hidden')
})