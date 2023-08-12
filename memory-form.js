// memory-form.js

// ... (existing code)

document.addEventListener('DOMContentLoaded', function () {
    const memoryList = document.querySelector('.memory-list');
    const memories = memoryList.querySelectorAll('.memory');
    let currentIndex = 0;

    function showMemory(index) {
        memories.forEach(memory => {
            memory.style.display = 'none';
        });
        memories[index].style.display = 'block';
    }

    function showNextMemory() {
        currentIndex = (currentIndex + 1) % memories.length;
        showMemory(currentIndex);
    }

    showMemory(currentIndex); // Show the initial memory

    setInterval(showNextMemory, 5000); // Change memory every 5 seconds
});

// ... (existing code)
