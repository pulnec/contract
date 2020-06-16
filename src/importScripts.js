import { useEffect } from 'react';
const ImportScript = resourceUrl => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = resourceUrl;
    script.type= 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
return () => {
      document.body.removeChild(script);
    }
  }, [resourceUrl]);
};

export default ImportScript;