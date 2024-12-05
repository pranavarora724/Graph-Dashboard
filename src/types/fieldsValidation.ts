import {z} from 'zod'


export const fieldsValidations = z.object(
    {
        rank:z.coerce.number().
        int('Must be an Integer').
        positive('Must be positive')
        .min(1 , 'Required'),

        percentile:z.coerce.
        number().
        min(1,'Required between 1-100')
        .max(100 , 'Required between 1-100'),

        score:z.coerce.number().
        int('Must be Integer').
        positive('Must be positive')
        .min(0,'Required between 0-15')
        .max(15 , 'Required between 0-15')
        
    }
)