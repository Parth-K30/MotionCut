document.addEventListener("DOMContentLoaded", () => {
    const leaves = document.querySelectorAll('.leaf');
    const delayAfterFall = 5000; // 5 seconds delay

    leaves.forEach((leaf, index) => {
        setTimeout(() => {
            startFalling(leaf);
        }, index * 1000); // stagger the start times
    });

    function startFalling(leaf) {
        resetLeaf(leaf);

        leaf.addEventListener('animationiteration', () => {
            setTimeout(() => {
                resetLeaf(leaf);
            }, delayAfterFall);
        });

        leaf.style.animationPlayState = 'running';
    }

    function resetLeaf(leaf) {
        const animationDuration = Math.random() * 5 + 5; // Random duration between 5 and 10 seconds
        const delay = Math.random() * 5; // Random delay between 0 and 5 seconds
        const startX = Math.random() * 100; // Random horizontal starting position

        leaf.style.animationDuration = `${animationDuration}s`;
        leaf.style.animationDelay = `${delay}s`;
        leaf.style.left = `${startX}vw`;
        leaf.style.transform = `translateY(0) rotate(0deg)`;
    }
});
