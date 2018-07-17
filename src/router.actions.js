import router from './router'

router.beforeEach((to, from, next) => {
	if (!to.matched[0]) {
		router.push({ name: 'Home' });
	} 
	else if (to.meta.requiresAuth) {
		// S.User.current().then(res => {
		// 	S.currentUser ? next() : router.push({ name: 'Login' })
		// });
		next();
	} 
	// else if (to.name == 'Login') {
	// 	S.User.current().then(res => {
	// 		S.currentUser ? router.push({ name: 'Main' }) : next()
	// 	});
	// }
	else {
		next();
	}
});
