import { Workbox } from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('./sw.bundle.js');

    wb.addEventListener('waiting', () => {
      console.log(
        'New Service Worker has installed',
      );
    });

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('Service Worker activated for first time');
      }
    });

    wb.register();
  }
};
export default swRegister;
