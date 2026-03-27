

export default function useGlobalHotkeys() {
  // oxlint-disable-next-line no-unused-vars
  const addKeyDownListener = () => {
    document.addEventListener('keydown',  (event) => {
      if (event.key === 'Escape') {
        console.log('Escape key was pressed!');
        event.preventDefault();
      }

      // Check for Ctrl + K
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        console.log('K was pressed!');
      }

      // Check for Ctrl + F
      if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        console.log('F was pressed!');
      }
    });
  }
}
