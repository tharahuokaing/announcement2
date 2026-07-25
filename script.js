let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'kh' : 'en';
    const btn = document.getElementById('langToggleBtn');
    const headerTitle = document.getElementById('headerTitle');
    const headerSubtitle = document.getElementById('headerSubtitle');
    const announcementText = document.getElementById('announcementText');

    if (currentLang === 'kh') {
        btn.textContent = 'English / EN';
        headerTitle.textContent = 'ផតថលធនាគារ ហួតកៃ តារា';
        headerSubtitle.textContent = 'ការដាក់ឱ្យដំណើរការផ្ទៀងផ្ទាត់សុវត្ថិភាពក្រោយពេលសាកល្បងជ្រៀតចូល';
        announcementText.textContent = '🔒 បញ្ជាក់សុវត្ថិភាពប្រព័ន្ធ៖ ការធ្វើតេស្តជ្រៀតចូលបានជោគជ័យ។ បានបន្ថែមមុខងារថ្មីៗសម្រាប់អតិថិជនខាងក្រោម!';
    } else {
        btn.textContent = 'ភាសាខ្មែរ / KH';
        headerTitle.textContent = 'Huokaing Thara Banking Portal';
        headerSubtitle.textContent = 'Post-Penetration Testing Verified Release';
        announcementText.textContent = '🔒 System Security Verified: Penetration testing passed successfully. New customer utilities added below!';
    }

    // Translate dynamic elements using data attributes
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
}
