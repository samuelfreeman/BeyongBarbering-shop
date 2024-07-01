import { clerkMiddleware } from "@clerk/nextjs/server";
import * as crypto from 'crypto';

export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
let cryptoModule;

if (typeof window === 'undefined') {
  // Only import crypto in a Node.js environment
  cryptoModule = require('crypto');
} 