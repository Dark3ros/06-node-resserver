const { Routers } = require ('express');
const { 
    getAllUsers, 
    createUser, 
    updateUser, 
    updatePartialUser, 
    deleteUser 
} = require('../controller/users');

const router = Routers();

router.get('/',getAllUsers);
router.post('/',createUser);
router.put('/:id',updateUser);
router.patch('/:id',updatePartialUser);
router.delete('/:id',deleteUser);

module.exports = router;
