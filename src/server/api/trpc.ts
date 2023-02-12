import { prisma } from "../db";
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

export const createTRPCContext = () => {
  return {
    prisma,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;