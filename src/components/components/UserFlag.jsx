// UserFlag.jsx
import React, { useState, useEffect } from 'react';

const UserFlag = () => {
  const [countryCode, setCountryCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        // First try to get location using Geolocation API
        if (navigator.geolocation) {
          setLoading(true);
          
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const { latitude, longitude } = position.coords;
                
                // Use reverse geocoding to get country from coordinates
                const response = await fetch(
                  `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                );
                
                if (!response.ok) {
                  throw new Error('Failed to get location data');
                }
                
                const data = await response.json();
                setCountryCode(data.countryCode);
                setLoading(false);
              } catch (err) {
                fallbackToIPLookup();
              }
            },
            (err) => {
              console.log("Geolocation permission denied or error:", err);
              fallbackToIPLookup();
            }
          );
        } else {
          // Browser doesn't support geolocation
          fallbackToIPLookup();
        }
      } catch (err) {
        setError("Could not determine your location");
        setLoading(false);
      }
    };

    // Fallback method using IP-based geolocation
    const fallbackToIPLookup = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
          throw new Error('Failed to get location from IP');
        }
        const data = await response.json();
        setCountryCode(data.country_code);
        setLoading(false);
      } catch (err) {
        setError("Could not determine your country");
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  if (loading) {
    return <div>Loading your location...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!countryCode) {
    return <div>Unable to determine your country</div>;
  }

  // Convert country code to lowercase for flag emoji
  const countryCodeLower = countryCode.toLowerCase();
  
  return (
    <div className="user-flag">
      <h3>Your Location</h3>
      
      {/* Option 1: Using flag emoji (simple but limited styling) */}
      <div style={{ fontSize: '2rem' }}>
        {countryCode && 
          // Convert country code to regional indicator symbols (flag emoji)
          String.fromCodePoint(...[...countryCodeLower].map(
            c => c.charCodeAt(0) + 127397
          ))
        }
      </div>
      
      {/* Option 2: Using flag images from a CDN */}
      <div>
        {countryCode && 
          <img 
            src={`https://flagcdn.com/32x24/${countryCodeLower}.png`} 
            srcSet={`https://flagcdn.com/64x48/${countryCodeLower}.png 2x, https://flagcdn.com/96x72/${countryCodeLower}.png 3x`}
            width="32" 
            height="24" 
            alt={`Flag of user's country (${countryCode})`}
          />
        }
      </div>
    </div>
  );
};

export default UserFlag;

// Usage in your app:
// import UserFlag from './components/UserFlag';
// 
// function App() {
//   return (
//     <div className="App">
//       <UserFlag />
//       {/* Your other components */}
//     </div>
//   );
// }