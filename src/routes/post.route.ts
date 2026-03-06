import { Router } from 'express'
import postController from '~/controllers/post.controller'

const router = Router()

router.get('/', postController.index)
router.get('/:id', postController.show)
router.post('/', postController.store)
router.put('/:id', postController.update)
router.delete('/:id', postController.destroy)

export default router
