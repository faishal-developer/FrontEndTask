import { UserAgent } from "@/views/userAgent";
import { headers } from 'next/headers';

const UserAgentRoot = () => {
  return <UserAgent userAgent={headers().get('user-agent') || 'Unknown User-Agent'}/>;
};

export default UserAgentRoot;
