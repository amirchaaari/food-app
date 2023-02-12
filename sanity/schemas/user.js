export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        validation: Rule => Rule.required().min(8)
      },
      {
        name: 'fullName',
        title: 'Full Name',
        type: 'string',
        validation: Rule => Rule.required()
      }
    ],
  };
  