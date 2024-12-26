import { Request, Response, NextFunction } from "express";
import { db } from "../db";
import { User } from "../db/schema";
import { eq, count } from "drizzle-orm";

interface AuthenticatedRequest extends Request {
  userId?: string;
}

// Middleware to enforce folder limit for free users
export const enforceLimit = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const userId = Number(req.userId); // Assuming userId is extracted from the token
  const userResult = await db
    .select()
    .from(User)
    .where(eq(User.id, userId))
    .limit(1);
  const user = userResult[0];

  if (user.plan === "free") {
    // TODO: add bussiness logic to enforce limits
  }

  next();
};
