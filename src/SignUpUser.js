import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUpUser.css'; 

const SignUpUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert(JSON.stringify(data));
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
      <div className="form-group">
        <label>First Name</label>
        <input {...register('firstName', { required: 'First name is required' })} />
        {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input {...register('lastName', { required: 'Last name is required' })} />
        {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
      </div>

      <div className="form-group">
        <label>User Name</label>
        <input {...register('userName', { required: 'User name is required' })} />
        {errors.userName && <p className="error-message">{errors.userName.message}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format'
          }
        })} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" {...register('password', { required: 'Password is required' })} />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Please confirm password',
            validate: value =>
              value === watch('password') || 'The passwords do not match'
          })}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
      </div>

      <div className="form-buttons">
        <button type="submit">Submit</button>
        <button type="button">Cancel</button>
      </div>
    </form>
  );
};

export default SignUpUser;

