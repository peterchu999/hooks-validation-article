import React from 'react';
import { useForm } from 'react-hook-form';
import { resolver } from './FormValidation';
import './style.css';

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: resolver });
  return (
    <div>
      <h1>Sandwich Pre-Order Form</h1>
      <form
        onSubmit={handleSubmit(
          (data) => {
            console.log('successfully submit', data);
          },
          (error) => {
            console.log('some validation had failed', error);
          }
        )}
      >
        <div
          style={{
            display: 'flex',
            width: '50%',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <label>Name</label>
            <input
              {...register('name', {
                required: 'name is required',
                minLength: {
                  value: 3,
                  message: 'name should have minimum 3 characther',
                },
              })}
            />
          </div>

          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              width: '50%',
              justifyContent: 'space-between',
            }}
          >
            <label>Email</label>
            <input
              {...register('email', {
                required: 'email fields are required',
                validate: (value) => {
                  console.log(value);
                  if (!value.includes('@dev.to')) {
                    return 'need to use dev to email';
                  }
                  return true;
                },
              })}
            />
          </div>
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <div
            style={{
              display: 'flex',
              width: '50%',
              justifyContent: 'space-between',
            }}
          >
            <label>Phone Number</label>
            <input {...register('phoneNumber')} />
          </div>
          {errors.phoneNumber && (
            <p style={{ color: 'red' }}>{errors.phoneNumber.message}</p>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          <label>Sandwich Qty</label>
          <input {...register('qty')} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
