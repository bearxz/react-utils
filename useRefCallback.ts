import { useMemo, useRef } from "react";

/**
 * 1. 自动收集依赖；
 * 2. 缓存函数引用；
 */
export function useRefCallback<T extends (...rest: any[]) => any>(fn: T) {
  // 创建函数容器
  const fnRef = useRef<T>(fn);
  // 每次fn变化，进行赋值
  fnRef.current = fn;
  
  const handleCall = useMemo(() => {
    // 返回当前的ref中的函数，调用时，直接调用ref.current中的最新值；
    return (params: Parameters<T>[0]): ReturnType<T> => fnRef.current(params);
  }, []);

  return handleCall;
}
