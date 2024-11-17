"use client";

import { BackToHome } from "@/components/backToHome/backToHome";
import { useUserAgentContext } from "@/components/providers/userAgentProvider";
import { GetServerSideProps } from "next";


import { useEffect, useState } from "react";

export const UserAgent = ({userAgent}:{userAgent:string}) => {
  // const { userAgent } = useUserAgentContext();
  // const router = useRouter()
  // const userAgent2 = useUserAgentContext();

  // useEffect(()=>{console.log(userAgent2,"useragent2")},[userAgent2])
  // useEffect(()=>{console.log(headers().get('user-agent') || 'Unknown User-Agent')},[])


  return (
    <div>
      <BackToHome />

      {/* {userAgent && ( */}
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{userAgent}</div>
        </div>
      {/* )} */}

      {/* {!userAgent && <div>No user agent</div>} */}
    </div>
  );
};
