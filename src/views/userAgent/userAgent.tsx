"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";
import { useEffect, useState } from "react";

export const UserAgent = () => {
  // const { userAgent } = useUserAgentContext();
  const [userAgent, setUserAgent] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Access the user-agent from the window object
      setUserAgent(window.navigator.userAgent);
    }
  }, []);

  return (
    <div>
      <BackToHome />

      {userAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{userAgent}</div>
        </div>
      )}

      {!userAgent && <div>No user agent</div>}
    </div>
  );
};
