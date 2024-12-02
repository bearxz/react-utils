/**
 * 惰性初始化
 */
function lazyContstant<T = any>(cb: () => T): () => T {
  let cache = () => {
    const result = cb();
    cache = () => result;
    return result;
  }
  return () => cache();
}
