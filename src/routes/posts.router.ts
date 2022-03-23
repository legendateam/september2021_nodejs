import { Router } from 'express';

import {
    getAll, getOne, addOne, removeOne, getUserPosts, updateFieldValue,
} from '../controllers/posts.controller';
import { postFieldsFilledMiddleware } from '../middlewares/postFieldsFilled.middleware';
import { postPatchFieldsMiddleware } from '../middlewares/postPatchFields.middleware';
import { postTypeMiddleware } from '../middlewares/postType.middleware';

export const postsRouter = Router();

postsRouter.get('/', getAll);
postsRouter.post('/', postFieldsFilledMiddleware, postTypeMiddleware, addOne);
postsRouter.get('/:postId', getOne);
postsRouter.delete('/:postId', removeOne);
postsRouter.patch('/:postId', postPatchFieldsMiddleware, updateFieldValue);
postsRouter.get('/user/:userId', getUserPosts);
