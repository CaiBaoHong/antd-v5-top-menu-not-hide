// src/access.ts

export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    // 多问一个问题, 这里回调的route具体是什么类型?
    menuFilter: (route) => {
      // initialState 中包含了的路由才有权限访问
      console.log('menuFilter, currentUser.accessableMenus: %o, route.name: %o',currentUser?.accessableMenus,route.name)
      return currentUser
        && currentUser.accessableMenus
        && currentUser.accessableMenus.includes(route.name)
    },
  };
}
