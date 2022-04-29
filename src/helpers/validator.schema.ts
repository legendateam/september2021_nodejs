import Joi from 'joi';

import { commonValidator } from './commonValidator.helper';
import {ICorpus, IDepartment, IGroup, IRating, IStudent, ISubject, ITeacher} from '../interfaces';

class ValidatorSchema {
    public static authSchema: Joi.ObjectSchema = Joi.object({
        firstName: commonValidator.name.min(2).max(20)
            .required()
            .messages({
                'string.base': 'First Name should be a type of text',
                'string.empty': 'First Name cannot be an empty field',
                'string.pattern.base': 'First Name should have only Latin letters also the first letter is capitalized',
                'string.min': 'First Name should have a minimum length of {#limit}',
                'string.max': 'First Name should have a maximum length of {#limit}',
                'any.required': 'First Name is a required field',
            }),

        lastName: commonValidator.name.min(3).max(35)
            .required()
            .messages({
                'string.base': 'Last Name should be a type of text',
                'string.empty': 'Last Name cannot be an empty field',
                'string.pattern.base': 'Last Name should have only Latin letters also the first letter is capitalized',
                'string.min': 'Last Name should have a minimum length of {#limit}',
                'string.max': 'Last Name should have a maximum length of {#limit}',
                'any.required': 'Last Name is a required field',
            }),

        age: Joi.number().min(12).max(200).required()
            .messages({
                'number.base': 'age should be a type of number',
                'number.empty': 'age cannot be an empty field',
                'number.min': 'age should be from {#limit}',
                'number.max': 'age should be up {#limit}',
                'any.required': 'age is a required field',
            }),

        phone: commonValidator.phone.min(11).max(20)
            .required()
            .messages({
                'string.base': 'phone should be a type of text',
                'string.empty': 'phone cannot be an empty field',
                'string.pattern.base': 'phone should have numbers also allowed "+-()" characters and without spaces',
                'string.min': 'the length of the phone number can be from {#limit}',
                'string.max': 'the length of the phone number can be to {#limit} characters',
                'any.required': 'phone is a required field',
            }),

        email: commonValidator.email.required()
            .messages({
                'string.base': 'email should be a type of text',
                'string.empty': 'email cannot be an empty field',
                'string.pattern.base': 'email should have only Latin letters also "@" and without spaces',
                'string.min': 'email should have a minimum length of {#limit}',
                'string.max': 'email Name should have a maximum length of {#limit}',
                'any.required': 'email is a required field',
            }),

        password: commonValidator.password.min(8).max(40)
            .alphanum()
            .required()
            .messages({
                'string.base': 'password should be a type of text',
                'string.empty': 'password cannot be an empty field',
                'string.pattern.base': 'password should have only Latin litters without spaces also one capital letter and one number',
                'string.min': 'password should have a minimum length of {#limit}',
                'string.max': 'password Name should have a maximum length of {#limit}',
                'any.required': 'password is a required field',
            }),
    });

    public static authLoginSchema: Joi.ObjectSchema = Joi.object({
        email: commonValidator.email.required()
            .messages({
                'string.base': 'email should be a type of text',
                'string.empty': 'email cannot be an empty field',
                'string.pattern.base': 'email should have only Latin letters also "@" and without spaces',
                'string.min': 'email should have a minimum length of {#limit}',
                'string.max': 'email Name should have a maximum length of {#limit}',
                'any.required': 'email is a required field',
            }),

        password: commonValidator.password.min(8).max(40)
            .alphanum()
            .required()
            .messages({
                'string.base': 'password should be a type of text',
                'string.empty': 'password cannot be an empty field',
                'string.pattern.base': 'password should have only Latin litters without spaces also one capital letter and one number',
                'string.min': 'password should have a minimum length of {#limit}',
                'string.max': 'password Name should have a maximum length of {#limit}',
                'any.required': 'password is a required field',
            }),
    });

    public static authTokenSchema: Joi.ObjectSchema = Joi.object({
        authorization: Joi.string().min(3).max(200).required(),
    });

    public static actionSchema: Joi.ObjectSchema = Joi.object({
        commentId: Joi.number().required()
            .messages({
                'number.base': 'commentId should be a type of number',
                'number.empty': 'commentId cannot be an empty field',
                'number.min': 'commentId should be from {#limit}',
                'number.max': 'commentId should be up {#limit}',
                'any.required': 'commentId is a required field',
            }),

        userId: Joi.number().required()
            .messages({
                'number.base': 'userId should be a type of number',
                'number.empty': 'userId cannot be an empty field',
                'number.min': 'userId should be from {#limit}',
                'number.max': 'userId should be up {#limit}',
                'any.required': 'userId is a required field',
            }),

        isLike: Joi.number().min(0).max(1)
            .messages({
                'number.base': 'like should be a type of number',
                'number.min': ' like minimum {#limit}',
                'number.max': ' like maximum {#limit}',
            }),

        isDisLike: Joi.number().min(0).max(1)
            .messages({
                'number.base': ' dislike should be a type of number',
                'number.min': ' dislike minimum {#limit}',
                'number.max': ' dislike maximum {#limit}',
            }),
    });

    public static commentSchema: Joi.ObjectSchema = Joi.object({
        authorId: Joi.number().min(0).required()
            .messages({
                'number.base': 'authorId should be a type of number',
                'number.empty': 'authorId cannot be an empty field',
                'number.min': 'authorId should be from {#limit}',
                'any.required': 'authorId is a required field',
            }),

        postId: Joi.number().min(0).required()
            .messages({
                'number.base': 'postId should be a type of number',
                'number.empty': 'postId cannot be an empty field',
                'number.min': 'postId should be from {#limit}',
                'any.required': 'postId is a required field',
            }),

        text: Joi.string().min(1).max(250).required()
            .messages({
                'string.base': 'text should be a type of text',
                'string.empty': 'text cannot be an empty field',
                'string.min': 'text should have a minimum length of {#limit}',
                'string.max': 'text Name should have a maximum length of {#limit}',
                'any.required': 'text is a required field',
            }),
    });

    public static postSchema: Joi.ObjectSchema = Joi.object({
        title: Joi.string().min(1).max(250).required()
            .messages({
                'string.base': 'title should be a type of text',
                'string.empty': 'title cannot be an empty field',
                'string.min': 'title should have a minimum length of {#limit}',
                'string.max': 'title Name should have a maximum length of {#limit}',
                'any.required': 'title is a required field',
            }),

        text: Joi.string().min(1).max(250).required()
            .messages({
                'string.base': 'text should be a type of text',
                'string.empty': 'text cannot be an empty field',
                'string.min': 'text should have a minimum length of {#limit}',
                'string.max': 'text Name should have a maximum length of {#limit}',
                'any.required': 'text is a required field',
            }),

        userId: Joi.number().min(0).required()
            .messages({
                'number.base': 'userId should be a type of number',
                'number.empty': 'userId cannot be an empty field',
                'number.min': 'userId should be from {#limit}',
                'any.required': 'userId is a required field',
            }),
    });

    public static userPatchSchema: Joi.ObjectSchema = Joi.object({
        phone: commonValidator.phone.min(11).max(20)
            .required()
            .messages({
                'string.base': 'phone should be a type of text',
                'string.empty': 'phone cannot be an empty field',
                'string.pattern.base': 'phone should have numbers also allowed "+-()" characters and without spaces',
                'string.min': 'the length of the phone number can be from {#limit}',
                'string.max': 'the length of the phone number can be to {#limit} characters',
                'any.required': 'phone is a required field',
            }),

        email: commonValidator.email
            .required()
            .messages({
                'string.base': 'email should be a type of text',
                'string.empty': 'email cannot be an empty field',
                'string.pattern.base': 'email should have only Latin letters also "@" and without spaces',
                'string.min': 'email should have a minimum length of {#limit}',
                'string.max': 'email Name should have a maximum length of {#limit}',
                'any.required': 'email is a required field',
            }),

        currentPassword: commonValidator.password.min(8).max(40)
            .alphanum()
            .required()
            .messages({
                'string.base': 'password should be a type of text',
                'string.empty': 'password cannot be an empty field',
                'string.pattern.base': 'password should have only Latin litters without spaces also one capital letter and one number',
                'string.min': 'password should have a minimum length of {#limit}',
                'string.max': 'password Name should have a maximum length of {#limit}',
                'any.required': 'currentPassword is a required field',
            }),

        newPassword: commonValidator.password.min(8).max(40)
            .alphanum()
            .messages({
                'string.base': 'password should be a type of text',
                'string.empty': 'password cannot be an empty field',
                'string.pattern.base': 'password should have only Latin litters without spaces also one capital letter and one number',
                'string.min': 'password should have a minimum length of {#limit}',
                'string.max': 'password Name should have a maximum length of {#limit}',
            }),
    });

    public static paramsSchema: Joi.ObjectSchema = Joi.object({
        userId: commonValidator.id.required().messages({
            'number.base': 'params should be a type of number',
            'number.empty': 'params cannot be an empty field',
            'any.required': 'params is a required field',
        }),
    });

    public static paramsMongoIdSchema: Joi.ObjectSchema = Joi.object({
        _id: commonValidator.idMongo.required().messages({
            'number.base': 'params should be a type of number',
            'number.empty': 'params cannot be an empty field',
            'any.required': 'params is a required field',
        }),
    });

    public static emailSchema: Joi.ObjectSchema = Joi.object({
        email: commonValidator.email.min(8).required().messages({
            'string.base': 'email should be a type of text',
            'string.empty': 'email cannot be an empty field',
            'string.pattern.base': 'email should have only Latin letters also "@" and without spaces',
            'string.min': 'email should have a minimum length of {#limit}',
            'any.required': 'email is a required field',
        }),
    });

    public static passwordSchema: Joi.ObjectSchema = Joi.object({
        password: commonValidator.password.min(8).max(40)
            .alphanum()
            .required()
            .messages({
                'string.base': 'password should be a type of text',
                'string.empty': 'password cannot be an empty field',
                'string.pattern.base': 'password should have only Latin litters without spaces also one capital letter and one number',
                'string.min': 'password should have a minimum length of {#limit}',
                'string.max': 'password Name should have a maximum length of {#limit}',
                'any.required': 'password is a required field',
            }),
    });

    public static teacherSchema: Joi.ObjectSchema = Joi.object<ITeacher>({
        firstName: commonValidator.name.required().messages({
            'string.base': 'First Name should be a type of text',
            'string.empty': 'First Name cannot be an empty field',
            'string.pattern.base': 'First Name should have only Latin letters also the first letter is capitalized',
            'any.required': 'First Name is a required field',
        }),

        lastName: commonValidator.name.required().messages({
            'string.base': 'First Name should be a type of text',
            'string.empty': 'First Name cannot be an empty field',
            'string.pattern.base': 'First Name should have only Latin letters also the first letter is capitalized',
            'any.required': 'First Name is a required field',
        }),

        age: Joi.number().min(21).max(65).required()
            .messages({
                'number.base': 'age should be a type of number',
                'number.empty': 'age cannot be an empty field',
                'number.min': 'age should be from {#limit}',
                'number.max': 'age should be up {#limit}',
                'any.required': 'age is a required field',
            }),

        password: commonValidator.password.min(8).max(40)
            .required()
            .messages({
                'string.base': 'password should be a type of text',
                'string.empty': 'password cannot be an empty field',
                'string.pattern.base': 'password should have only Latin litters without spaces also one capital letter and one number',
                'string.min': 'password should have a minimum length of {#limit}',
                'string.max': 'password Name should have a maximum length of {#limit}',
                'any.required': 'password is a required field',
            }),

        email: commonValidator.email.required().messages({
            'string.base': 'email should be a type of text',
            'string.empty': 'email cannot be an empty field',
            'string.pattern.base': 'email should have only Latin letters also "@" and without spaces',
            'any.required': 'email is a required field',
        }),
        address: commonValidator.address,
        role: Joi.string().max(8),
        department: Joi.string(),
        subjects: Joi.string(),
        corpus: Joi.string()
    });

