export default function GoToID (event, ID) {
    const anchor = (event.target.ownerDocument || document).querySelector('#'+ID);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };