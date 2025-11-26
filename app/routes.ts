// routes.ts
import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  // Sử dụng layout helper để bọc các route con
  layout("routes/layout.tsx", [
    
    // index: Route mặc định khi vào "/", trỏ tới home.tsx
    // (Khớp với <Link to="/"> trong HomePage của bạn)
    index("routes/home.tsx"), 

    // route con: "/important", trỏ tới important.tsx
    route("important", "routes/important.tsx"),
  ]),

] satisfies RouteConfig;