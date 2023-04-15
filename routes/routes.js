const router = require('express').Router();

const homeController = require('../controllers/homePage');
const aboutController = require('../controllers/aboutPage');
const contactController = require('../controllers/contactPage');
const mailSenderController = require('../controllers/mail');
const storeController = require('../controllers/galleryPage');
// products
const productController = require('../controllers/productPage');
// User DB
const registerController = require('../controllers/register');
const storeUserController = require('../controllers/StoreUser');
const profileController = require('../controllers/profilePage');
const loginController = require('../controllers/login');
const loginUserController = require('../controllers/loginUser');
const logoutUserController = require('../controllers/logout');
const deleteUserController = require('../controllers/deleteUser');
// Blogs
const newPostController = require('../controllers/newPost');
const storePostController = require('../controllers/StorePost');
const blogsController = require('../controllers/blogsPage');
const postController = require('../controllers/singlePost');
const deletePostController = require('../controllers/deletePost');
// Designs
const newDesignController = require('../controllers/newDesign');
const storeDesignController = require('../controllers/StoreDesign');
const designsController = require('../controllers/designsPage');
const singleDesignController = require('../controllers/singleDesign');
const deleteDesignController = require('../controllers/deleteDesign');

// MiddleWare
const auth = require('../middlewares/ifAuthorized');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/contact', contactController);
// posting contact form data code block goes here//////////
router.post('/form/send', mailSenderController)
router.get('/gallery', storeController);
// products
router.get('/product', productController);
// User DB
router.get('/register', registerController);
router.post('/store/user', storeUserController);
router.get('/profile/:id', profileController)
router.get('/login', loginController);
router.post('/login/user', loginUserController);
router.get('/logout', logoutUserController);
router.get('/delete/user/:id', deleteUserController);
// blogs
router.get('/create', auth, newPostController);
router.post('/store/post', auth, storePostController);
router.get('/blogs', blogsController);
router.get('/post/:id', postController);
router.get('/delete/post/:id', auth, deletePostController);
// designs
router.get('/createDesign', newDesignController);
router.post('/store/design', storeDesignController);
router.get('/designs', designsController);
router.get('/designDB/:id', singleDesignController);
router.get('/delete/design', deleteDesignController);

module.exports = router;