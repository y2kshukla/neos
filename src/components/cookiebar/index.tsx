'use client';
// CookieBar.tsx
import React, { useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { PiCookieBold } from 'react-icons/pi';

const CookieBar: React.FC = () => {
    const [showCookieBar, setShowCookieBar] = useState(true);

    const handleAccept = () => {
        // Set cookie or perform any action on user acceptance
        setShowCookieBar(false);
    };

    return (
        <CookieConsent
            location='bottom'
            buttonText='I agree'
            cookieName='myCookieConsent'
            style={{
                background: '#1a1a1a',
                color: '#fff',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                padding: '0px 36px',
            }}
            buttonStyle={{
                color: '#fff',
                background: 'hsl(0, 97%, 74%)',
                borderRadius: '12px',
                padding: '6px 24px',
            }}
            expires={365}
            onAccept={handleAccept}
        >
            <span className='flex items-center gap-2'>
                <span className='text-lg'>
                    <PiCookieBold />
                </span>
                <span>
                    This website uses cookies to enhance the user experience.
                </span>
            </span>
        </CookieConsent>
    );
};

export default CookieBar;
