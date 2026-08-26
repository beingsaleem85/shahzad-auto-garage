import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Shahzad Auto Garage Islamabad`;
    } else {
      document.title = 'Shahzad Auto Garage | Premium Automotive Repair & Maintenance in Islamabad';
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