    public static studentSchema: Joi.ObjectSchema = Joi.object<IStudent>({
        firstName: commonValidator.name.required().messages({
            'string.base': 'First Name should be a type of text',
            'string.empty': 'First Name cannot be an empty field',
            'string.pattern.base': 'First Name should have only Latin letters also the first letter is capitalized',
            'any.required': 'First Name is a required field',
        }),

        lastName: commonValidator.name.required().messages({
            'string.base': 'First Name should be a type of text',
            'string.empty': 'First Name cannot be an empty field',
            'string.pattern.base': 'First Name should have only Latin letters also the first letter is capitalized',
            'any.required': 'First Name is a required field',
        }),

        age: Joi.number().min(21).max(65).required()
            .messages({
                'number.base': 'age should be a type of number',
                'number.empty': 'age cannot be an empty field',
                'number.min': 'age should be from {#limit}',
                'number.max': 'age should be up {#limit}',
                'any.required': 'age is a required field',
            }),

        password: commonValidator.password.min(8).max(40)
            .required()
            .messages({
                'string.base': 'password should be a type of text',
                'string.empty': 'password cannot be an empty field',
                'string.pattern.base': 'password should have only Latin litters without spaces also one capital letter and one number',
                'string.min': 'password should have a minimum length of {#limit}',
                'string.max': 'password Name should have a maximum length of {#limit}',
                'any.required': 'password is a required field',
            }),

        email: commonValidator.email.required().messages({
            'string.base': 'email should be a type of text',
            'string.empty': 'email cannot be an empty field',
            'string.pattern.base': 'email should have only Latin letters also "@" and without spaces',
            'any.required': 'email is a required field',
        }),
        address: commonValidator.address,
        formOfEducation: Joi.string().required(),
        role: Joi.string(),
        department: Joi.string(),
        subjects: Joi.string(),
        curator: Joi.string(),
        teachers: Joi.string(),
        group: Joi.string(),
        ratings: Joi.string()
    });

    public static subjectSchema: Joi.ObjectSchema = Joi.object<ISubject>({
        name: Joi.string().required().trim().message('The Name of the subject must be and has type text'),
    });

    public static ratingSchema: Joi.ObjectSchema = Joi.object<IRating>({
        rating: Joi.number().required().min(1).max(5)
            .message('rating cannot be an empty field and rating must be type number also min 1 max 5'),
        subject: Joi.string()
    });

    public static groupSchema: Joi.ObjectSchema = Joi.object<IGroup>({
        name: Joi.string().required().min(2)
            .message('type name string and min 2 symbols'),
        course: Joi.number().required(),
        subjects: Joi.string(),
        curator: Joi.string(),
        department: Joi.string(),
        corpus: Joi.string(),
    });

    public static departmentSchema: Joi.ObjectSchema = Joi.object<IDepartment>({
        name: Joi.string().required().min(5)
            .message('type name string and min 5 symbols'),
        webStore: Joi.string(),
    });

    public static corpusSchema: Joi.ObjectSchema = Joi.object<ICorpus>({
        number: Joi.number().required().min(0),
        subjects: Joi.string(),
        department: Joi.string(),
        address: commonValidator.address
    })
}

export const {
    authSchema, authLoginSchema, authTokenSchema, actionSchema, commentSchema, postSchema, userPatchSchema, paramsSchema,
    emailSchema, passwordSchema, paramsMongoIdSchema, groupSchema, departmentSchema, ratingSchema, studentSchema,
    subjectSchema, teacherSchema, corpusSchema
} = ValidatorSchema;
