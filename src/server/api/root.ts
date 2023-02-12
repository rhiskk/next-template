import { createTRPCRouter } from "./trpc";
import { skeletonRouter } from "./routers/skeleton";

export const appRouter = createTRPCRouter({
  skeleton: skeletonRouter,
});

export type AppRouter = typeof appRouter;
