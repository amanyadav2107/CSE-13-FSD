document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('title');
    const doll = document.getElementById('doll');
    const message = document.getElementById('message');
    const cake = document.getElementById('cake');
    const from = document.getElementById('from');
    const startBtn = document.getElementById('startBtn');

    startBtn.addEventListener('click', function() {
        // Hide button
        startBtn.style.display = 'none';

        // Step 1: Show title
        setTimeout(() => {
            title.style.opacity = '1';
        }, 500);

        // Step 2: Doll appears with animation
        setTimeout(() => {
            doll.style.opacity = '1';
            doll.style.transform = 'scale(1)';
        }, 1500);

        // Step 3: Message appears
        setTimeout(() => {
            message.style.opacity = '1';
        }, 2500);

        // Step 4: Cake appears
        setTimeout(() => {
            cake.style.opacity = '1';
        }, 3500);

        // Step 5: Doll "cuts" the cake
        setTimeout(() => {
            cake.classList.add('cut');
        }, 4500);

        // Step 6: Show from message
        setTimeout(() => {
            from.style.opacity = '1';
        }, 5500);
    });
});